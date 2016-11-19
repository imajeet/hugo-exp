import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './Home.css';
import an from '../../assets/animate.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    console.log('WillUnmount');
  }

  render() {
    const itemDetails = {
      Technical: 'A natural tendency to consider the mechanics of things.',
      Visionary: 'I seek to capture the vision required to complete tasks.',
      Passionate: 'To continue learning is to keep the mind young; I advocate towards continous growth.',
    };
    return (
      <div
        className={`
          ${styles['home-container']}
        `}
      >
        <div className={`${styles['home-header']}`}>
          <h1>HugoExp</h1>
        </div>
        <div className={`${styles['welcome-copy']}`}>
          <div className={`${styles['self-copy']}`}>
            {
              Object.keys(itemDetails).map((detail, i) => (
                <div
                  className={`${styles.item} ${an.animated} ${an.fadeInLeft}`}
                  style={{
                    WebkitAnimationDelay: `${i + 1}s`,
                    WebkitAnimationDuration: '1s',
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
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

Home.propTypes = {
};

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Home);
