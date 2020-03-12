import React, { Fragment, useState, useReducer } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { postRegister } from "../_actions/auth";

const App = ({ register, postRegister }) => {
  const [rgShow, setRgShow] = useState(false);
  const { loading, error } = register;
  const [value, setValue] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstname: "",
      username: "",
      password: "",
      email: "",
      gender: "",
      address: "",
      phone: ""
    }
  );

  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setValue({ [name]: newValue });
  };

  const {
    firstname,
    username,
    email,
    password,
    gender,
    address,
    phone
  } = value;

  const handleSubmit = async event => {
    event.preventDefault();
    await postRegister({
      firstname,
      username,
      email,
      password,
      gender,
      address,
      phone
    });
  };

  const errMessage = "";

  if (error === true) {
    const errMessage = "<h6>Username or Password Wrong</h6>";
  }

  if (loading === true) {
    const errMessage = "<h6>Now Loading</h6>";
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
          <Modal.Title>REGISTER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errMessage}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="firstname"
                value={firstname}
                autoComplete="off"
                placeholder="Your Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="username"
                value={username}
                autoComplete="off"
                placeholder="Your Username"
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
                as="select"
                onChange={handleChange}
                name="gender"
                value={gender}
                autoComplete="off"
                placeholder="Gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
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
