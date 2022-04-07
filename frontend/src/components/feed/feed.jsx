import React from 'react';
import FeedPost from './feed_post';
import { useEffect } from 'react';

const Feed = props => {

  useEffect(() => {
    props.fetchPosts();
    window.scrollTo(0, 0);
  }, []);

  return props.posts ? (
    <div className='feed'>
      <h1>Explore recently shared</h1>
      <ul className='feed__container'>
        {props.posts.map((post, idx) => (
          <FeedPost id={post._id} key={idx} img={post.albumCoverURL} name={post.trackName} text={post.description}/>
        ))}
      </ul>
    </div>
  ) : null;
}

export default Feed;