import React from 'react';
import testPic from '../../images/test.jpg'
import FeedPost from './feed_post';
import { useEffect } from 'react';

const Feed = props => {
  // const tester = {img: testPic, description: 'This is a tester description for the most awesome song that I have ever heard! I love this band!!'}
  // const posts = [];
  // while (posts.length < 50){
  //   posts.push(tester);
  // }

  useEffect(() => {
    props.fetchPosts();
  }, []);

  console.log(props.posts)

  return props.posts ? (
    <div className='feed'>
      <ul className='feed__container'>
        {props.posts.map((post, idx) => (
          <FeedPost key={idx} img={post.albumCoverURL} name={post.trackName} text={post.description}/>
        ))}
      </ul>
    </div>
  ) : null;
}

export default Feed;