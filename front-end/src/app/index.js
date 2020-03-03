import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTicket } from "../_actions/ticket";
import Banner from "../components/banner";
import Header from "../components/header";
import BuyTix from "../components/buytix";
import { ToTime } from "../middleware/dateTimeChanger";
import { Container, Tab, Table } from "react-bootstrap";

const App = ({ ticket, getTicket }) => {
  const { data, loading, error } = ticket;

  useEffect(() => {
    getTicket();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) return <h2>AN UNKNOWN ERROR OCCURED</h2>;

  if (loading) return <>NOW LOADING</>;

  console.log(data);

  return (
    <Container fluid>
      <Header />
      <Banner />
      <Container>
        <Tab.Container defaultActiveKey="first">
          <BuyTix />
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
            {data.map((item, index) => {
              return (
                <tr>
                  <td>
                    <h5>{item.name}</h5>
                    <h6>{item.classType}</h6>
                  </td>
                  <td>
                    <h5>{ToTime(item.startTime)}</h5>
                    <h6>{item.startStation}</h6>
                  </td>
                  <td>
                    <h5>{ToTime(item.arrivalTime)}</h5>
                    <h6>{item.destinationStation}</h6>
                  </td>
                  <td>
                    <h5>5j 05m</h5>
                  </td>
                  <td>
                    <h5>Rp. {item.price}</h5>
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
    getTicket: () => dispatch(getTicket())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
