// Import Actions
import { SET_LEAVE_ANIMATION, SHOW_SWAL, HIDE_SWAL, SUBMIT_FORM } from './ContactActions';

// Initial State
const initialState = {
  animation: '',
  data: {},
  showSwal: false,
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAVE_ANIMATION:
      return Object.assign({}, state, {
        animation: action.animation,
      });
    case SHOW_SWAL:
      return Object.assign({}, state, {
        showSwal: true,
      });
    case HIDE_SWAL:
      return Object.assign({}, state, {
        showSwal: false,
      });
    case SUBMIT_FORM:
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
};

export const getLeaveAnimation = state => state.contact.animation;
export const getContactData = state => state.contact.data;
export const getSwal = state => state.contact.showSwal;

export default ContactReducer;
