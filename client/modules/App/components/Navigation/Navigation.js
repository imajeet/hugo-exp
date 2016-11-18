import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
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
            Object.keys(linkedLables).map(linkedLable =>
              <FlatButton
                containerElement={linkedLables[linkedLable]}
                label={linkedLable}
                labelPosition="before"
                key={linkedLable}
              />
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
