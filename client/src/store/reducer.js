// Global state 
let initialState = {
    chosenCharity: null,
}

// Reducer
let reducer = (state = initialState, action) => {
    if (action.type === "BUTTON_CHOSEN") {
        return {
            ...state,
            chosenCharity: action.payload
        }
    }
    return state
}

export default reducer;