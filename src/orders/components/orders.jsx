// import PropTypes from 'prop-types'
import * as OrderActions from "../actions/orders";
import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

class Orders extends React.Component {
    componentWillMount() {
        this.props.getLiveOrders();
    }
    render() {
        let ordersBody = this.props.orders.map((order, i) => {
            return <OrdersRow order={order} i={i} key={"orders_row_comp_" + i} />
        })
        return (
            <div>
                <Table>
                    <tbody>
                        {ordersBody}
                    </tbody>
                </Table>
            </div>
        );
    }
}
Orders.propTypes = {
};

function mapStateToProps(state) {
    return state;
}

const VisibleOrder = connect(
    mapStateToProps,
    OrderActions
)(Orders);

const OrdersRow = (props) => {
    return (
        <tr key={"orders_row_" + props.i}>
        {console.log("props", props)}
        <td>TEST</td>
    </tr>
    )
}


export default VisibleOrder;
