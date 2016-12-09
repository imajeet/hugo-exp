import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getLeaveAnimation } from './AboutMeReducer';

import an from '../../assets/animate.css';

import style from './AboutMe.css';

const AboutMe = ({ leaveAnimation }) => {
  return (
    <div className={`${style['about-me-container']} ${an.animated} ${an.slideInLeft} ${leaveAnimation}`}>
      <div className={style.text}>
        <h2>About Me</h2>
        <p>
          <span>I</span> am currently a contracted Software Engineer at a telecommunication startup, CallPal, where we’ve created an Application that allows users to call any where for free, mobile-to-mobile, or mobile-to-landline.
          </p>

        <p>
          Since College, I’ve taken upon myself to become Fullstack JavaScript Developer where I work primarily with NodeJS which is a C++ Program that essentially let’s you write JavaScript to create many applications. I’ve used NodeJS to create CRON Jobs, run data migration tasks in parallel, author RESTful APIs using ExpressJS to be consumed by web & mobile clients, built front-end projects with Gulp or Webpack, etc. There are many problems that can be solved with NodeJS; from simple to complex.
          </p>
        <p>
          The best part about making a living off coding is delivering a product while meeting client satisfaction and deadlines!
          </p>
        <p>
          I’ve also done freelance for locals and am always seeking to stay up to date with modern technologies.
          </p>
      </div>
    </div>
  );
};


AboutMe.propTypes = {
  leaveAnimation: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    leaveAnimation: getLeaveAnimation(state),
  };
};

export default connect(mapStateToProps)(AboutMe);
