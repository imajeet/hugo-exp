import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div
        className={`
          ${styles['home-container']}
        `}
      >
        <div
          className={`
              ${styles['welcome-copy']}
              
            `}
        >
          <div className={`${styles['self-copy']}`}>
            <div className={`${styles.item}`}>
              <h3>
                Technical
                </h3>
              <p>
                A natural tendency to consider the mechanics of things.
                </p>
            </div>
            <div className={`${styles.item}`}>
              <h3>
                Visionary
              </h3>
              <p>
                I seek to capture the vision required to complete tasks.
              </p>
            </div>
            <div className={`${styles.item}`}>
              <h3>
                Passionate
              </h3>
              <p>
                To continue learning is keeping the mind young; I advocate towards continous growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
