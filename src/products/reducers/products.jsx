import { combineReducers } from "redux";

function products (value = [], action) {
    switch (action.type) {
    case "RECV_PRODUCTS":
        return action.value;
    default:
        return value;
    }
}

let product_default = {
    name: "",
    modelId: "",
    categories: [],
    description: "",
    images: [],
    estimatedDeliveryDays: 3,
    price: 0.0,
    specs: [],
    shopLists: [],
    similarProducts: [],
    meta: [],
    options: [],
    brand: ""
}

function product (product = product_default, action) {
    switch(action.type) {
    case "CHANGE_PRODUCT_ATTR": {
        let new_obj = product;
        let { attr, value } = action;
        if (attr === "price") {
            value = parseFloat(value);
        }
        if (attr === "estimatedDeliveryDays") {
            value = parseInt(value, 10);
        }
        new_obj[attr] = value;
        return new_obj;
    }
    default:
        return product;
    }
}

function brands (value = [], action) {
    switch(action.type) {
    case "RECV_BRANDS":
        return action.value;
    default:
        return value;
    }
}

function categories (value = [], action) {
    switch(action.type) {
    case "RECV_CATEGORIES":
        return action.value;
    default:
        return value;
    }
}

function shops (value = [], action) {
    switch(action.type) {
    case "RECV_SHOPS":
        return action.value;
    default:
        return value;
    }
}

const ProductsReducer = combineReducers({
    products,
    product,
    brands,
    categories,
    shops
});

export default ProductsReducer;
