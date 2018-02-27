
import axios from "axios";
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080/api/v1';

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
            responseType: "json"
        })
            .then((response) => {
                dispatch(receiveOrders(response.data));
            })
            .catch((error) => {
                alert(error);
            });
    };
}
