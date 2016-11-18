import React, { PropTypes } from 'react';

import styles from './PortfolioVideo.css';

import an from 'assets/animate.css';

const PortfolioVideo = (props) => {
  return (
    <video
      className={`${styles['video-container']} ${an.fadeIn}`}
      style={{
        marginLeft: `${props.marginLeft}`,
        WebkitTransition: 'margin-left 1s',
        WebkitAnimationDuration: '2s',
      }}
      preload playsInline autoPlay muted loop
    >
      <source src={props.srcPath} type="video/mp4" />
    </video>
  );
};

PortfolioVideo.propTypes = {
  srcPath: PropTypes.string.isRequired,
  marginLeft: PropTypes.string.isRequired,
};

export default PortfolioVideo;
