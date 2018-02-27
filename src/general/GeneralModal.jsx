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
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default GeneralModal;