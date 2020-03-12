import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Moment from "react-moment";
import { toRupiah } from "indo-formatter";
import { Redirect, Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { BASE_URL } from "../config/constants";
import Header from "../components/header";
import { getOrderById, updateProofOrder } from "../_actions/order";

const App = ({ setdata, order, getOrderById, updateProofOrder }) => {
  const { dataById, loading } = order;
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const id = setdata.orderid;

  useEffect(() => {
    if (id !== 0) {
      getOrderById(id);
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    updateProofOrder(file, id);
    history.push("/myticket");
  };

  if (loading) return <>NOW LOADING</>;

  if (setdata.orderid === 0) return <Redirect to="myticket" />;

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
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="file"
              id="uprekening"
              onChange={e => {
                setFile(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {preview !== null ? (
              <img src={preview} alt="" />
            ) : dataById?.transferProof == "default.jpg" ? (
              <img src="./default.jpg" alt="" />
            ) : (
              <img src={BASE_URL + dataById?.transferProof} />
            )}

            {dataById?.transferProof == "default.jpg" ? (
              <label htmlFor="uprekening">upload payment proof</label>
            ) : (
              <label>upload payment proof</label>
            )}

            {preview !== null ? (
              <button type="submit">Bayar Sekarang</button>
            ) : (
              <button type="submit" disabled>
                Bayar Sekarang
              </button>
            )}
          </Form>
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
    getOrderById: value => dispatch(getOrderById(value)),
    updateProofOrder: (file, id) => dispatch(updateProofOrder(file, id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
