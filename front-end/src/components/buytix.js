import React from "react";
import { Button, Table, Row, Col, Nav, Tab, Form } from "react-bootstrap";

export default function App() {
  return (
    <Row className="row-tab-container">
      <Col sm={2}>
        <Nav>
          <Nav.Item>
            <Nav.Link eventKey="first">Tiket Kereta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Tiket Pesawat</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={10}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <h5>Tiket Kereta Api</h5>
            <Form>
              <Row>
                <Col sm={5}>
                  <Table>
                    <tbody>
                      <tr>
                        <td colSpan="2">
                          <Form.Label>Asal</Form.Label>
                          <Form.Control type="text" name="asal" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Label>Tanggal berangkat</Form.Label>
                          <Form.Control type="date" name="tanggal" />
                        </td>
                        <td>
                          <Form.Check type="checkbox" label="Pulang Pergi" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col sm={1}>
                  <br />
                  <br />
                  <button>
                    <img src="/switch.png" alt="" />
                  </button>
                </Col>
                <Col sm={5}>
                  <Table>
                    <tbody>
                      <tr>
                        <td colSpan="3">
                          <Form.Label>Tujuan</Form.Label>
                          <Form.Control type="text" name="tujuan" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Label>Dewasa</Form.Label>
                          <Form.Control type="number" name="cnt-adlt" />
                        </td>
                        <td>
                          <Form.Label>Bayi</Form.Label>
                          <Form.Control type="number" name="cnt-bby" />
                        </td>
                        <td>
                          <Button type="submit">Cari</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              {/* <Row>
                <Col sm={5}>
                  <Form.Label>Asal</Form.Label>
                  <Form.Control type="text" name="asal" />
                  <Row>
                    <Col sm={6}>
                      <Form.Label>Tanggal berangkat</Form.Label>
                      <input type="date" />
                    </Col>
                    <Col sm={6}>
                      <Form.Check type="checkbox" label="Pulang Pergi" />
                    </Col>
                  </Row>
                </Col>
                <Col sm={1}>
                  <button>
                    <img src="/switch.png" alt="" />
                  </button>
                </Col>
                <Col sm={5}>
                  <Form.Label>Tujuan</Form.Label>
                  <Form.Control type="text" name="asal" />
                  <Row>
                    <Col sm={4}>
                      <Form.Label>Dewasa</Form.Label>
                      <Form.Control type="number" name="cnt-adlt" />
                    </Col>
                    <Col sm={4}>
                      <Form.Label>Bayi</Form.Label>
                      <Form.Control type="number" name="cnt-bby" />
                    </Col>
                    <Col sm={4}>
                      <Button type="submit">Cari</Button>
                    </Col>
                  </Row>
                </Col>
              </Row> */}
            </Form>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <h5>Under Construction</h5>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  );
}
