import React from 'react';
import PostCard from './profile_post_card';

const PostIndex = (props) => {

  // console.log("Post Index: ", props)
  // console.log("Post Index: ", props.userPosts[0])

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