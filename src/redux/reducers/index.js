import { combineReducers } from 'redux';
//import clientDataReducer from './clientDataReducer';
import productsReducer from './productsReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    //clientDataReducer,
    productsReducer,
    form: reduxFormReducer
})