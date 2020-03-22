import React, { Fragment, useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import Moment from "react-moment";
import { toRupiah } from "indo-formatter";
import { BASE_URL } from "../config/constants";

const App = ({ detail }) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <Fragment>
      <img
        onClick={() => setLgShow(true)}
        className="eTicket"
        src="./printer.png"
        alt=""
      />
      <Modal
        className="detailTransaction"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>E - Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-1" src="./ticket.png" alt="" />
          <Row>
            <Col sm={3}>
              <h2>Kereta API</h2>
              <h3>
                <Moment format="dddd, DD MMMM YYYY">
                  {detail.ticket.dateStart}
                </Moment>
              </h3>
              <h4>{detail.ticket.name}</h4>
              <h5>{detail.ticket.classType}</h5>
              {/* <img className="img-3" src="./barcode.png" alt="" /> */}
            </Col>
            <Col sm={6}>
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
                      <Moment format="HH:mm">
                        {detail.ticket.arrivalTime}
                      </Moment>
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
            </Col>
            <Col sm={3}>
              <img className="img-2" src="./barcode.png" alt="" />
            </Col>
          </Row>
          <hr />
          <Row className="note">
            <Col sm={1}>
              <img src="./people.png" alt="" />
            </Col>
            <Col sm={3}>
              Tunjukkan e-ticket dan identitas para penumpang saat checkin
            </Col>
            <Col sm={1}>
              <img src="./caution.png" alt="" />
            </Col>
            <Col sm={3}>
              Check-in paling lambat 90 menit sebelum keberangkatan
            </Col>
            <Col sm={1}>
              <img src="./clock.png" alt="" />
            </Col>
            <Col sm={3}>Waktu tertera adalah waktu stasiun setempat</Col>
          </Row>
          <hr />
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
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default App;
