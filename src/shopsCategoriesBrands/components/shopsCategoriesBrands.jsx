// import PropTypes from 'prop-types'
import * as shopsCategoriesBrandsActions from "../actions/shopsCategoriesBrands";
import React from "react";
import { connect } from "react-redux";
// import {Row, Col, Button, Navbar, MenuItem, Nav, NavItem, NavDropdown} from "react-bootstrap";

class ShopsCategoriesBrands extends React.Component {
    render() {
        return (
            <div>
                ShopsCategoriesBrands Page
            </div>
        );
    }
}

ShopsCategoriesBrands.propTypes = {
};

function mapStateToProps(state) {
    return state;
}

const VisibleShopsCategoriesBrands = connect(
    mapStateToProps,
    shopsCategoriesBrandsActions
)(ShopsCategoriesBrands);

export default VisibleShopsCategoriesBrands;
