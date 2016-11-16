// Import Actions
import { TOGGLE_ADD_POST } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  open: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    default:
      return state;
  }
};

/* Selectors */

export const getShowAddPost = state => state.app.showAddPost;

// Export Reducer
export default AppReducer;
