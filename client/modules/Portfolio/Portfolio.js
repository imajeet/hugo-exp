import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PortfolioGallery from './components/PortfolioGallery/PortfolioGallery';

import { getLeaveAnimation } from './PortfolioReducer';

import cyronPageImage from './assets/cyron.png';
import pbsPageImage from './assets/pbs.png';
import asuretyPageImage from './assets/asurety.png';

import an from '../../assets/animate.css';

const data = [{
  cardImagePath: cyronPageImage,
  title: 'Cyron I/O',
  link: 'http://cyron.co/',
}, {
  cardImagePath: pbsPageImage,
  title: 'Premier Boat Services',
  link: 'http://pbs-express.herokuapp.com/',
}, {
  cardImagePath: asuretyPageImage,
  title: 'Asurety',
  link: 'https://asurety.herokuapp.com/',
},
];

const Portfolio = ({ leaveAnimation }) => {
  return (
    <div className={`${an.animated} ${leaveAnimation}`}>
      <PortfolioGallery data={data} />
    </div>
  );
};

Portfolio.propTypes = {
  leaveAnimation: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    leaveAnimation: getLeaveAnimation(state),
  };
}

export default connect(mapStateToProps)(Portfolio);
