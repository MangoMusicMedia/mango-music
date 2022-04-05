const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
    likes: {
        type: Number
    },
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
    track: {
        type: String
    },
    album: {
        type: String
    }
}, {
    timestamps: true
});


const Post = mongoose.model('Post', PostSchema);
module.exports = Post;