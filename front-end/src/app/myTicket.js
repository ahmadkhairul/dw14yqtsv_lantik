import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Moment from "react-moment";

import Header from "../components/header";
const App = ({ order }) => {
  const { dataByUser, loading } = order;

  if (loading) return <>NOW LOADING</>;

  return (
    <Container fluid>
      <Header />
      <h1 className="title">Tiket Saya</h1>
      {dataByUser.map((detail, index) => (
        <div className="myticket" key={detail.id} index={index}>
          <h1>Land Tick</h1>
          <h2>Kereta Api</h2>
          <h3>
            <b>
              <Moment format="dddd">{detail.ticket.dateStart}</Moment>,
            </b>
            &nbsp;
            <Moment format="DD MMMM YYYY">{detail.ticket.dateStart}</Moment>
          </h3>
          <h4>{detail.ticket.name}</h4>
          <h5>{detail.ticket.classType}</h5>
          {detail.status === "Approved" ? (
            <span className="approved"> {detail.status}</span>
          ) : (
            <span className="pending">{detail.status}</span>
          )}
          <img className="ticket" src="./ticket.png" alt="" />
          <table className="tbl-1">
            <thead>
              <tr>
                <th>
                  <Moment format="HH:mm">{detail.ticket.startTime}</Moment>
                </th>
                <th>
                  {detail.ticket.start.city} ({detail.ticket.start.code})
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Moment format="DD MMMM YYYY">
                    {detail.ticket.startTime}
                  </Moment>
                </td>
                <td>Stasiun {detail.ticket.start.name}</td>
              </tr>
            </tbody>
          </table>
          <table className="tbl-2">
            <thead>
              <tr>
                <th>
                  <Moment format="HH:mm">{detail.ticket.arrivalTime}</Moment>
                </th>
                <th>
                  {detail.ticket.destination.city} (
                  {detail.ticket.destination.code})
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Moment format="DD MMMM YYYY">
                    {detail.ticket.arrivalTime}
                  </Moment>
                </td>
                <td>Stasiun {detail.ticket.destination.name}</td>
              </tr>
            </tbody>
          </table>
          <table className="tbl-3">
            <thead>
              <tr>
                <th>No. Tanda Pengenal</th>
                <th>Nama Pengenal</th>
                <th>No. Handphone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>31175033003970001</td>
                <td>{detail.user.name}</td>
                <td>{detail.user.phone}</td>
                <td>{detail.user.email}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          {detail.status === "Approved" ? (
            <img className="barcode" src="./barcode.png" alt="" />
          ) : (
            <button>Bayar Sekarang</button>
          )}
        </div>
      ))}
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    order: state.order
  };
}

export default connect(mapStateToProps)(App);
