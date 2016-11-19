import React from 'react';
import PortfolioGallery from './components/PortfolioGallery/PortfolioGallery';

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

const Portfolio = () => {
  return (
    <div>
      <PortfolioGallery data={data} />
    </div>
  );
};

Portfolio.propTypes = {
};

export default Portfolio;
