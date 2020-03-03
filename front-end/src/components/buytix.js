import React from "react";
import { Table, Row, Col, Nav, Tab, Form } from "react-bootstrap";

export default function App() {
  return (
    <div className="buy-tix">
      <Row>
        <Col sm={2}>
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="first">
                <label>Tiket Kereta</label>
              </Nav.Link>
              <Nav.Link eventKey="second">
                <label>Tiket Pesawat</label>
              </Nav.Link>
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
                    <button className="switch">
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
                            <button type="submit">
                              <label>Cari</label>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h5>Tiket Pesawat</h5>
              <hr />
              <h5>Fitur masih belum tersedia</h5>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </div>
  );
}
