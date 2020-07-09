import * as actionTypes from "../actions/actionTypes";

// Global state
let initialState = {
  chosenCharity: null,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUTTON_CLOSED: {
      return {
        ...state,
        chosenCharity: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

// let reducer = (state = initialState, action) => {
//     if (action.type === "BUTTON_CHOSEN") {
//       return {
//         ...state,
//         chosenCharity: action.payload,
//       };
//     }
//     return state;
//   };
