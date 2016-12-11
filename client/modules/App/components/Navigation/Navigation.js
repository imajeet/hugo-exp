import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuSVGIcon from 'material-ui/svg-icons/navigation/menu';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import an from '../../../../assets/animate.css';
import style from './Navigation.css';

import { setLeaveAnimation as setHomeLeaveAnimation } from '../../../Home/HomeActions';
import { setLeaveAnimation as setPortfolioLeaveAnimation } from '../../../Portfolio/PortfolioActions';
import { setLeaveAnimation as setAboutMeLeaveAnimation } from '../../../AboutMe/AboutMeActions';
import { setLeaveAnimation as setContactLeaveAnimation } from '../../../Contact/ContactActions';

const muiStyle = {
  drawerContainer: {
    WebkitTransition: 'width 1s',
    WebkitAnimationDuration: '1s',
    transition: 'width 1s',
    AnimationDuration: '1s',
    overflow: 'hidden',
  },
  hoverColor: 'rgb(100,133,135)',
  ripple: 'rgba(100%, 100%, 0%, 1.0)',
  fontDecor: { fontFamily: 'AvenirNext', fontSize: '14px', letterSpacing: '2px', textAlign: 'center' },
  appBar: {
    position: 'fixed',
    backgroundColor: '#fff',
    fontFamily: 'AvenirNext',
    WebkitAnimationDuration: '2s',
  },
  appBarTitle: { fontFamily: 'AvenirNext', color: '#000', textAlign: 'center' },
  icon: { border: 'solid 2px black' },
};

const Navigation = (props) => {
  const routeHandler = (route, setLeaveAnimationAction, animation) => {
    if (window.location.pathname !== route) {
      // fadeOut this route
      props.dispatch(setLeaveAnimationAction(animation));
      setTimeout(() => {
        // reset animations
        props.dispatch(setLeaveAnimationAction(''));
        props.router.push(route);
      }, 1000);
    }
  };

  const mapAnimationToRouteHandler = (route) => { // eslint-disable-line
    switch (route) {
      case '/':
        return routeHandler(route, setHomeLeaveAnimation, `${an.slideOutLeft}`);
      case '/me':
        return routeHandler(route, setAboutMeLeaveAnimation, `${an.slideOutLeft}`);
      case '/portfolio':
        return routeHandler(route, setPortfolioLeaveAnimation, `${an.slideOutLeft}`);
      case '/contact':
        return routeHandler(route, setContactLeaveAnimation, `${an.slideOutLeft}`);
      default:
        break;
    }
  };

  const mapLablesToHandlers = {
    Contact: { routeHandler: () => mapAnimationToRouteHandler('/contact') },
    Portfolio: { routeHandler: () => mapAnimationToRouteHandler('/portfolio') },
    Me: { routeHandler: () => mapAnimationToRouteHandler('/me') },
    Home: { routeHandler: () => mapAnimationToRouteHandler('/') },
  };

  const createDrawerMenu = () => Object.keys(mapLablesToHandlers).map((mappedLabel, i) =>
    <div
      key={mappedLabel}
      className={`${an.animated} ${an.fadeInRight}`}
      style={{
        WebkitAnimationDelay: `${i + 6.5}s`,
        WebkitAnimationDuration: '0.8s',
      }}
    >
      <FlatButton
        labelStyle={muiStyle.fontDecor}
        onTouchTap={mapLablesToHandlers[mappedLabel].routeHandler}
        label={mappedLabel}
        labelPosition="before"
        hoverColor={muiStyle.hoverColor}
        rippleColor={muiStyle.ripple}
      />
    </div>
  );
  const createAppBarMenu = () => Object.keys(mapLablesToHandlers).map((mappedLabel) =>
    <MenuItem
      style={muiStyle.fontDecor}
      onTouchTap={mapLablesToHandlers[mappedLabel].routeHandler}
      primaryText={mappedLabel}
      key={mappedLabel}
    />
  );

  return (
    <div>
      {
        props.open ?
          <Drawer
            containerStyle={muiStyle.drawerContainer}
            open={props.open}
            width={props.width}
          >
            <nav className={style.menu}>
              {
                createDrawerMenu()
              }
            </nav>
          </Drawer>
          :
          <AppBar
            className={` ${style.appbar} ${an.animated} ${an.fadeInDown}`}
            title="HugoExp"
            titleStyle={muiStyle.appBarTitle}
            iconElementLeft={
              <IconMenu
                menuStyle={{ height: '100%' }}
                iconButtonElement={<IconButton iconStyle={muiStyle.icon}> <MenuSVGIcon /> </IconButton>}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              >
                {
                  createAppBarMenu()
                }
              </IconMenu>
            }
            style={muiStyle.appBar}
            zDepth={4}
          />
      }
    </div>
  );
};

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
};

export default connect()(withRouter(Navigation)); // inject just dispatch
