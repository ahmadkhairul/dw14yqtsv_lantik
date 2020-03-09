import React, { Fragment, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updateOrder } from "../_actions/order";

const App = ({ id, status, updateOrder }) => {
  const [lgShow, setLgShow] = useState(false);
  const [dataStatus, setDataStatus] = useState(status);

  const value = { id, dataStatus };
  const handleSubmit = () => {
    updateOrder(value);
  };

  return (
    <Fragment>
      <img onClick={() => setLgShow(true)} src="./edit.png" alt="" />
      <Modal size="sm" show={lgShow} onHide={() => setLgShow(false)}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>PAYMENT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="dataStatus"
                value={dataStatus}
                onChange={event => {
                  setDataStatus(event.target.value);
                }}
              >
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Cancel">Cancel</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-modal" type="submit">
              Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    order: state.order
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateOrder: value => dispatch(updateOrder(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
