import React from 'react';
import FeedPost from './feed_post';
import { useEffect } from 'react';
import Spinner from '../misc/spinner';

const Feed = props => {

  useEffect(() => {
    props.fetchPosts();
    window.scrollTo(0, 0);
  }, []);

  if (props.posts[props.posts.length - 1]){
    return (
      <div className='feed'>
        <h1>Explore recently shared</h1>
        <ul className='feed__container'>
          {props.posts.reverse().map((post, idx) => (
            <FeedPost id={post._id} key={idx} img={post.albumCoverURL} name={post.trackName} text={post.description}/>
          ))}
        </ul>
      </div>
    );
  } else if (props.posts.length > 0){
    return null;
  } else {
    return <Spinner/>
  }
}

export default Feed;