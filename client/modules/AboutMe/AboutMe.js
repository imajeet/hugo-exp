import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getLeaveAnimation } from './AboutMeReducer';

import an from '../../assets/animate.css';

import style from './AboutMe.css';

const AboutMe = ({ leaveAnimation }) => {
  return (
    <div className={`${style['about-me-container']} ${an.animated} ${an.slideInLeft} ${leaveAnimation}`}>
      <div className={`${style.text} ${an.animated} ${an.slideInLeft} ${leaveAnimation}`}>
        <h1>About Me</h1>
        <p>
          <span>D&rsquo;</span>uring my Junior year of college, I decided I was going to become a Web Application Developer
        and soon after college, I began searching for career opportunities that would let me acquire skills that could one
        day summate to that of a Full Stack JavaScript Developer. I worked at a digital agency, SapientNitro, where I was
        responsible for creating modular - reusable web components using just HTML5, CSS3, & JavaScript. We were only allowed
        to use jQuery & GreenSock’s TweenMax animation library, as the client whom project team I was on wanted very little
        third-party libraries. I really learned a lot about working in a fast pace environment and how to organize my time
        to finish my contributions to meet deadlines as well as the strengths JavaScript provided within a browser environment.
      </p>
        <p>
          Before being granted the opportunity to be a Front End developer at SapientNitro, I had completed a freelance project for a client
        I met at Starbucks. The project was a landing page built with HTML5, CSS3, JavaScript, jQuery, & Bootstrap and it had to also allow for clients to connect with the owner of the company through email; so I built a web server with NodeJS to handle sending emails directly from the landing page. I then became more interested in Back End development with NodeJS and thus became the prologue towards becoming more Full Stack Savvy.
      </p>
        <p>
          Recently, I was given the opportunity to work at my first start up, Callpal App, LLC where they had developed an app Callpal
        App; purposed to allow users to make calls, app-to-app, or app-to-landline, for free. During my role there as a Software-Engineer,
        I was tasked with various back-end systems that needed to: migrate data from MySQL to Couchbase stores, restructure
        data for in house analytics and for B2B teams. The RESTful APIs were built on top of NodeJS and there I learned to
        work in an Agile environment where I had to explain my progress in detail to my executives and team members every
        step of the way during and after the completion of tasks posted and managed by JIRA.
      </p>
        <p>
          As you can see, aside from a few personal projects and collegiate level programming workload, I have obtained professional
        experience in both front-end and back-end development. Everyday, I aim to become a better software developer and
        am always looking for excuses to learn new philosophies in software development & design. Most recently, I have become
        especially interested in distributive systems, artificial intelligence (machine learning), and how to leverage technology
        to add value to current markets.
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
