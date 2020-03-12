import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Form } from "react-bootstrap";
import moment from "moment";
import { Redirect } from "react-router-dom";

import { addTicket } from "../_actions/ticket";
import Header from "../components/header";

const App = ({ auth, station, addTicket }) => {
  const { isLogin, error, loading } = auth;
  const { data } = station;
  const [name, setName] = useState("");
  const [classType, setClassType] = useState("Ekonomi");
  const [dateStart, setDateStart] = useState(
    moment().format("YYYY-MM-DDTHH:mm")
  );
  const [startStation, setStartStation] = useState("");
  const [startTime, setStartTime] = useState(
    moment().format("YYYY-MM-DDTHH:mm")
  );
  const [destinationStation, setDestinationStation] = useState("");
  const [arrivalTime, setArrivalTime] = useState(
    moment().format("YYYY-MM-DDTHH:mm")
  );
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const value = {
    name,
    classType,
    dateStart,
    startStation,
    startTime,
    destinationStation,
    arrivalTime,
    price,
    qty
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTicket(value);
    console.log(value);
  };

  if (error) return <h2>AN UNKNOWN ERROR OCCURED</h2>;

  if (loading) return <h2>NOW LOADING</h2>;

  if (isLogin == false) return <Redirect to="/" />;

  return (
    <Container fluid>
      <Header />
      <h1 className="title">Add Ticket</h1>
      <div className="addticket">
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Nama Kereta</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              autoComplete="off"
              onChange={event => {
                setName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kelas Kereta</Form.Label>
            <Form.Control
              as="select"
              name="classType"
              value={classType}
              onChange={event => {
                setClassType(event.target.value);
              }}
            >
              <option value="Ekonomi">Ekonomi</option>
              <option value="Bisnis">Bisnis</option>
              <option value="Eksekutif">Eksekutif</option>
              <option value="Premium">Premium</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Tanggal Penjualan</Form.Label>
            <input
              className="form-control"
              type="datetime-local"
              name="dateStart"
              min={moment().format("YYYY-MM-DDTHH:mm")}
              value={dateStart}
              onChange={event => {
                setDateStart(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Stasiun Keberangkatan</Form.Label>
            <select
              className="custom-select"
              name="startStation"
              value={startStation}
              onChange={event => {
                setStartStation(event.target.value);
              }}
            >
              <option value=""></option>
              {data.map((item, index) => (
                <option key={item.id} index={index} value={item.id}>
                  {item.city} - {item.name}
                </option>
              ))}
            </select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Tanggal Keberangkatan</Form.Label>
            <input
              className="form-control"
              type="datetime-local"
              name="startTime"
              min={moment().format("YYYY-MM-DDTHH:mm")}
              value={startTime}
              onChange={event => {
                setStartTime(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Stasiun Tujuan</Form.Label>
            <Form.Control
              as="select"
              name="destinationStation"
              value={destinationStation}
              onChange={event => {
                setDestinationStation(event.target.value);
              }}
            >
              <option value=""></option>
              {data.map((item, index) => (
                <option key={item.id} index={index} value={item.id}>
                  {item.city} - {item.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Tanggal Sampai</Form.Label>
            <input
              className="form-control"
              type="datetime-local"
              name="arrivalTime"
              min={moment().format("YYYY-MM-DDTHH:mm")}
              value={arrivalTime}
              onChange={event => {
                setArrivalTime(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Harga Ticket</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={price}
              onChange={event => {
                setPrice(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Jumlah</Form.Label>
            <Form.Control
              type="number"
              name="qty"
              value={qty}
              onChange={event => {
                setQty(event.target.value);
              }}
            />
          </Form.Group>
          <button type="submit" className="btn-modal">
            Simpan
          </button>
        </Form>
      </div>
    </Container>
  );
};

// export default App;
function mapStateToProps(state) {
  return {
    auth: state.auth,
    station: state.station
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTicket: value => dispatch(addTicket(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
