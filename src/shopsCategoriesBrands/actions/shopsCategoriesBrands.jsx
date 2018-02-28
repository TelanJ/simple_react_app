
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/v1';
const X_ACCESS_TOKEN = process.env.REACT_APP_X_ACCESS_TOKEN || 'test';

function receiveShops(value) {
    return {
        type: "RECV_SHOPS",
        value
    }
}

function receiveCategories(value) {
    return {
        type: "RECV_CATEGORIES",
        value
    }
}

function receiveBrands(value) {
    return {
        type: "RECV_BRANDS",
        value
    }
}

function changeAttr(type, attr, value) {
    return {
        type,
        attr,
        value
    }
}

function shopsApiCall(method, query, data) {
    return (dispatch) => {
        let url = API_BASE_URL + "/shops"
        return axios({
            url: url,
            timeout: 20000,
            method: method,
            responseType: "json",
            query: query,
            data: data,
            headers: {
                "X-Access-Token": X_ACCESS_TOKEN
            }
        })
            .then((response) => {
                if (response.data !== null) {
                    dispatch(receiveShops(response.data));
                }
            })
            .catch((error) => {
                alert(error);
            });
    };
}

function categoriesApiCall(method, query, data) {
    return (dispatch) => {
        let url = API_BASE_URL + "/categories"
        return axios({
            url: url,
            timeout: 20000,
            method: method,
            responseType: "json",
            query: query,
            data: data,
            headers: {
                "X-Access-Token": X_ACCESS_TOKEN
            }
        })
            .then((response) => {
                if (response.data !== null) {
                    dispatch(receiveCategories(response.data));
                }
            })
            .catch((error) => {
                alert(error);
            });
    };
}

function brandsApiCall(method, query, data) {
    return (dispatch) => {
        let url = API_BASE_URL + "/brands"
        return axios({
            url: url,
            timeout: 20000,
            method: method,
            responseType: "json",
            query: query,
            data: data,
            headers: {
                "X-Access-Token": X_ACCESS_TOKEN
            }
        })
            .then((response) => {
                if (response.data !== null) {
                    dispatch(receiveBrands(response.data));
                }
            })
            .catch((error) => {
                alert(error);
            });
    };
}

export function getLiveShops() {
    return (dispatch) => {
        dispatch(shopsApiCall("get", {}, {}));
    }
}

export function getLiveCategories() {
    return (dispatch) => {
        dispatch(categoriesApiCall("get", {}, {}));
    };
}

export function getLiveBrands() {
    return (dispatch) => {
        dispatch(brandsApiCall("get", {}, {}));
    };
}

export function onChangeModel(type, attr, value) {
    return (dispatch) => {
        dispatch(changeAttr(type, attr, value));
    }
}

export function onCreateBrand() {
    return (dispatch, getState) => {
        let name = getState().brand.name;
        if (name !== "") {
            let data = {
                name
            }
            dispatch(brandsApiCall("post", {}, data));
            dispatch(getLiveBrands());
        }
    }
}

export function onCreateShop() {
    return (dispatch, getState) => {
        let { name } = getState().shop;
        if (name !== "") {
            let data = getState().shop;
            dispatch(shopsApiCall("post", {}, data));
            dispatch(getLiveShops());
        }
    }
}

export function onCreateCategory() {
    return (dispatch, getState) => {
        let {name, brands} = getState().category;
        if (name !== "" && brands.length > 0) {
            let data = getState().category
            dispatch(categoriesApiCall("post", {}, data));
            dispatch(getLiveCategories());
        }
    }
}
