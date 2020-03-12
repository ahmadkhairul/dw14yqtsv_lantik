import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { postLogin } from "../_actions/auth";

const App = ({ login, postLogin }) => {
  const { error, loading } = login;

  const [lgShow, setLgShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    await postLogin({ username, password });
  };

  return (
    <>
      <button className="btn-modal" onClick={() => setLgShow(true)}>
        Buy
      </button>
      <Modal
        size="sm"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {error === true ? <h6>Username or Password Wrong</h6> : <></>}
          {loading === true ? <h6>Now Loading</h6> : <></>}

          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="off"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="off"
                placeholder="Password"
              />
            </Form.Group>
            <Button className="btn-modal" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

//export default App;
function mapStateToProps(state) {
  return {
    login: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postLogin: value => dispatch(postLogin(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
