// import PropTypes from 'prop-types'
import * as OrderActions from "../actions/orders";
import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import moment from "moment";

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
                    <thead>
                        <tr>
                            <th>Reference #</th>
                            <th>Employee ID</th>
                            <th>Product</th>
                            <th>Delivery Address</th>
                            <th>Delivery Date</th>
                        </tr>
                    </thead>
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

const OrdersRow = (props) => (
    <tr key={"orders_row_" + props.i}>
        {console.log("props.order", props.order)}
        <td>{props.order.reference_number}</td>
        <td>{props.order.employee_id}</td>
        <td>{props.order.products[0].name}</td>
        <td>{props.order.delivery_address}</td>
        <td>{moment(props.order.delivery_date).format("LLL")}</td>
    </tr>
)


export default VisibleOrder;
