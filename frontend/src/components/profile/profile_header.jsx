import React from 'react';
import avatar from '../../images/avatar.jpg';

const ProfileHeader = props => {

  console.log("Profile Header: ", props)

    return props.props.user ? (
      <div className='profile'>
        <div className="profile__top">
          <div className="profile_top___image-wrapper">
            <img className='profile__image__avatar' src={avatar} alt='Avatar' loading='eager' />
            <button className='profile__title__follows'>Follow</button>
          </div>
          <div className='profile__title-wrapper'>
            <div className="profile__title-wrapper__info">
              <h1 className='profile__title-wrapper__username'>{props.props.user.username}</h1>
              {/* <button className='profile__title-wrapper__follow'>Edit profile</button> */}
            </div>
            <div className="profile__title">
              <div className='profile__title__body details'>7 Likes</div>
              <div className='profile__title__body details'>10 Followers</div>
              <div className='profile__title__body details'>{props.userPosts.length} Posts</div>
            </div>
          </div>
        </div>
        <div className='profile__bottom'>
          <p className='profile__title__body'>Growing up in a family of music lovers, I was accustomed from an early age to different genres ranging from progressive rock to jazz. It was classical music though that gave me the impetus to move on from being a passive listener to actually playing an instrument myself...</p>
        </div>
      </div>
    ) : null

}

export default ProfileHeader;