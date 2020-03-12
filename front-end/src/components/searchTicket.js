import React, { useState } from "react";
import { Table, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import moment from "moment";
import { connect } from "react-redux";

import { searchTicket } from "../_actions/ticket";
import { updateQuantity } from "../_actions/setdata";

const App = ({ station, searchTicket, updateQuantity }) => {
  const [destination, setDestination] = useState("");
  const [start, setStart] = useState("");
  const [adult, setAdult] = useState(1);
  const [dateStart, setDateStart] = useState(moment().format("YYYY-MM-DD"));

  const {
    data: dataStation,
    loading: loadStation,
    error: errorStation
  } = station;

  const handleClick = event => {
    event.preventDefault();
    setDestination(start);
    setStart(destination);
  };

  const value = { destination, start, dateStart, adult };

  const handleSubmit = event => {
    event.preventDefault();
    searchTicket(value);
  };

  if (loadStation) return <h1>Now loading</h1>;

  if (errorStation) return <h1>Station data not found</h1>;

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
              <h5>Tiket Kereta Api</h5>
              <Form onSubmit={e => handleSubmit(e)}>
                <Row>
                  <Col sm={5}>
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <Form.Label>Asal</Form.Label>
                            <Form.Control
                              as="select"
                              name="start"
                              value={start}
                              onChange={event => {
                                setStart(event.target.value);
                              }}
                            >
                              <option value=""></option>
                              {dataStation.map((item, index) => (
                                <option
                                  key={item.id}
                                  index={index}
                                  value={item.id}
                                >
                                  {item.city} - {item.name}
                                </option>
                              ))}
                            </Form.Control>
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
                              as="select"
                              name="destination"
                              value={destination}
                              onChange={event => {
                                setDestination(event.target.value);
                              }}
                            >
                              <option value=""></option>
                              {dataStation.map((item, index) => (
                                <option
                                  key={item.id}
                                  index={index}
                                  value={item.id}
                                >
                                  {item.city} - {item.name}
                                </option>
                              ))}
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Label>Jumlah Tiket</Form.Label>
                            <Form.Control
                              as="select"
                              name="adult"
                              value={adult}
                              onChange={event => {
                                setAdult(event.target.value);
                                updateQuantity(event.target.value);
                              }}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </Form.Control>
                          </td>
                          <td colSpan="2">
                            <button type="submit">Cari</button>
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
    ticket: state.ticket,
    station: state.station
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchTicket: value => dispatch(searchTicket(value)),
    updateQuantity: value => dispatch(updateQuantity(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
