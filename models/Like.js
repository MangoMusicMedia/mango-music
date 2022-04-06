const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LikeSchema = new Schema({
    post: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Like = mongoose.model('Like', LikeSchema);
module.exports = Like;