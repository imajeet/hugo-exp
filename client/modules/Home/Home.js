import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './Home.css';
import an from '../../assets/animate.css';

import { getLeaveAnimation } from './HomeReducer';
const Home = ({ leaveAnimation }) => {
  const itemDetails = {
    Technical: 'A natural tendency to consider the mechanics of things.',
    Visionary: 'I seek to capture the vision required to complete tasks.',
    Passionate: 'To continue learning is to keep the mind young; I advocate towards continuous growth.',
  };

  return (
    <div className={`${styles['home-container']} ${an.animated} ${leaveAnimation} ${styles['font-decor']}`}>
      <div
        className={`${styles['home-header']} ${an.animated} ${leaveAnimation} ${an.fadeInDown}`}
        style={{
          AnimationDelay: '4s',
          AnimationDuration: '1s',
          WebkitAnimationDelay: '4s',
          WebkitAnimationDuration: '1s',
        }}
      >
        <h1>Bienvenido</h1>
      </div>
      <div className={`${styles['welcome-copy']}`}>
        <div className={`${styles['self-copy']}`}>
          {
            Object.keys(itemDetails).map((detail, i) => (
              <div
                className={`${styles.item} ${an.animated} ${leaveAnimation} ${an.fadeInLeft}`}
                style={{
                  WebkitAnimationDelay: `${i + 1}s`,
                  WebkitAnimationDuration: '1s',
                  AnimationDelay: `${i + 1}s`,
                  AnimationDuration: '1s',
                }}
                key={detail}
              >
                <h3>{detail}</h3>
                <p>{itemDetails[detail]}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    leaveAnimation: getLeaveAnimation(state),
  };
};

Home.propTypes = {
  leaveAnimation: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Home);
