import * as actionTypes from "../actions/actionTypes";

export const button_closed = (chosenCharity) => {
  return {
    type: actionTypes.BUTTON_CLOSED,
    payload: chosenCharity,
  };
};

export const authenticated = (auth) => {
  return {
    type: actionTypes.AUTHENTICATED,
    value: auth,
  };
};
