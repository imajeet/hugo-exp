/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import analyzed from './modules/Analyzed/AnalyzedReducer';
import portfolio from './modules/Portfolio/PortfolioReducer';


// Combine all reducers into one root reducer
export default combineReducers({
  app,
  analyzed,
  portfolio,
});
