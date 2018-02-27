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

function brand (brand = {}, action) {
    switch(action.type) {
    case "CHANGE_BRAND_ATTR": {
        let {attr, value} = action;
        let new_brand = brand;
        new_brand[attr] = value;
        return new_brand;
    }
    default:
        return brand;
    }
}

function shop (shop = {}, action) {
    switch(action.type) {
    case "CHANGE_BRAND_ATTR": {
        let {attr, value} = action;
        let new_obj = shop;
        new_obj[attr] = value;
        return new_obj;
    }
    default:
        return shop;
    }
}

function category (category = {}, action) {
    switch(action.type) {
    case "CHANGE_BRAND_ATTR": {
        let {attr, value} = action;
        let new_obj = category;
        new_obj[attr] = value;
        return new_obj;
    }
    default:
        return category;
    }
}


const ShopsCategoriesBrandsReducer = combineReducers({
    shops,
    categories,
    brands,
    brand,
    shop,
    category
});

export default ShopsCategoriesBrandsReducer;
