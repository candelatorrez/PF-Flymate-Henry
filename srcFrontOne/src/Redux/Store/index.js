import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import flightsReducers from "../Reducers/flights";


const reducer = combineReducers({
    flightsReducers
});

const configureStore = () => {
    return createStore(
        reducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
}

export default configureStore;




// const reducer = combineReducers({
//     flights
// });

// export const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(thunk))
// )