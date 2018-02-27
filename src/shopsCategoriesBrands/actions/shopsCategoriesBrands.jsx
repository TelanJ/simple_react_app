
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

export function getLiveShops() {
    return (dispatch) => {
        let url = API_BASE_URL + "/shops"
        return axios({
            url: url,
            timeout: 20000,
            method: "get",
            responseType: "json",
            headers: {
                "X-Access-Token": X_ACCESS_TOKEN
            }
        })
            .then((response) => {
                dispatch(receiveShops(response.data));
            })
            .catch((error) => {
                alert(error);
            });
    };
}

export function getLiveCategories() {
    return (dispatch) => {
        let url = API_BASE_URL + "/categories"
        return axios({
            url: url,
            timeout: 20000,
            method: "get",
            responseType: "json",
            headers: {
                "X-Access-Token": X_ACCESS_TOKEN
            }
        })
            .then((response) => {
                dispatch(receiveCategories(response.data));
            })
            .catch((error) => {
                alert(error);
            });
    };
}


export function getLiveBrands() {
    return (dispatch) => {
        let url = API_BASE_URL + "/brands"
        return axios({
            url: url,
            timeout: 20000,
            method: "get",
            responseType: "json",
            headers: {
                "X-Access-Token": X_ACCESS_TOKEN
            }
        })
            .then((response) => {
                dispatch(receiveBrands(response.data));
            })
            .catch((error) => {
                alert(error);
            });
    };
}
