const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {PostSchema} = require('./Post');
const {UserSchema} = require('./User');


const LikeSchema = new Schema({
    post: {
        type: PostSchema
    },
    user: {
        type: UserSchema
    }
}, {
    timestamps: true
});


const Like = mongoose.model('Like', LikeSchema);
module.exports = Like;