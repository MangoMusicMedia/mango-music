import React from 'react';
import boomBox from '../images/boom-box.png'
import rainbow from '../images/rainbow.png';

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
    </div>
  );
}

export default Splash;