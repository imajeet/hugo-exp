import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ferryVideo from './ferry-ride.mp4'

import styles from './PortfolioVideo.css';

class PortfolioVideo extends Component {
  render() {
    return (
      <video className={styles['video-container']} playsInline autoPlay muted loop>
        <source src={ferryVideo} type="video/mp4" />
      </video>
    );
  }
}

PortfolioVideo.propTypes = {
};

export default PortfolioVideo;
