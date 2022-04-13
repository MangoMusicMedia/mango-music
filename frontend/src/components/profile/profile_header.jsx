import React from 'react';
import { useEffect, useState } from 'react';
import demoPic from '../../images/demo-profile.png';
import { connect } from 'react-redux';
import { createFollower, deleteFollower } from '../../actions/follower_actions';

const ProfileHeader = props => {
  let [bio, setBio] = useState('');

  const update = field => {
    return e => {
      if (field === 'bio') {
        setBio(e.target.value);
      }
    }
  }

  useEffect(() => {
    if (props.currentUser) {
      setBio(props.user.profileBio);
    }
  }, [props.user]);

  const handleEdit = e => {
    e.preventDefault();
    const userBio = {
      id: props.user._id,
      profileBio: bio
    }
    props.updateUserProfile(userBio);
  }
  
  const handleFollow = e => {
    if (props.user.followers.includes(props.currentUser.id)) {
      console.log("unfollow")
      props.deleteFollower(props.user._id, props.currentUser.id)
    } else {
      console.log("follow")
      props.createFollower(props.user._id, props.currentUser.id)
    }
  }

  return props.user ? (
    <div className='profile'>
      <div className="profile__top">
        <div className="profile__image-wrapper">
          {props.user.profilePhoto ? (
            <img className='profile__image' src={props.user.profilePhoto} alt='Avatar' loading='eager' />
            ) : (
            <img className='profile__image' src={demoPic} alt='Avatar' loading='eager' />
          )}
          <button onClick={handleFollow}>{props.user.followers.includes(props.currentUser.id) ? "Unfollow" : "Follow"}</button>
        </div>
        <div className='profile__details'>
            <h1 className='profile__username'>{props.user.username}</h1>
            <h2 className='details'>{props.user.followers.length} {props.user.followers.length === 1 ? "follower" : "followers"}</h2>
            <h3 className='details'>{props.posts.length} Posts</h3>
        </div>
      </div>
      <div className='profile__bottom'>
        {props.currentUser.id === props.user._id ? (
        <form className="profile__bottom__bio-wrapper">
          <div className="profile__bottom__text-wrapper">
            <textarea onChange={update('bio')} value={bio} placeholder='Add a bio . . .' />
          </div>
          <div className="profile__bottom__bio-button-wrapper">
            <button onClick={handleEdit} className="profile__bottom__bio-button">Edit</button>
          </div>
        </form>
        ) : (
          <p className='profile__bottom__body'>{bio}</p>
        )}
      </div>
    </div>
  ) : null

}

const mapDispatchToProps = dispatch => {
  return {
    createFollower: (userId, followerId) => dispatch(createFollower(userId, followerId)), 
    deleteFollower: (userId, followerId) => dispatch(deleteFollower(userId, followerId)),
  }
}

export default connect(null, mapDispatchToProps)(ProfileHeader);
// export default ProfileHeader;