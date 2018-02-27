
import axios from "axios";
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080/api/v1';

function receiveProducts(value) {
    return {
        type: "RECV_PRODUCTS",
        value
    }
}

export function getLiveProducts() {
    return (dispatch) => {
        let url = API_BASE_URL + "/products"
        return axios({
            url: url,
            timeout: 20000,
            method: "get",
            responseType: "json"
        })
            .then((response) => {
                dispatch(receiveProducts(response.data));
            })
            .catch((error) => {
                alert(error);
            });
    };
}
