// Export Constants
export const SET_LEAVE_ANIMATION = 'SET_LEAVE_ANIMATION';
export const ENABLE_SUBMIT = 'ENABLE_SUBMIT';
export const DISABLE_SUBMIT = 'DISABLE_SUBMIT';
export const SUBMIT_FORM = 'SUBMIT_FORM';

// Export Actions
export function setLeaveAnimation(animation) {
  return {
    type: SET_LEAVE_ANIMATION,
    animation,
  };
}

export function disableSubmit() {
  return {
    type: DISABLE_SUBMIT,
    canSubmit: false,
  };
}

export function enableSubmit() {
  return {
    type: ENABLE_SUBMIT,
    canSubmit: true,
  };
}

export function submitForm(data) {
  return {
    type: SUBMIT_FORM,
    data,
  };
}
