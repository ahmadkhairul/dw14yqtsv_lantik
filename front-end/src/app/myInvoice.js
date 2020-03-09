import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Moment from "react-moment";
import { toRupiah } from "indo-formatter";

import Header from "../components/header";
import { getOrderById } from "../_actions/order";

const App = ({ setdata, order, getOrderById }) => {
  const { dataById, loading } = order;

  useEffect(() => {
    getOrderById(setdata.orderid);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <>NOW LOADING</>;

  //  console.log(dataById?.user?.name);

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
                <td>{dataById?.user?.name}</td>
                <td>{dataById?.user?.phone}</td>
                <td>{dataById?.user?.email}</td>
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
                <th>
                  {dataById?.ticket?.name} (Dewasa) x {dataById?.qty}
                </th>
                <th>{toRupiah(dataById?.ticket?.price)}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total</td>
                <td>
                  <b>{toRupiah(dataById?.totalPrice)}</b>
                </td>
              </tr>
            </tbody>
          </table>
          <button>Bayar Sekarang</button>
          <img src="./rekening.jpg" alt="" />
          <label>upload payment proof</label>
        </div>
        <div className="box4">
          <div className="box">
            <h2>Kereta Api</h2>
            <h3>
              <b>
                <Moment format="dddd">{dataById?.ticket?.dateStart}</Moment>,
              </b>
              &nbsp;
              <Moment format="DD MMMM YYYY">
                {dataById?.ticket?.dateStart}
              </Moment>
            </h3>
            <img src="./barcode.png" alt="" />
          </div>
          <h4>{dataById?.ticket?.name}</h4>
          <h5>{dataById?.ticket?.classType}</h5>
          <table className="tbl-1">
            <thead>
              <tr>
                <th>
                  <Moment format="HH:mm">{dataById?.ticket?.startTime}</Moment>
                </th>
                <th>
                  {dataById?.ticket?.start?.city} (
                  {dataById?.ticket?.start?.code})
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Moment format="DD MMMM YYYY">
                    {dataById?.ticket?.startTime}
                  </Moment>
                </td>
                <td>Stasiun {dataById?.ticket?.start?.name}</td>
              </tr>
            </tbody>
          </table>
          <table className="tbl-2">
            <thead>
              <tr>
                <th>
                  <Moment format="HH:mm">
                    {dataById?.ticket?.arrivalTime}
                  </Moment>
                </th>
                <th>
                  {dataById?.ticket?.destination?.city} (
                  {dataById?.ticket?.destination?.code})
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Moment format="DD MMMM YYYY">
                    {dataById?.ticket?.arrivalTime}
                  </Moment>
                </td>
                <td>Stasiun {dataById?.ticket?.destination?.name}</td>
              </tr>
            </tbody>
          </table>
          <img src="./ticket.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    order: state.order,
    setdata: state.setdata
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrderById: value => dispatch(getOrderById(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
