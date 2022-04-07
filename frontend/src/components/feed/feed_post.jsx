import React from "react";
import { Link } from "react-router-dom";

const FeedPost = props => {
  return (
    <Link to={`/posts/${props.id}`} className="feed__post-wrapper">
      <img src={props.img}/>
      <h3>{props.name}</h3>
      <p>{props.text}</p>
    </Link>
  );
}

export default FeedPost;