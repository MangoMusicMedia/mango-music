import React from 'react';
import testPic from '../../images/test.jpg'
import FeedPost from './feed_post';

const Feed = props => {
  const tester = {img: testPic, description: 'This is a tester description for the most awesome song that I have ever heard! I love this band!!'}
  const posts = [];
  while (posts.length < 50){
    posts.push(tester);
  }

  return (
    <div className='feed'>
      <ul className='feed__container'>
        {posts.map(post => (
          <FeedPost img={post.img} text={post.description}/>
        ))}
      </ul>
    </div>
  );
}

export default Feed;