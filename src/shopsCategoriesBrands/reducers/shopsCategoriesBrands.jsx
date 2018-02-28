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

function brand (brand = { name: "" }, action) {
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

let shop_default = {
    name: "",
    categories: [],
    city: "",
    address: "",
    tel: "",
    poc: "",
    memo: []
}

function shop (shop = shop_default, action) {
    switch(action.type) {
    case "CHANGE_SHOP_ATTR": {
        let {attr, value} = action;
        let new_obj = shop;
        new_obj[attr] = value;
        return new_obj;
    }
    default:
        return shop;
    }
}

let category_default = {
    name: "",
    brands: [],
    specFilter: [],
    image: ""
}

function category (category = category_default, action) {
    switch(action.type) {
    case "CHANGE_CATEGORY_ATTR": {
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
