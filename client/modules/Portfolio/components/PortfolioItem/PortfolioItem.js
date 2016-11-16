import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import styles from './PortfolioItem.css';

const PortfolioItem = (props) => {
  return (
    <div className={`${styles['portfolio-item']}`}>
      <Card style={{ background: 'transparent' }} zDepth={5}>
        <CardHeader
          title={props.title}
          titleStyle={{ color: '#fff', textShadow: '1px 1px 1px #000', fontSize: '16px' }}
        />
        <CardMedia>
          <img src={props.cardImagePath} alt="" />
        </CardMedia>
        <CardActions>
          <a href={props.link} rel="noopener noreferrer" target="_blank">
            <FlatButton
              style={{ color: '#fff', textShadow: '1px 1px 1px #000' }}
              label="Visit"
            />
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

PortfolioItem.propTypes = {
  cardImagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PortfolioItem;
