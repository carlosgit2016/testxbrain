import { ADD_PRODUCTS_TO_CARD } from '../actions/actionTypes'

const initialState = {
    products: []
}

function addProduct(state, action) {
    let { products } = state;
    let { product: productToAdd, amount: amountToAdd } = action;
    
    let resultProduct = products.find(infoProduct => infoProduct.product.img === productToAdd.img); //using img how id
    if(resultProduct){
        resultProduct.amount += amountToAdd;
        return {products: [...products]};
    } else {
        return {products: [...products, {product: action.product, amount: action.amount}]};
    }
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCTS_TO_CARD:
            return addProduct(state,action);
        default:
            return state;
    }
}