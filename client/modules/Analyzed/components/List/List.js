import React, { PropTypes } from 'react';
import { List as ListMUI } from 'material-ui/List';
import ListItem from './ListItem';


const List = (props) => {
  return (
    <ListMUI className="analyzed-list">
      {
        props.data ? props.data.tweets.map((tweet, i) => {
          return (
            <ListItem
              text={tweet}
              avatar={props.data.user.profile_image_url}
              key={i}
            />
          );
        }) : <h1>Loading</h1>
      }
    </ListMUI>
  );
};

List.propTypes = {
  data: PropTypes.object.isRequired,
};

export default List;
