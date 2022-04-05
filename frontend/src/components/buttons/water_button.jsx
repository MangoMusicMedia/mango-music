import React from 'react';

const WaterButton = props => {
  return (
    <div>
      <div className="row middle-on-small center-on-small">
        <div className="column small-12 medium-6 large-4">
          <a href="#!" className="c-button c-button--gooey">
            {props.title}
            <div className="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
      </div>

      <svg id='svg' xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default WaterButton;