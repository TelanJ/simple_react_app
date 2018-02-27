// import PropTypes from 'prop-types'
import * as shopsCategoriesBrandsActions from "../actions/shopsCategoriesBrands";
import React from "react";
import { connect } from "react-redux";
import { Table, Col} from "react-bootstrap";

class ShopsCategoriesBrands extends React.Component {
    componentWillMount() {
        this.props.getLiveShops();
        this.props.getLiveCategories();
        this.props.getLiveBrands();
    }

    render() {
        let shopsRow = this.props.shops.map((shop, i) => <ShopsRow key={"shops_row_" + i} shop={shop} />)
        let categoriesRow = this.props.categories.map((category, i) => <CategoriesRow key={"categories_row_" + i} category={category} />)
        let brandsRow = this.props.brands.map((brand, i) => <BrandsRow key={"brands_row_" + i} brand={brand} />)
        return (
            <div>
                <Col md={4}>
                    <h5>Shops</h5>
                    <Table>
                        <tbody>
                            {shopsRow}  
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    <h5>Categories</h5>
                    <Table>
                        <tbody>
                            {categoriesRow}
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    <h5>Brands</h5>
                    <Table>
                        <tbody>
                            {brandsRow}
                        </tbody>
                    </Table>
                </Col>
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

const ShopsRow = (props) => (
    <tr>
        {console.log("props", props)}
        <td>{props.shop.name}</td>
    </tr>
)

const CategoriesRow = (props) => (
    <tr>
        {console.log("props", props)}
        <td>{props.category.name}</td>
    </tr>
)

const BrandsRow = (props) => (
    <tr>
        {console.log("props", props)}
        <td>{props.brand.name}</td>
    </tr>
)

export default VisibleShopsCategoriesBrands;
