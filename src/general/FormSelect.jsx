import React from "react";
import { FormControl, ControlLabel, FormGroup } from "react-bootstrap";

const FormSelect = (props) => {
    return (
        <FormGroup>
            <ControlLabel>{props.label}</ControlLabel>
            <FormControl componentClass="select" {...props}>
                {props.options}
            </FormControl>
        </FormGroup>
      );
}

export default FormSelect;