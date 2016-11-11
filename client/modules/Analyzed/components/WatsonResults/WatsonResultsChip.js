import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const WatsonResultsChip = (props) => {
  return (
    <Chip
      style={{ width: 100, margin: 10, textAlign: 'center' }}
      backgroundColor={props.bgColor}
    >
      <Avatar
        size={36}
        color={props.avatarColor}
        backgroundColor={'#fff'}
      >
        {props.avatarContext}
      </Avatar>
      {`${Math.ceil(props.score * 100)}%`}
    </Chip>
  );
};

WatsonResultsChip.propTypes = {
  score: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  avatarColor: PropTypes.string.isRequired,
  avatarContext: PropTypes.string.isRequired,
};

export default WatsonResultsChip;
