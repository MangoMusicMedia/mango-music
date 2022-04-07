import React from "react";
import { connect } from "react-redux";
import { updatePost, fetchPost } from "../../actions/post_actions";
import { useEffect } from "react";

const EditModal = props => {

  // useEffect(() => {
  //   props.fetchPost(props.match.params.postId)
  // }, []);

  return (
    <div>
      <h1>Edit Post</h1>
      <div className="text-wrapper">
        <textarea placeholder='Add a comment . . .' />
      </div>
      <button onClick={() => props.updatePost()} className="edit">Edit</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId]
});

export default connect(null, { updatePost, fetchPost })(EditModal);