// import PropTypes from 'prop-types'
import * as OrderActions from "../actions/orders";
import React from "react";
import { connect } from "react-redux";
// import {Row, Col, Button, Navbar, MenuItem, Nav, NavItem, NavDropdown} from "react-bootstrap";

class OrderRoot extends React.Component {
    render() {
        return (
            <div>
                Orders Page
            </div>
        );
    }
}

OrderRoot.propTypes = {
};

function mapStateToProps(state) {
    return state;
}

const VisibleOrder = connect(
    mapStateToProps,
    OrderActions
)(OrderRoot);

export default VisibleOrder;
