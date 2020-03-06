import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../_actions/user";
import Header from "../components/header";
import { Container } from "react-bootstrap";

const App = ({ user, getUser }) => {
  const { data, loading, error } = user;

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) return <h2>AN UNKNOWN ERROR OCCURED</h2>;

  if (loading) return <>NOW LOADING</>;

  return (
    <Container fluid>
      <Header />
      <h1 className="title">Invoice</h1>
      <div className="myinvoice">
        <div className="box1">
          <img src="./attention.png" alt="" />
          <p>
            Silakan melakukan pembayaran memalui M-Banking, E-Banking dan ATM Ke
            No.rek Yang Tertera <br />
            <br />
            <br />
            No.rek : 09812312312
          </p>
        </div>
        <div className="box2">
          <h1>Land Tick</h1>
          <table>
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
                <td>{data.name}</td>
                <td>081454132543</td>
                <td>{data.email}</td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
        <h1>Rincian Harga</h1>
        <div className="box3">
          <table>
            <thead>
              <tr>
                <th>Argo Wilis (Dewasa) x 1</th>
                <th>Rp. 250.000</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total</td>
                <td>
                  <b>Rp. 250.000</b>
                </td>
              </tr>
            </tbody>
          </table>
          <button>Bayar Sekarang</button>
          <img src="./rekening.jpg" />
          <label>upload payment proof</label>
        </div>
        <div className="box4">
          <div className="box">
            <h2>Kereta Api</h2>
            <h3>
              <b>Saturday</b>, 21 Februari 2020
            </h3>
            <img src="./barcode.png" />
          </div>
          <h4>Argo Wilis</h4>
          <h5>Eksekutif</h5>
          <table className="tbl-1">
            <thead>
              <tr>
                <th>05.00</th>
                <th>Jakarta (GMR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>21 Februari 2020</td>
                <td>Stasiun Gambir</td>
              </tr>
            </tbody>
          </table>
          <table className="tbl-2">
            <thead>
              <tr>
                <th>10.05</th>
                <th>Surabaya (SBY)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>21 Februari 2020</td>
                <td>Stasiun Surabaya</td>
              </tr>
            </tbody>
          </table>
          <img src="./ticket.png" />
        </div>
      </div>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
