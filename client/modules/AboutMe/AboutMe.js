import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
// import styles from './AboutMe.css';


class AboutMe extends Component {

  componentDidMount() {
    console.log('Hello from AboutMe');
  }

  render() {
    return (
      <div>
        Hello, World
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

AboutMe.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMe);