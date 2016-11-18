import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PortfolioGallery from './components/PortfolioGallery/PortfolioGallery';
import PortfolioVideo from './components/PortfolioVideo/PortfolioVideo';
import ferryVideo from './components/PortfolioVideo/ferry-ride.mp4';

// Import Style
// import styles from './Portfolio.css';

import cyronPageImage from './assets/cyron.png';
import pbsPageImage from './assets/pbs.png';
import asuretyPageImage from './assets/asurety.png';

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

const Portfolio = (props) => {
  return (
    <div>
      <div>
        <PortfolioGallery data={data} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

Portfolio.propTypes = {
};

export default connect(mapStateToProps)(Portfolio);
