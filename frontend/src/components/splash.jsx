import React from 'react';
import BoomBox from '../images/boom-box.png'

const Splash = props => {
  return (
    <div className='splash'>
      <div className='splash__inner'>
        <img src={BoomBox}/>
      </div>
    </div>
  );
}

export default Splash;