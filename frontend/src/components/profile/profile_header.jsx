import React from 'react';
import avatar from '../../images/avatar.jpg'


const ProfileHeader = props => {
  return (
    <div className='profile'>
      <div className='profile__image-wrapper'>
        <div className='profile__image' >
          <img className='profile__image__avatar' src={avatar} alt='Avatar' loading='eager' />
        </div>
      </div>
      <div className='profile__title-wrapper'>
        <h1 className='profile__title__username'>SusieQ</h1>
        <button className='profile__title__follow'>Follow</button>
        <p className='profile__title__body'>Growing up in a family of music lovers, I was accustomed from an early age to different genres ranging from progressive rock to jazz. It was classical music though that gave me the impetus to move on from being a passive listener to actually playing an instrument myself...</p>
      </div>
    </div>
  )
}

export default ProfileHeader;