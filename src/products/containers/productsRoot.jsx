import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import ProductsReducer from "../reducers/products";
import VisibleProducts from "../components/products";

const createStorage = compose(
    applyMiddleware(thunkMiddleware)
)(createStore);

class VisibleProductsRoot extends Component {
  componentWillMount() {
      this.store = createStorage(ProductsReducer, {});
  }
  render() {
    return (
      <Provider store={this.store}>
        <VisibleProducts />
      </Provider>
    );
  }
}

export default VisibleProductsRoot;
