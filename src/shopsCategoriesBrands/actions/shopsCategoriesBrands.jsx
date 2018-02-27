
import axios from "axios";
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080/api/v1';

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
            responseType: "json"
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
            responseType: "json"
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
            responseType: "json"
        })
            .then((response) => {
                dispatch(receiveBrands(response.data));
            })
            .catch((error) => {
                alert(error);
            });
    };
}
