import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";
import { useEffect } from "react";
import WaterButton from "../buttons/water_button"

const AddPostModal = props => {

  // const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting yoooo")

    if (description === "") {
      setDescriptionError(true)
      return;
    } 
    // if (title === "") {
    //   setTitleError(true)
    // }

    const newPost = {
      title: "default",
      description: description,
      author: props.currentUserId,
      ...props.payload
    }
    console.log(newPost)
    props.createPost(newPost).then( () => props.closeModal() )
  }

  return (
    <div className="addPostModal" >
      <form onSubmit={ handleSubmit } className="addPostModal__form" >
        <h1>Add a new post</h1>
        <div>
          {/* <iframe src={`https://open.spotify.com/embed/track/${props.payload.trackId}?utm_source=generator`} width="100%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
          <iframe src={`https://open.spotify.com/embed/track/${props.payload.trackId}?utm_source=generator`} width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div className="text-wrapper">
          <textarea 
            placeholder='Add a description . . .' 
            value={description} 
            onChange={ (e) => setDescription(e.target.value)}
            />
          {(descriptionError && description === "")&& <p>Description cannot be blank</p>}
        </div>
        {/* <button className="c-button c-button--gooey">ADD POST</button> */}
        < WaterButton handleSubmit={handleSubmit} title={"ADD POST"} />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUserId: state.session.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (postData) => dispatch(createPost(postData)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostModal);