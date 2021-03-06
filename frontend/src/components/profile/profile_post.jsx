import React from "react";
import { useEffect } from "react";
import { beautifyDate } from "../../util/date_util";
import { Link } from "react-router-dom";

const ProfilePost = props => {
  return (
    <Link to={`/posts/${props.id}`} className="profile-inner__post-wrapper">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <p>{props.text}</p>
    </Link>
  );
}

export default ProfilePost;



// const PostCard = props => {

//   return props.post ? (
//     <div className="post">
//       <div className="post__left">
//         <h1 className="post__left__track-name">{props.post.trackName}</h1>
//         <h2>{props.post.albumName}</h2>
//         <img src={props.post.albumCoverURL}/>
//         <div className="button-wrapper">
//           <button className="edit">Edit</button>
//           {/* <button onClick={() => props.updatePost()}>Edit</button> */}
//           <button className="remove">Remove</button>
//           {/* <button onClick={() => props.deletePost()}>Remove</button> */}
//         </div>
//       </div>
//       <div className="post__right">
//         <iframe src={`https://open.spotify.com/embed/track/${props.post.trackId}?utm_source=generator`} width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
//         <div className="post__right__small-wrapper">
//           <p className="post__right__time">{beautifyDate(props.post.createdAt)}</p>
//           <div className="likes-wrapper">
//             <button>
//               <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
//             </button>
//             <p className="post__right__likes">{props.post.likes.length}</p>
//           </div>
//         </div>
//         <p className="post__right__description">{props.post.description}</p>
//         <p className="post__right__comments">Comments{props.post.comments.length}</p>
//       </div>
//     </div>
//   ) : null;
// }

// export default PostCard;