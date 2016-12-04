/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
// import analyzed from './modules/Analyzed/AnalyzedReducer';
import portfolio from './modules/Portfolio/PortfolioReducer';
import home from './modules/Home/HomeReducer';
import aboutMe from './modules/AboutMe/AboutMeReducer';
import contact from './modules/Contact/ContactReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  // analyzed,
  home,
  aboutMe,
  portfolio,
  contact,
});
