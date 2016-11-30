import React, { PropTypes } from 'react';

import styles from './PortfolioVideo.css';

const PortfolioVideo = (props) => {
  return (
    <video
      preload playsInline autoPlay muted loop
      className={`${styles['video-container']}`}
      style={{
        marginLeft: `${props.marginLeft}`,
        WebkitTransition: 'margin-left 1s',
        WebkitAnimationDuration: '2s',
      }}
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
