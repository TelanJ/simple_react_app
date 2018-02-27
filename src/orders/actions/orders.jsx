
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/v1';
const X_ACCESS_TOKEN = process.env.REACT_APP_X_ACCESS_TOKEN || 'test';

function receiveOrders(value) {
    return {
        type: "RECV_ORDERS",
        value
    }
}

export function getLiveOrders() {
    return (dispatch) => {
        let url = API_BASE_URL + "/orders"
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
                dispatch(receiveOrders(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
}
