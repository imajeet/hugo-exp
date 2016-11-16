import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Import muiTheme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getMuiTheme } from 'material-ui/styles';
import rawTheme from './AppTheme';

// Import Style
import styles from './App.css';

// Import animate.css
import an from 'assets/animate.css';

// Import Components
import DevTools from './components/DevTools';
import Navigation from './components/Navigation/Navigation';

import PortfolioVideo from '../Portfolio/components/PortfolioVideo/PortfolioVideo';
import ferryRide from '../Portfolio/components/PortfolioVideo/ferry-ride.mp4';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // eslint-disable-line
  }


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
            <div
              className={`${an.animated} ${an.fadeInDown}`}
              style={{
                WebkitAnimationDuration: '2s',
                WebkitAnimationDelay: '1s',
              }}
            >
              <Navigation title="HugoExp" onTapTouch={this.toggleDrawer} />
            </div>

            <PortfolioVideo srcPath={ferryRide} />

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
  return store;
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
