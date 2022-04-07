const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Post = require('../../models/Post');
const User = require('../../models/User');
const Like = require('../../models/Like');
const validatePostInput = require('../../validation/posts');
const validateCommentInput = require('../../validation/comments');

router.get("/test", (req, res) => res.json({ msg: "this is the posts route yo" }))


// fetches ALL posts. (not sure if we will need this?)
router.get("/", (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json({ nopostsfound: "No posts found" }))
});


// fetches all posts a user has created
router.get("/author/:authorId", (req, res) => {
    Post.find({ author: req.params.authorId })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json({ nopostsfound: "No posts found by that author" }))
});

// fetches all posts a user has liked
router.get("/:authorId/likedPosts", (req, res) => {
    User.findById(req.params.authorId)
        .then(user => {
            Like.find()
                .then(likes => {
                    likes.forEach(like => {
                        if (like.user === user.id) {
                            user.likedPosts.push(like.post)
                        }
                    })
                })
            user.save()

            // user.save()
            //   .then(data => res.json(user.likedPosts))
            //   .catch(err => res.status(400).json("No posts found"))
            // console.log(user.likedPosts)
            return res.json(user.likedPosts)
        })
        .catch(err => res.status(400).json({ nouserfound: "No user found by that ID" }))
})

// fetches a single post by id
router.get("/:id", (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json({ nopostfound: "No post found with that ID" }))
});


// protected route to make a post
// router.post('/',
//     passport.authenticate("jwt", { session: false }),
//     (req, res) => {
//         const { errors, isValid } = validatePostInput(req.body);

//         if (!isValid) {
//             return res.status(400).json(errors)
//         }

//         const newPost = new Post({
//             title: req.body.title,
//             description: req.body.description,
//             author: req.body.author,
//             trackName: req.body.trackName,
//             trackId: req.body.trackId,
//             albumCoverURL: req.body.albumCoverURL,
//             likes: [],
//             comments: []   
//         })

//         newPost.save()
//             .then(post => res.json(post))
//             .catch(err => res.json(err))
//     })
    

// this works so far. pushes post to the user posts array right after creating it
router.post('/',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            trackName: req.body.trackName,
            trackId: req.body.trackId,
            albumCoverURL: req.body.albumCoverURL,
            likes: [],
            comments: []   
        })

        let user = newPost.author
        let userId = user._id.toString();

        User.findById(userId)
            .then(foundUser => {
                foundUser.posts.push(newPost)
                foundUser.save()
            })

        newPost.save()
            .then(post => res.json(post))
            .catch(err => res.json(err))
    })


// protected route to update a post
router.patch("/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(post => res.json(post))
            .catch(err => res.status(400).json({ nopostfound: "No post found by that ID" }))
    })


// protected route to delete a post
router.delete("/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Post.findByIdAndDelete(req.params.id)
            .then(post => res.json("Post deleted"))
            .catch(err => res.status(400).json({ nopostfound: "No post found by that ID" }))
    })





// ---------- Routes for Comments (embedded in posts) -----------


// fetches all comments by postId
router.get("/:postId/comments", (req, res) => {
    Post.findById(req.params.postId)
        .then(post => res.json(post.comments))
        .catch(err => res.status(400).json({ nocommentsfound: "No comments found" }))
})


// fetches a comment
router.get("/:postId/comments/:commentId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Post.findById(req.params.postId)
            .then(post => {
                let findComment = "";
                post.comments.forEach(comment => {
                    if (comment.id === req.params.commentId) {
                        findComment = comment
                    }
                });

                if (findComment === "") {
                    return res.status(400).json({ nocommentfound: "No comment found with that ID" })
                };

                return res.json(findComment)
            })
            .catch(err => res.status(400).json({ nopostfound: "No post found with that ID" }))
    })


// route for creating a comment
router.post("/:postId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Post.findById(req.params.postId)
            .then(post => {
                
                const { errors, isValid } = validateCommentInput(req.body);
        
                if (!isValid) {
                    return res.status(400).json(errors)
                }

                post.comments.push(req.body);
                post.save()
                    .then((data) => res.json(data.comments[data.comments.length - 1]))
                    .catch(err => res.status(400).json(err))
                
            })
        })


// route for updating a comment
router.patch("/:postId/comments/:commentId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Post.findByIdAndUpdate(req.params.postId, req.body, { new: true })
        .then(post => {
            let updateCommentIdx = "";
            post.comments.forEach( (comment, idx) => {
                if (comment.id === req.params.commentId) {
                    updateCommentIdx = idx
                }
            })

            if (updateCommentIdx === "") {
                return res.json({ nocommentfound: "No comment found with that ID" })
            }

            const { errors, isValid } = validateCommentInput(req.body);
            if (!isValid) {
                return res.status(400).json(errors)
            }

            post.comments[updateCommentIdx] = req.body
            // 

            post.save()
            
            return res.json(post.comments[updateCommentIdx])

        })
        .catch(err => res.status(400).json({ nopostfound: "No post found by that ID"}))
        
    })


// route for deleting a comment
router.delete("/:postId/comments/:commentId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Post.findByIdAndUpdate(req.params.postId, req.body)
            .then(post => {
                let deleteComment = "";

                post.comments.forEach(comment => {
                    if (comment.id === req.params.commentId) {
                        deleteComment = comment
                    }
                })

                if (deleteComment === "") {
                    return res.json({ nocommentfound: "No comment found with that ID" })
                }

                // const { errors, isValid } = validateCommentInput(req.body);
                // if (!isValid) {
                //     return res.status(400).json(errors)
                // }

                deleteComment.remove()
                post.save()
                    .then(post => res.json("Comment deleted"))
                    .catch(err => res.status(400).json({ nocommentfound: "No comment found with that ID" }))

            })
            .catch(err => res.status(400).json({ nopostfound: "No post found by that ID" }))

    })







module.exports = router;