// import PropTypes from 'prop-types'
import * as ProductsActions from "../actions/products";
import React from "react";
import { connect } from "react-redux";
import { Table, Button, Row, Col } from "react-bootstrap";
import CreateModal from "../../general/CreateModal";
import FormInput from "../../general/FormInput";
import FormSelect from "../../general/FormSelect";

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false
        }
    }

    componentWillMount() {
        this.props.getLiveProducts();
        this.props.FetchFromApi("RECV_CATEGORIES", "categories");
        this.props.FetchFromApi("RECV_BRANDS", "brands");
        this.props.FetchFromApi("RECV_SHOPS", "shops");
    }

    _onClickModal() {
        this.setState({modal: !this.state.modal});
    }

    _onSelectChange(type, model, e) {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
            value.push(options[i].value);
            }
        }
        this.props.onChangeAttr(type, model, value);
    }

    _onCreateModal () {
        this.setState({modal: false});
        this.props.onCreateProduct();
    }

    render() {
        // console.log("products", this.props.products);
        console.log("product", this.props.product);
        let productCategoryRow = this.props.products.map((product, i) => {
            return <ProductsCategoryRow key={"product_category_row_" + i} product={product} />
        });
        let categories_options = this.props.categories.map((category, i) => {
            return (
                <option value={category.ID} key={"categories_option_" + i}>{category.name}</option>
            );
        })
        let brands_options = this.props.brands.map((brand, i) => {
            return (
                <option value={brand.ID} key={"brands_option_" + i}>{brand.name}</option>
            );
        })
        let shops_options = this.props.shops.map((shop, i) => {
            return (
                <option value={shop.ID} key={"shops_option_" + i}>{shop.name}</option>
            );
        })
        let product_modal_body = (
            <div>
                <FormInput type="text" 
                    label="Name"
                    defaultValue={this.props.product.name}
                    onChange={(e) => this.props.onChangeAttr("CHANGE_PRODUCT_ATTR", "name", e.target.value)} 
                />
                <FormInput type="text" 
                    label="Model ID"
                    onChange={(e) => this.props.onChangeAttr("CHANGE_PRODUCT_ATTR", "modelId", e.target.value)} 
                />
                <FormInput type="text" 
                    label="Description"
                    defaultValue={this.props.product.description}
                    onChange={(e) => this.props.onChangeAttr("CHANGE_PRODUCT_ATTR", "description", e.target.value)} 
                />
                <FormInput type="text" 
                    label="Estimated Delivery Days"
                    onChange={(e) => this.props.onChangeAttr("CHANGE_PRODUCT_ATTR", "estimatedDeliveryDays", e.target.value)} 
                />
                <FormInput type="number" 
                    label="Price"
                    defaultValue={this.props.product.price}
                    onChange={(e) => this.props.onChangeAttr("CHANGE_PRODUCT_ATTR", "price", e.target.value)} 
                />
                <FormSelect
                    label="Categories"
                    className="form-control"
                    multiple
                    options={categories_options}
                    onChange={(e) => this._onSelectChange("CHANGE_PRODUCT_ATTR", "categories", e)}
                />
                <FormSelect
                    label="Brands"
                    className="form-control"
                    options={brands_options}
                    onChange={(e) => this.props.onChangeAttr("CHANGE_PRODUCT_ATTR", "brand", e.target.value)}
                />
                <FormSelect
                    label="Shops"
                    className="form-control"
                    options={shops_options}
                    multiple
                    onChange={(e) => this._onSelectChange("CHANGE_PRODUCT_ATTR", "shops", e)}
                />
            </div>
        );
        return (
            <div>
                <Row>
                    <Col md={12}>
                        <h3 className="pull-left">Products</h3>
                        <Button className="pull-right" style={{"marginTop": "15px"}}
                            onClick={() => this._onClickModal()}>+</Button>
                    </Col>
                </Row>
                <hr/>
                {productCategoryRow}
                <CreateModal 
                    show={this.state.modal} 
                    onHide={() => this._onClickModal()} 
                    onCreate={() => this._onCreateModal()}
                    body={product_modal_body} 
                    title={"Create Product"} />
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
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.modelId}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default VisibleProducts;
