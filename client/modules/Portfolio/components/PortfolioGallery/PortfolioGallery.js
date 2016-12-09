import React, { PropTypes } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import an from '../../../../assets/animate.css';
import fbGrid from '../../../../assets/flexboxgrid.css';

const PortfolioGallery = (props) => {
  return (
    <div className={`${fbGrid['container-fluid']}`} style={{ position: 'relative', top: '80px' }}>
      <div className={`${fbGrid.row} ${fbGrid.reverse}`}>
        {
          props.data.map((datum, i) => {
            return (
              <div
                key={i}
                className={` 
                  ${an.animated}
                  ${an.fadeInDown}
                  ${props.leaveAnimation}
                `}
                style={{
                  WebkitAnimationDuration: '1s',
                  WebkitAnimationDelay: `${i + 1}s`,
                }}
              >
                <PortfolioItem
                  link={datum.link}
                  cardImagePath={datum.cardImagePath}
                  title={datum.title}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

PortfolioGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    cardImagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  leaveAnimation: PropTypes.string.isRequired,
};

export default PortfolioGallery;

