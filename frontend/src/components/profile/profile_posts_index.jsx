import React from 'react';
import PostCard from './profile_post_card';

const PostIndex = props => {

  console.log("Profile Header: ", props)

  return (props.userPosts) ? (
    <div>
      {props.userPosts.map( post => (
        <PostCard post={post} key={post._id}/>
      ))}
    </div>
  ) : (
    <div>Share your favorite tracks.</div>
  )

}

export default PostIndex;