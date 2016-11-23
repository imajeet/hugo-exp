// Export Constants
export const SET_LEAVE_ANIMATION = 'SET_LEAVE_ANIMATION';

// Export Actions
export function setLeaveAnimation(animation) {
  return {
    type: SET_LEAVE_ANIMATION,
    animation,
  };
}
