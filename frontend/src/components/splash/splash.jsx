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
        <div className='splash__boom-wrapper'>
          <img className='splash__boom-wrapper__boom-box' src={boomBox}/>
        </div>
        <div className='splash__rainbow-wrapper'>
          <div className='splash__rainbow-wrapper__inner'>
            <ReactRotatingText className="moving-words" items={headerContent} />
            <button onClick={handleOpenModal} className='btn draw-border'>Join now</button>
            {/* <button onClick={() => openModal('signup')} className='btn draw-border'>Join now</button> */}
            <img className='splash__rainbow-wrapper__rainbow' src={rainbow}/>
          </div>
        </div>
      </div>

      <div className='splash__wave-wrapper'>
        <MusicWave/>
      </div>

      <div className='splash__words'>
        <div className='words-wrapper'>
          <h1>Why Mango Music?</h1>
          <p>Join a collective community of devote music lovers with Mango Music. As a Mango user, you can share your favorite songs or artists with other likeminded people in order to broaded your musical horizon and explore new musical tastes and sounds. Join now for free to explore all that Mango Music has to offer.</p>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mapDispatchToProps)(Splash);