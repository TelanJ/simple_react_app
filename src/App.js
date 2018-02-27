import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import VisibleOrdersRoot from './orders/containers/ordersRoot';
import VisibleProductsRoot from "./products/containers/productsRoot";
import VisibleShopsCategoriesBrandsRoot from "./shopsCategoriesBrands/containers/shopsCategoriesBrands";
import { Row } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
                <Row>
                    <Link to="/orders">Orders</Link>
                </Row>
                <Row>
                    <Link to="/products">Products</Link>
                </Row>
                <Row>
                    <Link to="/configs">Shops, Categories and Brands</Link>
                </Row>
                <Switch>
                <Route path="/:id" component={Child} />
                </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

const Child = ({ match }) => (
  <div style={{"marginTop": "20px"}}>
    {match.params.id === "orders" && <VisibleOrdersRoot props={match.params} />}
    {match.params.id === "products" && <VisibleProductsRoot props={match.params} />}
    {match.params.id === "configs" && <VisibleShopsCategoriesBrandsRoot props={match.params} />}
  </div>
);

export default App;
