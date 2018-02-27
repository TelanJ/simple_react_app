import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import OrderReducer from "../reducers/orders";
import VisibleOrders from "../components/orders";

const createStorage = compose(
    applyMiddleware(thunkMiddleware)
)(createStore);

class VisibleOrdersRoot extends Component {
  componentWillMount() {
      this.store = createStorage(OrderReducer, {});
  }
  render() {
    return (
      <Provider store={this.store}>
        <VisibleOrders />
      </Provider>
    );
  }
}

export default VisibleOrdersRoot;
