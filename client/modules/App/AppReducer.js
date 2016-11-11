// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_DRAWER } from './AppActions';

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
    case TOGGLE_DRAWER:
      return {
        open: !state.open,
      };
    default:
      return state;
  }
};

/* Selectors */

export const getShowAddPost = state => state.app.showAddPost;
export const getIsDrawerOpen = state => state.app.open;

// Export Reducer
export default AppReducer;
