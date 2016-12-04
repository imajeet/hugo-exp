// Import Actions
import { SET_LEAVE_ANIMATION, ENABLE_SUBMIT, DISABLE_SUBMIT } from './ContactActions';

// Initial State
const initialState = {
  animation: '',
  canSubmit: false,
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAVE_ANIMATION:
      return Object.assign({}, state, {
        animation: action.animation,
      });
    case ENABLE_SUBMIT:
      return Object.assign({}, state, {
        canSubmit: true,
      });
    case DISABLE_SUBMIT:
      return Object.assign({}, state, {
        canSubmit: false,
      });
    default:
      return state;
  }
};

export const getLeaveAnimation = state => state.contact.animation;
export const getSubmitStatus = state => state.contact.canSubmit;
export default ContactReducer;
