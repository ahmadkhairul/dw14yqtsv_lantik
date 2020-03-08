import React, { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteOrder } from "../_actions/order";

const App = ({ id, deleteOrder }) => {
  const [lgShow, setLgShow] = useState(false);
  const handleDelete = () => {
    deleteOrder(id);
  };

  return (
    <Fragment>
      <img onClick={() => setLgShow(true)} src="./delete.png" alt="" />
      <Modal
        size="sm"
        show={lgShow}
        onHide={() => setLgShow(false)}
        className="modal-1"
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete this transaction?</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              handleDelete();
            }}
            className="btn-modal"
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

// export default App;
function mapStateToProps(state) {
  return {
    order: state.order
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteOrder: id => dispatch(deleteOrder(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
