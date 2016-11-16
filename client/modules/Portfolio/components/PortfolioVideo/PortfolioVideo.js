import React, { PropTypes } from 'react';

import styles from './PortfolioVideo.css';

const PortfolioVideo = (props) => {
  return (
    <video className={styles['video-container']} playsInline autoPlay muted loop>
      <source src={props.srcPath} type="video/mp4" />
    </video>
  );
};

PortfolioVideo.propTypes = {
  srcPath: PropTypes.string.isRequired,
};

export default PortfolioVideo;
