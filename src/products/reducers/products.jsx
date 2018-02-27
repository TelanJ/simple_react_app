import { combineReducers } from "redux";

function products (value = [], action) {
    switch (action.type) {
    case "RECV_PRODUCTS":
        return action.value;
    default:
        return value;
    }
}

const ProductsReducer = combineReducers({
    products
});

export default ProductsReducer;
