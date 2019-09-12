import { addProductToCard } from './productsAction';
import { RESET } from './actionTypes';

const resetState = () => ({
    type: RESET
});

export {
    addProductToCard,
    resetState
}