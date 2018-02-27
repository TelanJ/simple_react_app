import { combineReducers } from "redux";

function orders (value = [], action) {
    switch (action.type) {
    case "RECV_ORDERS":
        return action.value;
    default:
        return value;
    }
}

const OrdersReducer = combineReducers({
    orders
});

export default OrdersReducer;
