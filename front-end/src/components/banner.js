import React from "react";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="banner">
      <Row>
        <Col sm>
          <h1>Selamat Pagi, Ticket Seekers</h1>
          <p>Ingin Pulkam dengan Good Deal?</p>
          <p>Masuk dan Daftar Sekarang !!</p>
        </Col>
        <Col>
          <img src="/promo.jpg" alt="promo" />;
        </Col>
      </Row>
    </div>
  );
}

export default App;
