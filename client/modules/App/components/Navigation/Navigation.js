import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import an from '../../../../assets/animate.css';
import style from './Navigation.css';


const Navigation = (props) => {
  const linkedLables = {
    Portfolio: <Link to="/portfolio" />,
    Me: <Link to="/me" />,
    Home: <Link to="/" />,
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
            Object.keys(linkedLables).map((linkedLable, i) =>
              <div
                className={`${an.animated} ${an.fadeInRight}`}
                style={{
                  WebkitAnimationDelay: `${i + 1.5}s`,
                  WebkitAnimationDuration: '1s',
                }}
              >
                <FlatButton
                  containerElement={linkedLables[linkedLable]}
                  label={linkedLable}
                  labelPosition="before"
                  key={linkedLable}
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

export default Navigation;
