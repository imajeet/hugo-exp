import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Import muiTheme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import rawTheme from './AppTheme';
import { getMuiTheme } from 'material-ui/styles';

// Import Style
import styles from './App.css';

// Import Components
import DevTools from './components/DevTools';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleDrawer } from './AppActions';

import { getIsDrawerOpen } from './AppReducer';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // eslint-disable-line
  }

  toggleDrawer = () => this.props.dispatch(toggleDrawer());

  render() {
    const muiTheme = getMuiTheme(rawTheme, { userAgent: navigator ? navigator.userAgent : 'all' });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
          <div>
            <Helmet
              title="Hugo Experience"
              titleTemplate="%s"
              meta={[
                { charset: 'utf-8' },
                {
                  'http-equiv': 'X-UA-Compatible',
                  content: 'IE=edge',
                },
                {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                },
              ]}
            />
            <Navigation title="HugoExp" onTapTouch={this.toggleDrawer} open={this.props.open} />
            <div className={styles.container}>
              {this.props.children}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    open: getIsDrawerOpen(store),
  };
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
