import { connect } from "react-redux";
import Post from "./post";
import { fetchPost, updatePost, deletePost } from "../../actions/post_actions";
import { createComment, editComment, removeComment, fetchComments } from "../../actions/comment_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  post: state.entities.posts[ownProps.match.params.postId],
  comments: Object.values(state.entities.comments),
});

export default connect(mapStateToProps, {fetchPost, 
  updatePost, 
  deletePost, 
  createComment, 
  editComment, 
  removeComment, 
  openModal,
  fetchComments})(Post);