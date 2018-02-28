import React from "react";
import { FormControl, ControlLabel, FormGroup } from "react-bootstrap";

const FormInput = (props) => {
    return (
        <FormGroup>
          <ControlLabel>{props.label}</ControlLabel>
          <FormControl {...props} />
        </FormGroup>
      );
}

export default FormInput;