import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

const Navigation = (props) => {
  return (
    <div>
      <AppBar
        style={{backgroundColor: 'transparent'}}
        title={props.title}
        titleStyle={{color: '#000'}}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconStyleLeft={{color: '#000'}}
        onLeftIconButtonTouchTap={props.onTapTouch}
      >
        <div>
          <Drawer
            docked={false}
            width={200}
            open={props.open}
            onRequestChange={props.onTapTouch}
          />
        </div>
      </AppBar>
    </div>
  );
};

Navigation.propTypes = {
  onTapTouch: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navigation;
