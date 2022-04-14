import React from "react";
import { useEffect, useState } from "react";
import { beautifyDate } from "../../util/date_util";
import { Link } from "react-router-dom";
import demoPic from '../../images/demo-profile.png';
import Description from "./song_description";
import Lyrics from "./song_lyrics";

const Post = props => {
  let [caption, setCaption] = useState('');
  let [initialCaption, setInitialCaption] = useState('');
  let [comment, setComment] = useState('');
  let [likedStatus, setLikedStatus] = useState(false);
  let [likedButton, setLikedButton] = useState('like');

  const update = field => {
    return e => {
      if (field === 'caption') {
        setCaption(e.target.value);
      }
      if (field === 'comment') {
        setComment(e.target.value);
      }
    }
  }

  const handleEdit = e => {
    e.preventDefault();
    const post = {
      id: props.post._id,
      description: caption
    }
    props.updatePost(post);
  }

  const handleComment = e => {
    e.preventDefault();
    const commentObj = {
      author: props.currentUser.id,
      message: comment
    }
    props.createComment(props.post._id, commentObj).then(() => setComment(''));
  }

  const handleLike = e => {
    e.preventDefault();
    if (likedStatus) return;
    
    if (!props.post.likes.includes(props.currentUser.id)) {
      setLikedStatus(true);
      setLikedButton('liked');
      props.createLike(props.currentUser.id, props.post._id);
    }
  }

  const getDate = date => {
    return date.slice(0,4);
  }

  useEffect(() => {
    props.fetchPost(props.match.params.postId);
    props.fetchComments(props.match.params.postId);
    props.fetchUsers();
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (props.post){
      setCaption(props.post.description);
      setInitialCaption(props.post.description);
    }
  }, [props.post]);
  
  if (props.post && props.comments && Object.values(props.users)) {
    return (
      <div className="post-outer">
      <div className="post">
      <div className="post__left">
        <h1 className="post__left__track-name">{props.post.trackName}</h1>
        <div className="post__left__album-info">
          <h2>{props.post.albumName}</h2>
          {props.post.releaseDate ? (
            <h3>{getDate(props.post.releaseDate)}</h3>
          ) : null }
        </div>
        <img src={props.post.albumCoverURL} alt="album or track art" />
        <Description name={props.post.trackName}/>
        <Lyrics id={props.post.trackId} artist={props.post.trackName} name={props.post.trackName}/>
        <div className="button-wrapper">
          {props.currentUser.id === props.post.author ? (
            <button onClick={() => props.deletePost(props.post._id)}>Delete Post</button>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className="post__right">
        <Link to={`/users/${props.post.author}`} className="post__right__author-wrapper">
          <h1>{props.users[props.post.author] && props.users[props.post.author].username}</h1>
          {props.users[props.post.author] && props.users[props.post.author].profilePhoto ? (
            <img alt='profile' src={props.users[props.post.author] && props.users[props.post.author].profilePhoto}/>
          ) : (
            <img alt="profile" src={demoPic} />
          )}
        </Link>
            <iframe title={props.post.trackName} alt={props.post.trackName} src={`https://open.spotify.com/embed/track/${props.post.trackId}?utm_source=generator`} width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>
        <div className="post__right__small-wrapper">
          <p className="post__right__time">{beautifyDate(props.post.createdAt)}</p>
          <div className="likes-wrapper">
          {props.post.likes.includes(props.currentUser.id) ? (
            <button onClick={handleLike} className='liked'>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
            </button>
          ) : (
            <button onClick={handleLike} className={likedButton}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
            </button>
          )}
            <p className="post__right__likes">{props.post.likes.length}</p>
          </div>
        </div>
        {props.currentUser.id === props.post.author ? (
          <form onSubmit={handleEdit} className="post__right__edit-wrapper">
            <div className="text-wrapper">
              <textarea value={caption} onChange={update('caption')} />
            </div>
            <div className="post__right__edit-wrapper__button-wrapper">
              {initialCaption === caption ? (
                null
              ) : (
                <button>Edit</button>
              )}
            </div>
          </form>
        ) : (
          <p className="post__right__description">{props.post.description}</p>
        )}
        <ul className="post__right__comments-wrapper">
          <h1>Comments</h1>
          {props.comments.map((comment, idx) => (
            <li key={idx}>
              <div className="inner-comment-wrapper">
                <Link to={`/users/${comment.author}`}>{props.users[comment.author] && props.users[comment.author].username}</Link>
                {props.currentUser.id === comment.author ? (
                <div className="btn-wrapper">
                  <button onClick={() => props.deleteComment(props.post._id, comment._id)}>Remove</button>
                </div>
                ) : (
                  <div></div>
                )}
              </div>
              <h1>{comment.message}</h1>
            </li>
            ))}
            <form onSubmit={handleComment} className="new-comment-wrapper">
            <div className="text-wrapper">
              <textarea onChange={update('comment')} value={comment} placeholder='Add a comment . . .' />
            </div>
              <div className="comment-button-wrapper">
                <button className="comment-button">Add comment</button>
            </div>
            </form>
        </ul>
      </div>
    </div>
      </div>
    );
  } else {
    return (
      <div className="removed">
        <h1>Post has been removed.</h1>
      </div>
    );
  }
}

export default Post;