const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// restricting searching tracks for now

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "likes"
        }
    ],
    comments: [
        {
            message: {
                type: String,
                required: true
            },
            author: {
                type: Schema.Types.ObjectId,
                ref: "users"
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    trackName: {
        type: String
    },
    trackId: {
        type: String
    },
    albumId: {
        type: String
    },
    albumName: {
        type: String
    },
    albumCoverURL: {
        type: String
    },
    albumName: {
        type: String
    },
    releaseDate: {
        type: String
    },
}, {
    timestamps: true
});


const Post = mongoose.model('Post', PostSchema);
module.exports = Post;