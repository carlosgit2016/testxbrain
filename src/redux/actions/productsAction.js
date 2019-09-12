import { ADD_PRODUCTS_TO_CARD } from './actionTypes';

export const addProductToCard = (product,amount) => ({
    type: ADD_PRODUCTS_TO_CARD,
    product,
    amount
});