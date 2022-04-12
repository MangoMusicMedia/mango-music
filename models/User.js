const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {PostSchema} = require('./Post');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  followers: [
    {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
  ],
  posts: [
    {
      type: PostSchema
    }
  ],
  likedPosts: [
    {
      type: PostSchema
    }
  ],
  profilePhoto: {
    type: String
  },
  profileBio: {
    type: String
  }
}, {
  timestamps: true
})

const User = mongoose.model('User', UserSchema);
module.exports = {User, UserSchema};