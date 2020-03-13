import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { getOrders, getSortOrder } from "../_actions/order";

import Header from "../components/header";
import Detail from "../components/detailTransaction";
import Edit from "../components/editTransaction";
import Destroy from "../components/deleteTransaction";

const App = ({ auth, order, getOrders, getSortOrder }) => {
  const { data: dataOrder, loading: loadOrder, error: errorOrder } = order;
  const [dataStatus, setDataStatus] = useState("Approved");

  const { isLogin } = auth;
  useEffect(() => {
    getOrders(dataStatus);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (errorOrder) return <h2>AN UNKNOWN ERROR OCCURED</h2>;

  if (loadOrder) return <h2>NOW LOADING</h2>;

  if (isLogin == false) return <Redirect to="/" />;

  const handleChange = evt => {
    const value = evt.target.value;
    setDataStatus(value);
    getSortOrder(value);
  };

  return (
    <Container fluid>
      <Header />
      <h1 className="title">List Transaksi</h1>
      <div className="transaction">
        <label>Status</label>
        <select name="dataStatus" value={dataStatus} onChange={handleChange}>
          <option value="All">All</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Cancel">Cancel</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Tiket</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataOrder.map((item, index) => (
              <tr key={index} index={index}>
                <td>{index + 1}</td>
                <td>{item.user.name}</td>
                <td>
                  {item.ticket.start.city} - {item.ticket.destination.city}
                </td>
                <td>{item.transferProof}</td>
                <td>{item.status}</td>
                <td>
                  <Detail detail={item} />
                  <Edit id={item.id} status={item.status} />
                  <Destroy id={item.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

// export default App;
function mapStateToProps(state) {
  return {
    order: state.order,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrders: () => dispatch(getOrders()),
    getSortOrder: value => dispatch(getSortOrder(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
