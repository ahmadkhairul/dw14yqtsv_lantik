import React, { useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { Container, Tab, Table } from "react-bootstrap";

import Banner from "../components/banner";
import Header from "../components/header";
import SearchTicket from "../components/searchTicket";
import AddTransaction from "../components/addTransaction";
import FailTransaction from "../components/failTransaction";
import { getStation } from "../_actions/station";

const getDuration = (timeA, timeB) => {
  var startTime = moment(timeA, "YYYY-MM-DD HH:mm:ss");
  var endTime = moment(timeB, "YYYY-MM-DD HH:mm:ss");
  var duration = moment.duration(endTime.diff(startTime));
  var hours = parseInt(duration.asHours());
  var minutes = parseInt(duration.asMinutes()) - hours * 60;

  return `${hours}J ${minutes}m`;
};

const App = ({ ticket, getStation }) => {
  const { data: dataTicket, loading: loadTicket, error: errorTicket } = ticket;

  useEffect(() => {
    getStation();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const token = localStorage.getItem("token");

  if (errorTicket) return <h2>AN UNKNOWN ERROR OCCURED</h2>;

  if (loadTicket) return <h2>NOW LOADING</h2>;

  return (
    <Container fluid>
      <Header />
      <Banner />
      <Container>
        <Tab.Container defaultActiveKey="first">
          <SearchTicket />
        </Tab.Container>
        <p></p>
        <Table className="table-ticket">
          <thead>
            <tr>
              <th>Nama Kereta</th>
              <th>Berangkat</th>
              <th>Tiba</th>
              <th>Durasi</th>
              <th>Harga Per Orang</th>
            </tr>
          </thead>
          <tbody>
            {dataTicket.map((item, index) => {
              return (
                <tr key={index} index={index}>
                  <td>
                    <h5>{item.name}</h5>
                    <h6>{item.classType}</h6>
                  </td>
                  <td>
                    <h5>
                      <Moment format="HH:mm">{item.startTime}</Moment>
                    </h5>
                    <h6>Stasiun {item.start.name}</h6>
                  </td>
                  <td>
                    <h5>
                      <Moment format="HH:mm">{item.arrivalTime}</Moment>
                    </h5>
                    <h6>Stasiun {item.destination.name}</h6>
                  </td>
                  <td>
                    <h5>{getDuration(item.startTime, item.arrivalTime)}</h5>
                  </td>
                  <td>
                    <h5>Rp. {item.price}</h5>
                  </td>
                  <td>
                    {token === null ? (
                      <FailTransaction />
                    ) : (
                      <AddTransaction data={item} />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    ticket: state.ticket
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStation: () => dispatch(getStation())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
