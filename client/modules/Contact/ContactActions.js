import callApi from '../../util/apiCaller';
import { batchActions } from 'redux-batched-actions';

// Export Constants
export const SET_LEAVE_ANIMATION = 'SET_LEAVE_ANIMATION';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SHOW_SWAL = 'SHOW_SWAL';
export const HIDE_SWAL = 'HIDE_SWAL';

// Export Actions
export function setLeaveAnimation(animation) {
  return {
    type: SET_LEAVE_ANIMATION,
    animation,
  };
}

export function submitForm(data) {
  return {
    type: SUBMIT_FORM,
    data,
  };
}

export function showSwal() {
  return {
    type: SHOW_SWAL,
  };
}

export function hideSwal() {
  return {
    type: HIDE_SWAL,
  };
}

export function submitFormRequest(data) {
  const { name, email, phone, inquiry } = data;
  return dispatch => {
    callApi('add-contact/', 'post', {
      data: {
        name,
        email,
        phone,
        inquiry,
      },
    }).then(res => {
      dispatch(
        batchActions([
          submitForm(res),
          showSwal(),
        ])
      );
    });
  };
}
