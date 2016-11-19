import React, { Component } from 'react';

import fbGrid from 'assets/flexboxgrid.css';

import style from './AboutMe.css';

class AboutMe extends Component {

  componentDidMount() {
    console.log('Hello from AboutMe');
  }

  render() {
    return (
      <div className={`${style['about-me-container']} ${fbGrid['container-fluid']}`}>
        <div
          className={`
            ${style['about-me-copy']}
            ${fbGrid['col-sm-4']} 
            ${fbGrid['col-sm-offset-3']} 
            ${fbGrid['col-xs-10']}  
            ${fbGrid['col-xs-offset-2']}  
          `}
        >
          <p>
            I am currently Software Engineer at a telecommunication startup, CallPal, where we’ve created an Application that allows users to call any where for free, mobile-to-mobile, or mobile-to-landline.
          </p>
          <p>
            My journey as a Coder began a few years ago and it was during my freshman year of college where I took my first programming course in C++ and learned the basics of programming. During my curriculum, I learned Java, various data structures and the algorithms to go with them. I became subtly obsessed with how code looks and have since strived to write human readable code.
          </p>
          <p>
            Since College, I’ve taken upon myself to become Fullstack JavaScript Developer where I work primarily with NodeJS which is a C++ Program that essentially let’s you write JavaScript to create many applications. I’ve used NodeJS to create CRON Jobs, run data migration tasks in parallel, author RESTful APIs using ExpressJS to be consumed by web & mobile clients, built front-end projects with Gulp or Webpack, etc. There are many problems that can be solved with NodeJS; from simple to complex.
          </p>
          <p>
            My first professional career began 3 years ago when I became a Front-end Developer for SapientNitro; a marketing agency and I was in a team dedicated to handling Fiat Chrysler’s digital footprint. My main role was cemented around Fiat Chrysler’s Dodge brand and as such I created a few modules for their websites and put together over 6 pages using the Interwoven CMS. My stay there was both inspiring and challenging and it gave me a taste of real world coding experience.
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
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

AboutMe.propTypes = {
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AboutMe);

export default AboutMe;
