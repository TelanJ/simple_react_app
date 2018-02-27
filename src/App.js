import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VisibleOrdersRoot from './orders/containers/ordersRoot';
import VisibleProductsRoot from "./products/containers/productsRoot";
import VisibleShopsCategoriesBrandsRoot from "./shopsCategoriesBrands/containers/shopsCategoriesBrands";
import { Nav, NavItem } from "react-bootstrap";

import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
            <Nav pullLeft>
              <IndexLinkContainer to="/" activeClassName="active">
                <NavItem>Home</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/orders" activeClassName="active">
                <NavItem>Orders</NavItem>
              </LinkContainer>
              <LinkContainer to="/products" activeClassName="active">
                <NavItem>Products</NavItem>
              </LinkContainer>
              <LinkContainer to="/configs" activeClassName="active">
                <NavItem>Shops, Categories and Brands</NavItem>
              </LinkContainer>
            </Nav>
            <Switch>
                <Route path="/:id" component={Child} />
                <Route path="/" component={Home} />
            </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

const Home = ({ match }) => (
  <div style={{"marginTop": "20px"}}>
    <h3>Honey I'm Home!</h3>
  </div>
);

const Child = ({ match }) => (
  <div style={{"marginTop": "20px"}}>
    {match.params.id === "orders" && <VisibleOrdersRoot props={match.params} />}
    {match.params.id === "products" && <VisibleProductsRoot props={match.params} />}
    {match.params.id === "configs" && <VisibleShopsCategoriesBrandsRoot props={match.params} />}
  </div>
);

export default App;
