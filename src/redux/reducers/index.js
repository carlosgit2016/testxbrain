import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import { RESET } from '../actions/actionTypes';
import { reducer as reduxFormReducer } from 'redux-form';

function resetState(state = {}, action) {
    switch (action) {
        case RESET:
            return {};
        default:
            return state;
    }
}

export default combineReducers({
    productsReducer,
    form: reduxFormReducer,
    resetState
});