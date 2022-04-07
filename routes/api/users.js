const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const {User} = require("../../models/User");
const {Post} = require("../../models/Post");
const Like = require("../../models/Like");
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// test route
router.get("/test", (req, res) => {
  res.json({ msg: "User route yo" })
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json({nouserfound: "No user found by that id"}))
})

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email})
  .then(user => {
    if (user) {
      errors.email = "Sorry, email is already in use";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        followers: [],
        posts: [],
        likedPosts: []
      })
      
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then((user) => {
              const payload = { id: user.id, username: user.username };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        })
      })

    }
  })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email =  req.body.email;
  const password =  req.body.password;

  User.findOne({email})
    .then(user => {
      if (!user) {
        errors.email = "This user does not exist";
        return res.status(400).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {id: user.id, email: user.email};

            jwt.sign(
              payload,
              keys.secretOrKey,
              {expiresIn: 3600},
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                })
              }
            )
          } else {
            return res.status(400).json("Sorry, incorrect email or password");
          }
        })
    })
})



// ------ FETCHING USERS POSTS AND LIKED POSTS ------

// there is a route that fetches users posts already in routes/api/posts.js


// fetching posts that users liked.. moved to posts routes

// router.get("/:authorId/likedPosts", (req, res) => {
//   User.findById(req.params.authorId)
//     .then(user => {
//       Like.find()
//         .then(likes => {
//           likes.forEach(like => {
//             if (like.user === user.id) {
//               user.likedPosts.push(like.post)
//             }
//           })
//         })
//         user.save()
        
//         // user.save()
//         //   .then(data => res.json(user.likedPosts))
//         //   .catch(err => res.status(400).json("No posts found"))
//         // console.log(user.likedPosts)
//         return res.json(user.likedPosts)
//     })
//     .catch(err => res.status(400).json({ nouserfound: "No user found by that ID" }))
// })

module.exports = router;
