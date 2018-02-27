// import PropTypes from 'prop-types'
import * as ProductsActions from "../actions/products";
import React from "react";
import { connect } from "react-redux";
// import {Row, Col, Button, Navbar, MenuItem, Nav, NavItem, NavDropdown} from "react-bootstrap";

class Products extends React.Component {
    render() {
        return (
            <div>
                Products Page
            </div>
        );
    }
}

Products.propTypes = {
};

function mapStateToProps(state) {
    return state;
}

const VisibleProducts = connect(
    mapStateToProps,
    ProductsActions
)(Products);

export default VisibleProducts;
