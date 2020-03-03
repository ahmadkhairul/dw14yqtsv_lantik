import React, { Fragment, useState, useReducer } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { postRegister } from "../_actions/auth";

const App = ({ register, postRegister }) => {
  const [rgShow, setRgShow] = useState(false);
  const { data, loading, error } = register;
  const [value, setValue] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      password: "",
      email: "",
      address: "",
      phone: ""
    }
  );

  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setValue({ [name]: newValue });
  };

  const { username, email, password, address, phone } = value;

  function handleSubmit(event) {
    event.preventDefault();
    postRegister({ username, email, password, address, phone });
  }

  return (
    <Fragment>
      <button className="btn-register" onClick={() => setRgShow(true)}>
        <label>Daftar</label>
      </button>
      <Modal
        size="sm"
        show={rgShow}
        onHide={() => setRgShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span>REGISTER</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error === true ? <h6>Email Already Taken</h6> : <></>}
          {loading === true ? <h6>Now Loading</h6> : <></>}
          {data.token != null ? <>{<Redirect to="/profile" />}</> : <></>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="username"
                value={username}
                autoComplete="off"
                placeholder="Your Name"
              />
            </Form.Group>
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
            <Form.Group>
              <Form.Control
                type="number"
                onChange={handleChange}
                name="phone"
                value={phone}
                autoComplete="off"
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                onChange={handleChange}
                name="address"
                value={address}
                autoComplete="off"
                placeholder="Address"
                rows="3"
              />
            </Form.Group>
            <Form.Group>
              <input type="file" name="photo" />
            </Form.Group>
            <Button className="btn-modal" type="submit">
              Register
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
    register: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postRegister: value => dispatch(postRegister(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
