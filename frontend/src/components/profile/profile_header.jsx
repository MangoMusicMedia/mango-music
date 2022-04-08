import React from 'react';
import { useEffect } from 'react';
import profPic from '../../images/demo-profile.png';

const ProfileHeader = props => {

    return props.user ? (
      <div className='profile'>
        <div className="profile__top">
          <div className="profile__image-wrapper">
            <img className='profile__image' src={props.user.profilePhoto} alt='Avatar' loading='eager' />
            <button>Follow</button>
          </div>
          <div className='profile__details'>
              <h1 className='profile__username'>{props.user.username}</h1>
              <h2 className='details'>10 Followers</h2>
              <h3 className='details'>{props.posts.length} Posts</h3>
          </div>
        </div>
        <div className='profile__bottom'>
          <p className='profile__bottom__body'>Growing up in a family of music lovers, I was accustomed from an early age to different genres ranging from progressive rock to jazz. It was classical music though that gave me the impetus to move on from being a passive listener to actually playing an instrument myself...</p>
        </div>
      </div>
    ) : null

}

export default ProfileHeader;