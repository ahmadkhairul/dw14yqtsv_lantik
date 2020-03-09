import React, { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import { connect } from "react-redux";
// import { saveOrder } from "../_actions/order";

const App = ({ data }) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <Fragment>
      <Button className="btn-modal" onClick={() => setLgShow(true)}>
        Buy
      </Button>
      <Modal size="sm" show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>BELI TICKET INI</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default App;

// function mapStateToProps(state) {
//   return {
//     order: state.order
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     saveOrder: value => dispatch(saveOrder(value))
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
