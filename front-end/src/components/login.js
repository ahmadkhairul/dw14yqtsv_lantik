import React, { Fragment, useState, useReducer } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { postLogin } from "../_actions/auth";

const App = ({ login, postLogin }) => {
  const [lgShow, setLgShow] = useState(false);
  const { data, loading, error } = login;
  const [value, setValue] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: ""
    }
  );

  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setValue({ [name]: newValue });
  };

  const { email, password } = value;

  function handleSubmit(event) {
    event.preventDefault();
    postLogin({ email, password });
  }

  return (
    <Fragment>
      <Button variant="outline-primary" onClick={() => setLgShow(true)}>
        Login
      </Button>
      <Modal
        size="sm"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Login</span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {error === true ? <h6>Email or Password Wrong</h6> : <></>}
          {loading === true ? <h6>Now Loading</h6> : <></>}
          {data.token != null ? <>{<Redirect to="/profile" />}</> : <></>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="email"
                onChange={handleChange}
                name="email"
                value={email}
                autoComplete="off"
                placeholder="youremail@mail.com"
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
            <Button type="submit">Login</Button>
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
