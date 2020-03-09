import React, { Fragment, useState, useReducer } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { postLogin } from "../_actions/auth";

const App = ({ login, postLogin }) => {
  const [lgShow, setLgShow] = useState(false);
  const { loading, error } = login;
  const [value, setValue] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      password: ""
    }
  );

  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setValue({ [name]: newValue });
  };

  const { username, password } = value;

  const handleSubmit = async event => {
    event.preventDefault();
    await postLogin({ username, password });
    // window.location.reload();
  };

  return (
    <Fragment>
      <button className="btn-login" onClick={() => setLgShow(true)}>
        <label>Login</label>
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
                onChange={handleChange}
                name="username"
                value={username}
                autoComplete="off"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
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
    </Fragment>
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
