import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import an from '../../../../assets/animate.css';
import style from './Navigation.css';

import { setLeaveAnimation as setHomeLeaveAnimation } from '../../../Home/HomeActions';
import { setLeaveAnimation as setPortfolioLeaveAnimation } from '../../../Portfolio/PortfolioActions';
import { setLeaveAnimation as setAboutMeLeaveAnimation } from '../../../AboutMe/AboutMeActions';

const muiStyle = {
  drawerContainer: { WebkitTransition: 'width 1s', overflow: 'hidden' },
  hoverColor: 'rgba(99.2%, 84.7%, 20.8%, 0.2)',
  ripple: 'rgba(100%, 100%, 0%, 1.0)',
  fontDecor: { fontFamily: 'AvenirNext', fontSize: '14px', letterSpacing: '2px' },
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

  const mapAnimationToRouteHandler = (route) => {
    switch (route) {
      case '/': {
        routeHandler(route, setHomeLeaveAnimation, `${an.fadeOutLeft}`);
      }
        break;
      case '/me': {
        routeHandler(route, setAboutMeLeaveAnimation, `${an.fadeOut}`);
      }
        break;
      case '/portfolio': {
        routeHandler(route, setPortfolioLeaveAnimation, `${an.fadeOutLeft}`);
      }
        break;
      default:
        break;
    }
  };

  const mapLablesToHandlers = {
    Portfolio: { routeHandler: () => mapAnimationToRouteHandler('/portfolio') },
    Me: { routeHandler: () => mapAnimationToRouteHandler('/me') },
    Home: { routeHandler: () => mapAnimationToRouteHandler('/') },
  };

  return (
    <div>
      <Drawer
        containerStyle={muiStyle.drawerContainer}
        open={props.open}
        width={props.width}
      >
        <nav className={style.menu}>
          {
            Object.keys(mapLablesToHandlers).map((mappedLabel, i) =>
              <div
                key={mappedLabel}
                className={`${an.animated} ${an.fadeInRight}`}
                style={{
                  WebkitAnimationDelay: `${i + 1}s`,
                  WebkitAnimationDuration: '1s',
                }}
              >
                <FlatButton
                  primary
                  style={muiStyle.fontDecor}
                  onTouchTap={mapLablesToHandlers[mappedLabel].routeHandler}
                  label={mappedLabel}
                  labelPosition="before"
                  hoverColor={muiStyle.hoverColor}
                  rippleColor={muiStyle.ripple}
                />
              </div>
            )
          }
        </nav>
      </Drawer>
    </div>
  );
};

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
};

export default connect()(withRouter(Navigation)); // inject just dispatch
