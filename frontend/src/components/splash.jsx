import React from 'react';
import boomBox from '../images/boom-box.png'
import rainbow from '../images/rainbow.png';
import MusicWave from './music_wave';

const Splash = props => {
  return (
    <div className='splash'>
      <div className='splash__inner'>
        <div className='splash__boom-wrapper'>
          <img className='splash__boom-wrapper__boom-box' src={boomBox}/>
        </div>
        <div className='splash__rainbow-wrapper'>
          <div className='splash__rainbow-wrapper__inner'>
          <h1>Share the music you love.</h1>
            <button className='btn draw-border'>Join now</button>
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

export default Splash;