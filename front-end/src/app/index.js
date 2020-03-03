import React from "react";
import Banner from "../components/banner";
import Header from "../components/header";
import BuyTix from "../components/buytix";
import { Container, Tab, Table } from "react-bootstrap";

const App = () => {
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
            <tr>
              <td>
                <h5>Argo Wilis</h5>
                <h6>Eksekutif</h6>
              </td>
              <td>
                <h5>05.00</h5>
                <h6>Gambir</h6>
              </td>
              <td>
                <h5>10.05</h5>
                <h6>Surabaya</h6>
              </td>
              <td>
                <h5>5j 05m</h5>
              </td>
              <td>
                <h5>250000</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Argo Wilis</h5>
                <h6>Eksekutif</h6>
              </td>
              <td>
                <h5>05.00</h5>
                <h6>Gambir</h6>
              </td>
              <td>
                <h5>10.05</h5>
                <h6>Surabaya</h6>
              </td>
              <td>
                <h5>5j 05m</h5>
              </td>
              <td>
                <h5>250000</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Argo Wilis</h5>
                <h6>Eksekutif</h6>
              </td>
              <td>
                <h5>05.00</h5>
                <h6>Gambir</h6>
              </td>
              <td>
                <h5>10.05</h5>
                <h6>Surabaya</h6>
              </td>
              <td>
                <h5>5j 05m</h5>
              </td>
              <td>
                <h5>250000</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Argo Wilis</h5>
                <h6>Eksekutif</h6>
              </td>
              <td>
                <h5>05.00</h5>
                <h6>Gambir</h6>
              </td>
              <td>
                <h5>10.05</h5>
                <h6>Surabaya</h6>
              </td>
              <td>
                <h5>5j 05m</h5>
              </td>
              <td>
                <h5>250000</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Argo Wilis</h5>
                <h6>Eksekutif</h6>
              </td>
              <td>
                <h5>05.00</h5>
                <h6>Gambir</h6>
              </td>
              <td>
                <h5>10.05</h5>
                <h6>Surabaya</h6>
              </td>
              <td>
                <h5>5j 05m</h5>
              </td>
              <td>
                <h5>250000</h5>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default App;
