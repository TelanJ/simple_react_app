import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import shopsCategoriesBrandsReducer from "../reducers/shopsCategoriesBrands";
import VisibleShopsCategoriesBrands from "../components/shopsCategoriesBrands";

const createStorage = compose(
    applyMiddleware(thunkMiddleware)
)(createStore);

class VisibleShopsCategoriesBrandsRoot extends Component {
  componentWillMount() {
      this.store = createStorage(shopsCategoriesBrandsReducer, {});
  }
  render() {
    return (
      <Provider store={this.store}>
        <VisibleShopsCategoriesBrands />
      </Provider>
    );
  }
}

export default VisibleShopsCategoriesBrandsRoot;
