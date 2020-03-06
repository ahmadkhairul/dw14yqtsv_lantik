import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { getUser } from "../_actions/user";
import Header from "../components/header";
import { Container } from "react-bootstrap";
import Detail from "../components/detailTransaction";
import Edit from "../components/editTransaction";
import Destroy from "../components/deleteTransaction";
const App = () => {
  // const { data, loading, error } = user;

  // useEffect(() => {
  //   getUser();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // if (error) return <h2>AN UNKNOWN ERROR OCCURED</h2>;

  // if (loading) return <>NOW LOADING</>;

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
            <tr>
              <td>1</td>
              <td>Anto</td>
              <td>Jakarta - Surabaya</td>
              <td>buktitransfer.jpg</td>
              <td>Approved</td>
              <td>
                <Detail />
                <Edit />
                <Destroy />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Anto</td>
              <td>Jakarta - Surabaya</td>
              <td>buktitransfer.jpg</td>
              <td>Approved</td>
              <td>
                <Detail />
                <Edit />
                <Destroy />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default App;
// function mapStateToProps(state) {
//   return {
//     user: state.user
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     getUser: () => dispatch(getUser())
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
