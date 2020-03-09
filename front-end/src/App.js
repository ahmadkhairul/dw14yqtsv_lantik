import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import moment from "moment";

import { connect } from "react-redux";
import { getOrders, getOrderById } from "./_actions/order";
import { getOrdersByUser } from "./_actions/order";
import { getUser } from "./_actions/user";
import { getStation } from "./_actions/station";
import { searchTicket } from "./_actions/ticket";

import Index from "./app/index";
import MyTicket from "./app/myTicket";
import MyInvoice from "./app/myInvoice";
import TransactionList from "./app/transactionList";

import "./App.css";

const App = ({
  ticket,
  user,
  order,
  station,
  getOrders,
  getUser,
  getStation,
  searchTicket,
  getOrdersByUser,
  getOrderById
}) => {
  const value = {
    destination: "",
    start: "",
    dateStart: moment().format("YYYY-MM-DD"),
    adult: 1
  };
  console.log(order);

  useEffect(() => {
    getUser();
    getOrders();
    getStation();
    searchTicket(value);
    getOrdersByUser();
    getOrderById(1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { loading: loadUser, data: dataUser } = user;
  const { loading: loadTicket, error: errorTicket } = ticket;
  const { loading: loadOrder } = order;
  const { loading: loadStation } = station;

  const loading = loadUser || loadTicket || loadOrder || loadStation;
  if (loading) return <h2>NOW LOADING</h2>;

  if (errorTicket) return <h2>ERROR OCCURED</h2>;

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/myinvoice">
            {dataUser != null ? <MyInvoice /> : <Redirect to="/" />}
          </Route>
          <Route path="/myticket">
            {dataUser != null ? <MyTicket /> : <Redirect to="/" />}
          </Route>
          <Route path="/transactionlist">
            {dataUser != null ? <TransactionList /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    order: state.order,
    station: state.station,
    ticket: state.ticket
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser()),
    getOrders: () => dispatch(getOrders()),
    getStation: () => dispatch(getStation()),
    searchTicket: value => dispatch(searchTicket(value)),
    getOrdersByUser: () => dispatch(getOrdersByUser()),
    getOrderById: id => dispatch(getOrderById(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
