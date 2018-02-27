import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VisibleOrdersRoot from "./orders/containers/ordersRoot";
import VisibleProductsRoot from "./products/containers/productsRoot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/orders" component={VisibleOrdersRoot} />
              <Route path="/products" component={VisibleProductsRoot} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
