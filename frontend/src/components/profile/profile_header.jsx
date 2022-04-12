import React from 'react';
import { useEffect, useState } from 'react';
import demoPic from '../../images/demo-profile.png';

const ProfileHeader = props => {
  let [bio, setBio] = useState('');

  const update = field => {
    return e => {
      if (field === 'bio') {
        setBio(e.target.value);
      }
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
            <button>Follow</button>
          </div>
          <div className='profile__details'>
              <h1 className='profile__username'>{props.user.username}</h1>
              <h2 className='details'>10 Followers</h2>
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
              <button className="profile__bottom__bio-button">Edit</button>
            </div>
          </form>
          ) : (
            <p className='profile__bottom__body'>Growing up in a family of music lovers, I was accustomed from an early age to different genres ranging from progressive rock to jazz. It was classical music though that gave me the impetus to move on from being a passive listener to actually playing an instrument myself...</p>
          )}
        </div>
      </div>
    ) : null

}

export default ProfileHeader;