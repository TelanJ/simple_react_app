// import PropTypes from 'prop-types'
import * as shopsCategoriesBrandsActions from "../actions/shopsCategoriesBrands";
import React from "react";
import { connect } from "react-redux";
import { Table, Col} from "react-bootstrap";
import ShopsRow from "./shopsRow";
import CategoriesRow from "./categoriesRow";
import BrandsRow from "./brandsRow";
import CreateModal from "../../general/CreateModal";
import FormInput from "../../general/FormInput";
import FormSelect from "../../general/FormSelect";

class ShopsCategoriesBrands extends React.Component {
    constructor() {
        super();
        this.state = {
            brands_modal: false,
            categories_modal: false,
            shops_modal: false
        }
    }

    componentWillMount() {
        this.props.getLiveShops();
        this.props.getLiveCategories();
        this.props.getLiveBrands();
    }

    _onHideModal() {
        this.setState({brands_modal: false, categories_modal: false, shops_modal: false});
    }

    _onClickModal(modal_name) {
        this.setState({[modal_name]: true })
    }

    _onCreateModal(type) {
        this._onHideModal();
        switch(type) {
        case "brand":
            this.props.onCreateBrand();
            break;
        case "shop":
            this.props.onCreateShop();
            break;
        default:
            this.props.onCreateCategory();
            break;
        }
    }

    _onKeyPress(type, e) {
        if (e.key === "Enter") {
            this._onHideModal();
            switch(type) {
            case "brand":
                this.props.onCreateBrand();
                break;
            case "shop":
                this.props.onCreateShop();
                break;
            default:
                this.props.onCreateCategory();
                break;
            }
        }
    }

    _onSelectChange(type, model, e) {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
            value.push(options[i].value);
            }
        }
        this.props.onChangeModel(type, "categories", value);
    }


    render() {
        console.log("shops", this.props.shops)
        let shopsRow = this.props.shops.map((shop, i) => <ShopsRow key={"shops_row_" + i} shop={shop} />);
        let categoriesRow = this.props.categories.map((category, i) => <CategoriesRow key={"categories_row_" + i} category={category} />);
        let brandsRow = this.props.brands.map((brand, i) => <BrandsRow key={"brands_row_" + i} brand={brand} />);
        let brandsModalBody = (
            <div>
                <input type="text" 
                    onChange={(e) => this.props.onChangeModel("CHANGE_BRAND_ATTR", "name", e.target.value)}
                    onKeyPress={(e) => this._onKeyPress("brand", e)}
                    className="form-control"
                 />
            </div>
        )
        let categories_options = this.props.categories.map((category, i) => {
            return (
                <option value={category.ID} key={"categories_option_" + i}>{category.name}</option>
            );
        })
        let shopsModalBody = (
            <div>
                <FormInput type="text" 
                    label="Name"
                    onChange={(e) => this.props.onChangeModel("CHANGE_SHOP_ATTR", "name", e.target.value)} 
                />
                <FormSelect
                    label="Categories"
                    className="form-control"
                    multiple
                    options={categories_options}
                    onChange={(e) => this._onSelectChange("CHANGE_SHOP_ATTR", "categories", e)}
                />
                <FormInput type="text" 
                    label="City"
                    onChange={(e) => this.props.onChangeModel("CHANGE_SHOP_ATTR", "city", e.target.value)} 
                />
                <FormInput type="text" 
                    label="Address"
                    onChange={(e) => this.props.onChangeModel("CHANGE_SHOP_ATTR", "address", e.target.value)} 
                />
                <FormInput type="text" 
                    label="Contact Number"
                    onChange={(e) => this.props.onChangeModel("CHANGE_SHOP_ATTR", "tel", e.target.value)} 
                />
                <FormInput type="text" 
                    label="Person of Contact"
                    onChange={(e) => this.props.onChangeModel("CHANGE_SHOP_ATTR", "poc", e.target.value)} 
                />
            </div>
            
        )
        let categoryModalBody = (
            <div>
                <input type="text" 
                    className="form-control"
                    onChange={(e) => this.props.onChangeModel("CHANGE_CATEGORY_ATTR", "name", e.target.value)} 
                />
            </div>
        )
        return (
            <div>
                <Col md={3}>
                    <div>
                        <h4 className="pull-left">Categories</h4>
                        <button className="pull-right btn" 
                            style={{"verticalAlign": "middle"}} 
                            onClick={() => this._onClickModal("categories_modal")}
                            type="button">+</button>
                    </div>
                    <Table>
                        <tbody>
                            {categoriesRow}
                        </tbody>
                    </Table>
                </Col>
                <Col md={3}>
                    <div>
                        <h4 className="pull-left">Brands</h4>
                        <button className="pull-right btn" 
                            style={{"verticalAlign": "middle"}} 
                            onClick={() => this._onClickModal("brands_modal")}
                            type="button">+</button>
                    </div>
                    <Table>
                        <tbody>
                            {brandsRow}
                        </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <div>
                        <h4 className="pull-left">Shops</h4>
                        <button className="pull-right btn" 
                            style={{"verticalAlign": "middle"}} 
                            onClick={() => this._onClickModal("shops_modal")}
                            type="button">+</button>
                    </div>
                    <Table>
                        <tbody>
                            {shopsRow}
                        </tbody>
                    </Table>
                </Col>
                <CreateModal 
                    show={this.state.shops_modal} 
                    onHide={() => this._onHideModal()} 
                    onCreate={() => this._onCreateModal("shop")}
                    body={shopsModalBody} 
                    title={"Create Shop"} />
                <CreateModal 
                    show={this.state.categories_modal} 
                    onHide={() => this._onHideModal()} 
                    onCreate={() => this._onCreateModal("category")}
                    body={categoryModalBody} 
                    title={"Categories"} />
                <CreateModal 
                    show={this.state.brands_modal} 
                    onHide={() => this._onHideModal()} 
                    onCreate={() => this._onCreateModal("brand")}
                    body={brandsModalBody} 
                    title={"Create Brand"} />
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
