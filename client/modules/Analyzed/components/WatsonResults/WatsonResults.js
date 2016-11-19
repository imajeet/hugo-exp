import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import WatsonEmotions from '../WatsonEmotions/WatsonEmotions';
import styles from './WatsonResults.css';
import WatsonResultsChip from './WatsonResultsChip';

const WatsonResults = (props) => {
  const isScorePositive = score => (score > 0 ? 'rgb(0%, 90.2%, 46.3%)' : 'rgb(83.5%, 0%, 0%)');
  const preparedEmotions = [];
  Object.keys(props.emotions).map((emotion) => {
    return preparedEmotions.push({
      emotion,
      score: Math.ceil(props.emotions[emotion] * 100),
    });
  });

  return (
    <div className={styles['watson-flex-container']}>
      <h1>{props.name}</h1>
      <div className={styles['sentiments-container']}>
        <WatsonResultsChip
          score={props.sentiments.score}
          bgColor={isScorePositive(props.sentiments.score)}
          avatarColor={isScorePositive(props.sentiments.score)}
          avatarContext={props.sentiments.score > 0 ? 'P' : 'N'}
        />
      </div>
      <div className={styles['emotions-container']}>
        <Paper zDepth={3}>
          <WatsonEmotions emotions={preparedEmotions} />
        </Paper>
      </div>
    </div>
  );
};

WatsonResults.propTypes = {
  sentiments: PropTypes.object.isRequired,
  emotions: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default WatsonResults;
