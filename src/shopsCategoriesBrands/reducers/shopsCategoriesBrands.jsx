import { combineReducers } from "redux";

function shops (value = [], action) {
    switch (action.type) {
    case "RECV_SHOPS":
        return action.value;
    default:
        return value;
    }
}

function categories (value = [], action) {
    switch (action.type) {
    case "RECV_CATEGORIES":
        return action.value;
    default:
        return value;
    }
}

function brands (value = [], action) {
    switch (action.type) {
    case "RECV_BRANDS":
        return action.value;
    default:
        return value;
    }
}


const ShopsCategoriesBrandsReducer = combineReducers({
    shops,
    categories,
    brands
});

export default ShopsCategoriesBrandsReducer;
