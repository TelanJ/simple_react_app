import React from "react";
import { Modal, Button } from "react-bootstrap";

const GeneralModal = (props) => {
    return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.body}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide} className="pull-left">Close</Button>
            <Button onClick={props.onCreate} className="pull-right btn-success">Create</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default GeneralModal;