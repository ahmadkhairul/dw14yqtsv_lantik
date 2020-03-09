import React, { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { postOrder } from "../_actions/order";

const App = ({ setdata, data, postOrder }) => {
  const [lgShow, setLgShow] = useState(false);
  const { quantity } = setdata;
  const { id, price } = data;

  return (
    <Fragment>
      <Button className="btn-modal" onClick={() => setLgShow(true)}>
        Buy
      </Button>
      <Modal size="sm" show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>BELI TIKET INI ?</Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-modal"
            onClick={() => postOrder({ id, price, quantity })}
          >
            YES
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    setdata: state.setdata
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postOrder: value => dispatch(postOrder(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
