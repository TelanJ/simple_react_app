// import PropTypes from 'prop-types'
import * as ProductsActions from "../actions/products";
import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

class Products extends React.Component {
    componentWillMount() {
        this.props.getLiveProducts();
    }

    render() {
        let productCategoryRow = this.props.products.map((product, i) => {
            return <ProductsCategoryRow key={"product_category_row_" + i} product={product} />
        });
        return (
            <div>
                {productCategoryRow}
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

const ProductsCategoryRow = ({product}) => {
    let productsRow = product.Products !== null ? product.Products.map((product, i) => {
        return <ProductsRow product={product} key={"products_row_" + i} />
    }) : null;
    return(
        <div>
            <h4>{product.CategoryName}</h4>
            <Table>
                <tbody>
                    {productsRow}
                </tbody>
            </Table>
        </div>
    )
}

const ProductsRow = ({product}) => {
    console.log("props", product)
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.modelId}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default VisibleProducts;
