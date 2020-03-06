import React, { useState } from "react";
import { Table, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { searchTicket } from "../_actions/ticket";
import moment from "moment";

const App = ({ ticket, searchTicket }) => {
  const [destination, setDestination] = useState("");
  const [start, setStart] = useState("");
  const [baby, setBaby] = useState("");
  const [adult, setAdult] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [dateStart, setDateStart] = useState(moment().format("YYYY-MM-DD"));

  const handleClick = event => {
    event.preventDefault();
    setDestination(start);
    setStart(destination);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (adult >= baby) {
      const qty = adult;
      searchTicket({ destination, start, dateStart, qty });
    } else if (baby > adult) {
      setErrMessage("Jumlah bayi tidak boleh melebihi jumlah orang dewasa");
    } else {
      setErrMessage("");
    }
  };

  return (
    <div className="buy-tix">
      <Row>
        <Col sm={2}>
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="first">
                <label>Tiket Kereta</label>
              </Nav.Link>
              <Nav.Link eventKey="second">
                <label>Tiket Pesawat</label>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h5>
                Tiket Kereta Api{" "}
                <label style={{ color: "red" }}>{errMessage}</label>
              </h5>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={5}>
                    <Table>
                      <tbody>
                        <tr>
                          <td colSpan="2">
                            <Form.Label>Asal</Form.Label>
                            <Form.Control
                              type="text"
                              name="start"
                              autoComplete="off"
                              value={start}
                              onChange={event => {
                                setStart(event.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Label>Tanggal berangkat</Form.Label>
                            <Form.Control
                              type="date"
                              name="dateStart"
                              min={moment().format("YYYY-MM-DD")}
                              value={dateStart}
                              onChange={event => {
                                setDateStart(event.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <Form.Check
                              type="checkbox"
                              name="roundTrip"
                              label="Pulang Pergi"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col sm={1}>
                    <button className="switch" onClick={handleClick}>
                      <img src="/switch.png" alt="" />
                    </button>
                  </Col>
                  <Col sm={5}>
                    <Table>
                      <tbody>
                        <tr>
                          <td colSpan="3">
                            <Form.Label>Tujuan</Form.Label>
                            <Form.Control
                              type="text"
                              name="destination"
                              autoComplete="off"
                              value={destination}
                              onChange={event => {
                                setDestination(event.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Label>Dewasa</Form.Label>
                            <Form.Control
                              as="select"
                              name="adult"
                              value={adult}
                              onChange={event => {
                                setAdult(event.target.value);
                              }}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </Form.Control>
                          </td>
                          <td>
                            <Form.Label>Bayi</Form.Label>
                            <Form.Control
                              as="select"
                              name="baby"
                              value={baby}
                              onChange={event => {
                                setBaby(event.target.value);
                              }}
                            >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </Form.Control>
                          </td>
                          <td>
                            <button type="submit">
                              <label>Cari</label>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h5>Tiket Pesawat</h5>
              <hr />
              <h5>Fitur masih belum tersedia</h5>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ticket: state.ticket
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchTicket: value => dispatch(searchTicket(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
