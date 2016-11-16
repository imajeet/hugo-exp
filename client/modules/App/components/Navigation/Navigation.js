import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';

const styles = {
  appBar: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  iconLeft: {
    color: '#fff',
  },
  drawer: {
    padding: '60px 0',
    backgroundColor: 'transparent',
    border: 'solid 2px #fff',
  },
};

const Navigation = (props) => {
  return (
    <div>
      <AppBar
        className="appbar-container"
        style={styles.appBar}
        title={props.title}
        titleStyle={styles.title}
        iconStyleLeft={styles.iconLeft}
        iconElementLeft={
          <IconMenu
            targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            iconButtonElement={
              <IconButton><MoreVertIcon color={'#fff'} /></IconButton>
            }
            >
            <MenuItem primaryText="Home" />

            <MenuItem primaryText="Portfolio" containerElement={<Link to="/" />} />


            <MenuItem primaryText="Me" containerElement={<Link to="/me" />} />


            <Divider />
            <MenuItem primaryText="Contact" />
          </IconMenu>}
        zDepth={5}
        />
    </div>
  );
};

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navigation;
