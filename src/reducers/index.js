import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAILURE, TOGGLE_EDITING, UPDATE_TITLE } from "../actions";

// Define initial state
const initialState = {
    editing: false,
    loading: false,
    error: "",
    joke: "",
    title: "WEBPT24 Redux Hooks Dad Joke Party '09"
};


// Define a reducer with all state management functions related to the title

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return { ...state, title: action.payload, editing: false }
        case TOGGLE_EDITING: 
            return { ...state, editing: !state.editing }
        case FETCHING_QUOTE_START:
            return { ...state, loading: true }
        case FETCHING_QUOTE_SUCCESS:
            return { ...state, loading: false, joke: action.payload }
        case FETCHING_QUOTE_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            console.log("Error: unknown action type in Title Reducer");
            return state;  
    }
}