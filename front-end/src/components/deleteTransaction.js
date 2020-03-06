import React, { Fragment, useState, useReducer } from "react";
import { Modal } from "react-bootstrap";

const App = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <Fragment>
      <img onClick={() => setLgShow(true)} src="./delete.png" />
      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span>DELETE</span>
          </Modal.Title>
        </Modal.Header>
        Do you really want to delete this transaction?
        <Modal.Body></Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default App;
// function mapStateToProps(state) {
//   return {
//     login: state.auth
//   };
// }

// export default connect(mapStateToProps)(App);
