import React from 'react';
import boomBox from '../../images/boom-box.png'
import rainbow from '../../images/rainbow.png';
import MusicWave from './music_wave';
import ReactRotatingText from "react-rotating-text";
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';


const Splash = ({ openModal }) => {
  const headerContent = ['Share the music you love.', 'Connect with other music lovers.', 'Expand your musical horizon.'];

  const handleOpenModal = e => {
    e.preventDefault();
    openModal('signup');
  }

  return (
    <div className='splash'>
      <div className='splash__inner'>
        <div className='splash__left'>
          <div className='splash__left__rainbow-wrapper'>
            <div className='splash__left__rainbow-wrapper__inner'>
              <ReactRotatingText
              className="moving-words"
              typingInterval={120}
              deletingInterval={100}
              items={headerContent} 
              />
              <div className='splash__button-wrapper'>
                <button onClick={handleOpenModal} className='btn draw-border'>Join now</button>
                <img className='splash__left__rainbow-img' src={rainbow}/>
              </div>
            </div>
          </div>
        </div>
        <div className='splash__right'>
          <div className='splash__right__boom-wrapper'>
            <img className='splash__right__boom-box' src={boomBox} />
          </div>
          <div className='splash__right__wave-wrapper'>
            <MusicWave/>
          </div>
          <div className='splash__right__words'>
            <div className='splash__right__words-wrapper'>
              <h1>Why Mango Music?</h1>
              <p>Join a collective community of devote music lovers with Mango Music. As a Mango user, you can share your favorite songs or artists with likeminded people in order to broaden your musical horizon and explore new musical tastes and sounds. Join now for free to explore all that Mango Music has to offer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mapDispatchToProps)(Splash);