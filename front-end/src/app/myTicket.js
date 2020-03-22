import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Moment from "react-moment";
import { Redirect, Link } from "react-router-dom";

import Header from "../components/header";
import { getOrdersByUser } from "../_actions/order";
import { updateOrderId } from "../_actions/setdata";
import ETicket from "../components/eTicket";

const App = ({ auth, order, getOrdersByUser, updateOrderId }) => {
  const { dataByUser, loading } = order;
  const { isLogin } = auth;

  useEffect(() => {
    getOrdersByUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <>NOW LOADING</>;

  if (isLogin == false) return <Redirect to="/" />;

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
            <>
              <img className="barcode" src="./barcode.png" alt="" />
              <ETicket detail={detail} />
            </>
          ) : (
            <Link to="myinvoice">
              <button onClick={() => updateOrderId(detail.id)}>
                Bayar Sekarang
              </button>
            </Link>
          )}
        </div>
      ))}
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    order: state.order,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrdersByUser: () => dispatch(getOrdersByUser()),
    updateOrderId: value => dispatch(updateOrderId(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
