import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";
import { useEffect } from "react";
import WaterButton from "../buttons/water_button"

const AddPostModal = props => {

  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description === "") {
      setDescriptionError(true)
      return;
    } 

    const newPost = {
      title: "default",
      description: description,
      author: props.currentUserId,
      ...props.payload
    }
    console.log(props.payload)
    props.createPost(newPost).then( () => props.closeModal() )
  }

  return (
    <div className="addPostModal" >
      <form onSubmit={ handleSubmit } className="addPostModal__form" >
        <h1>Create a Post</h1>
        <div>
          {/* <iframe src={`https://open.spotify.com/embed/track/${props.payload.trackId}?utm_source=generator`} width="100%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
          <iframe className="imbedded-track" src={`https://open.spotify.com/embed/track/${props.payload.trackId}?utm_source=generator`} width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div>

          <div className="text-wrapper">
            <textarea 
              placeholder={`What would you like to share about ${props.payload.trackName}?`} 
              value={description} 
              onChange={ (e) => setDescription(e.target.value)}
              />
          </div>
          {(descriptionError && description === "")&& <p className="addPostModal__error">Description cannot be blank</p>}
        </div>

        <div className="btn-container">
          < WaterButton handleSubmit={handleSubmit} title={"ADD POST"} />
        </div>
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