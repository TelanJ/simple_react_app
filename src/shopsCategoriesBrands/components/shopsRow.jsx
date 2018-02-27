import React from "react";

const ShopsRow = (props) => (
    <tr>
        <td>{props.shop.name}</td>
        <td>{props.shop.poc}</td>
        <td>{props.shop.tel}</td>
    </tr>
)

export default ShopsRow;