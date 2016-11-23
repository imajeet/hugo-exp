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

const Navigation = (props) => {
  const leaveAnimation = `${an.fadeOut}`;
  const handler = (route, setLeaveAnimationAction, animation) => {
    if (window.location.pathname !== route) {
      // fadeOut this route
      props.dispatch(setLeaveAnimationAction(animation));
      setTimeout(() => {
        // reset animations
        props.dispatch(setLeaveAnimationAction(''));
        props.router.push(route);
      }, 800);
    }
  };

  const mapAnimationToRouteHandler = (route) => {
    switch (route) {
      case '/': {
        handler(route, setHomeLeaveAnimation, leaveAnimation);
      }
        break;
      case '/me': {
        handler(route, setAboutMeLeaveAnimation, leaveAnimation);
      }
        break;
      case '/portfolio': {
        handler(route, setPortfolioLeaveAnimation, leaveAnimation);
      }
        break;
      default:
        break;
    }
  };

  const mapLablesToHandlers = {
    Me: { handler: () => mapAnimationToRouteHandler('/me') },
    Home: { handler: () => mapAnimationToRouteHandler('/') },
    Portfolio: { handler: () => mapAnimationToRouteHandler('/portfolio') },
  };

  return (
    <div>
      <Drawer
        containerStyle={{ WebkitTransition: 'width 1s' }}
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
                  WebkitAnimationDelay: `${i + 0.5}s`,
                  WebkitAnimationDuration: '1s',
                }}
              >
                <FlatButton
                  onTouchTap={mapLablesToHandlers[mappedLabel].handler}
                  label={mappedLabel}
                  labelPosition="before"
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
