import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const SearchBar = (props) => {
  return (
    <div>
      <TextField
        onKeyDown={props.handleSubmit}
        floatingLabelText="Enter Name"
        id={Math.floor(Math.random()).toString()}
      />
    </div>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
