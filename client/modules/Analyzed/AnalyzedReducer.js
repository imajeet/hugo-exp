import { LOAD_ANALYZED_DATA } from './AnalyzedActions';

const initialState = {
  analyzedData: [],
};

const AnalyzedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ANALYZED_DATA:
      return Object.assign({}, state, {
        analyzedData: action.analyzedData,
      });

    default:
      return state;
  }
};

export const getAnalyzedData = state => state.analyzed.analyzedData;

export default AnalyzedReducer;
