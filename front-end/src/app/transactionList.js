import React from "react";
import { connect } from "react-redux";
import Header from "../components/header";
import { Container } from "react-bootstrap";
import Detail from "../components/detailTransaction";
import Edit from "../components/editTransaction";
import Destroy from "../components/deleteTransaction";

const App = ({ order }) => {
  const { data: dataOrder, loading: loadOrder, error: errorOrder } = order;

  if (errorOrder) return <h2>AN UNKNOWN ERROR OCCURED</h2>;

  if (loadOrder) return <h2>NOW LOADING</h2>;

  return (
    <Container fluid>
      <Header />
      <h1 className="title">List Transaksi</h1>
      <div className="transaction">
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
    order: state.order
  };
}

export default connect(mapStateToProps)(App);
