const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const Post = require('../../models/Post');
const Like = require('../../models/Like');
const validateLikeInput = require('../../validation/likes');


// router.get("/test", (req, res) => res.json({ msg: "this is the likes route yo" }))


// fetching all likes for a post
router.get("/posts/:postId", (req, res) => {
    Post.findById(req.params.postId)
        .then(post => res.json(post.likes))
        .catch(err => res.status(400).json({ nolikesfound: "No likes found" }))
});

// fetching all likes for a user. Not set up yet in User model....*********
// router.get("/users/:userId", (req, res) => {
//     User.findById(req.params.userId)
//         .then(user => res.json(user.likes))
//         .catch(err => res.status(400).json({ nolikesfound: "No likes found" }))
// });


// creating a like for a post
router.post("/posts/:postId",
    passport.authenticate("jwt", { session: false}),
    (req, res) => {
        Post.findById(req.params.postId)
            .then(foundPost => {
                const newLike = new Like({
                    post: foundPost.id,
                    user: req.body.author
                })

                // working, but need to refactor?
                newLike.save()
                foundPost.likes.push(newLike)
                foundPost.save()
                res.json(newLike)
            })
            .catch(err => res.status(400).json("Could not save like"))
    })



//deleting a like and removing it from the array of the post
router.delete("/posts/:postId/:likeId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Post.findById(req.params.postId)
            .then(post => {

                let deleteLikeIndex = "";

                post.likes.forEach( (like, idx) => {
                    if (like.toString() === req.params.likeId) {
                        deleteLikeIndex = idx
                        // like.remove()
                    }
                })


                if (deleteLikeIndex === "") {
                    return res.json({ nolikefound: "No like found" })
                } 

                post.likes.splice(deleteLikeIndex, 1);
                
                post.save()
                    .then(() => res.json("Like removed"))
                    .catch(err => res.status(400).json({ nolikefound: "No like found with that ID" }))

            })
            .catch(err => res.status(400).json({ nolikefound: "No like found by that ID" }))
    })


module.exports = router;