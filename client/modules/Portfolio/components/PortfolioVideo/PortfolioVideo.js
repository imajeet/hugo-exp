import React, { PropTypes, Component } from 'react';

import styles from './PortfolioVideo.css';

class PortfolioVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vidStyle: {},
    };
  }

  componentDidMount() {
    if (window.innerWidth > 600) {
      this.setState({ // eslint-disable-line
        vidStyle: {
          marginLeft: `${this.props.marginLeft}`,
          WebkitTransition: 'margin-left 1s',
          WebKitAnimationDelay: '5s',
          WebkitAnimationDuration: '5s',
        },
      });
    } else {
      this.setState({ // eslint-disable-line
        vidStyle: { marginLeft: '0' },
      });
    }
  }

  render() {
    return (
      <video
        preload playsInline autoPlay muted loop
        className={`${styles['video-container']}`}
        style={this.state.vidStyle}
      >
        <source src={this.props.srcPath} type="video/mp4" />
      </video>
    );
  }
}

PortfolioVideo.propTypes = {
  srcPath: PropTypes.string.isRequired,
  marginLeft: PropTypes.string.isRequired,
};

export default PortfolioVideo;
