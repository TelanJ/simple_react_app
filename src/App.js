import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VisibleOrdersRoot from "./orders/containers/ordersRoot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/orders" component={VisibleOrdersRoot} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
