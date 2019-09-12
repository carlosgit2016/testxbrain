import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    productsReducer,
    form: reduxFormReducer
})