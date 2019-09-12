import { ADD_PRODUCTS_TO_CARD, RESET } from '../actions/actionTypes'

const initialState = {
    products: [],
    totalPrice: 0
}

function addProduct(state, action) {
    let { products } = state;
    let { product: productToAdd, amount: amountToAdd } = action;

    let resultProduct = products.find(infoProduct => infoProduct.product.img === productToAdd.img); //using img how id
    state.totalPrice += action.product.price * action.amount;
    if (resultProduct) {
        resultProduct.amount += amountToAdd;
        return { ...state, products: [...products] };
    } else {
        return { ...state, products: [...products, { product: action.product, amount: action.amount }] };
    }
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCTS_TO_CARD:
            return addProduct(state, action);
        case RESET:
            return {products: [], totalPrice: 0};
        default:
            return state;
    }
}