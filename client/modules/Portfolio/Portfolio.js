import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PortfolioVideo from './PortfolioVideo/PortfolioVideo'

// Import Style
import styles from './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className={styles['portfolio-container']}>
        <PortfolioVideo />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

Portfolio.propTypes = {
};

export default connect(mapStateToProps)(Portfolio);
