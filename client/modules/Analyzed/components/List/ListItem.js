import React, { PropTypes } from 'react';
import { ListItem as ListItemMUI } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

import styles from './List.css';

function ListItem(props) {
  return (
    <div className={styles['analyzed-list-item']}>
      <Paper zDepth={props.zDepth || 2}>
        <ListItemMUI
          primaryText={props.text}
          leftAvatar={<Avatar src={props.avatar} />}
        />
      </Paper>
    </div>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  zDepth: PropTypes.number,
};

export default ListItem;
