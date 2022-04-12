import { connect } from "react-redux";
import Post from "./post";
import { fetchPost, updatePost, deletePost } from "../../actions/post_actions";
import { createComment, editComment, deleteComment, fetchComments } from "../../actions/comment_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchUsers } from "../../actions/user_actions";
import { createLike, deleteLike, fetchLikes } from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => {
  const currentPost = state.entities.posts[ownProps.match.params.postId]
  let postLikes = [];
  if (currentPost) {
    postLikes = currentPost.likes
  }
  
  return {
    currentUser: state.session.user,
    post: currentPost,
    postLikes: postLikes,
    comments: Object.values(state.entities.comments),
    users: state.entities.users,
    likes: Object.values(state.entities.likes)
  }
}

export default connect(mapStateToProps, {fetchPost, 
  updatePost, 
  deletePost, 
  createComment, 
  editComment, 
  deleteComment, 
  openModal,
  fetchComments,
  fetchUsers,
  createLike,
  deleteLike, 
  fetchLikes})(Post);