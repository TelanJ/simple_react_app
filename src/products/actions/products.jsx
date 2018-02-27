
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/v1';
const X_ACCESS_TOKEN = process.env.REACT_APP_X_ACCESS_TOKEN || 'test';

function receiveProducts(value) {
    return {
        type: "RECV_PRODUCTS",
        value
    }
}

function apiCall(method, query, data) {
    return (dispatch) => {
        let url = API_BASE_URL + "/products"
        return axios({
            url: url,
            timeout: 20000,
            method: method,
            data: data,
            query: query,
            responseType: "json",
            headers: {
                "X-Access-Token": X_ACCESS_TOKEN
            }
        })
            .then((response) => {
                dispatch(receiveProducts(response.data));
            })
            .catch((error) => {
                alert(error);
            });
    };
}

export function getLiveProducts() {
    return (dispatch) => {
        dispatch(apiCall("get", {}, {}))
    }
}
