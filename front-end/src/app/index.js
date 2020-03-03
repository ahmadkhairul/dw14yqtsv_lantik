import React from "react";
import Banner from "../components/banner";
import Header from "../components/header";
import BuyTix from "../components/buytix";
import { Container, Tab } from "react-bootstrap";

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Banner />
      <Container>
        <Tab.Container defaultActiveKey="first">
          <BuyTix />
        </Tab.Container>
      </Container>
    </Container>
  );
};

export default App;
