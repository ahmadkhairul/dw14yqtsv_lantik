import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import moment from "moment";

import { connect } from "react-redux";
import { authUser } from "./_actions/auth";
import { searchTicket } from "./_actions/ticket";
import { getStation } from "./_actions/station";

import Index from "./app/index";
import MyTicket from "./app/myTicket";
import MyInvoice from "./app/myInvoice";
import TransactionList from "./app/transactionList";
import AddTicket from "./app/addTicket";

import "./App.css";

const App = ({ auth, ticket, authUser, searchTicket, getStation }) => {
  const value = {
    destination: "",
    start: "",
    dateStart: moment().format("YYYY-MM-DD"),
    adult: 1
  };

  useEffect(() => {
    authUser();
    getStation();
    searchTicket(value);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { loading: loadAuth } = auth;
  const { loading: loadTicket, error: errorTicket } = ticket;

  const loading = loadAuth || loadTicket;
  if (loading) return <h2>NOW LOADING</h2>;

  if (errorTicket) return <h2>ERROR OCCURED</h2>;

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/myinvoice">
            <MyInvoice />
          </Route>
          <Route path="/myticket">
            <MyTicket />
          </Route>
          <Route path="/transactionlist">
            <TransactionList />
          </Route>
          <Route path="/addticket">
            <AddTicket />
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
    auth: state.auth,
    ticket: state.ticket
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authUser: () => dispatch(authUser()),
    searchTicket: value => dispatch(searchTicket(value)),
    getStation: () => dispatch(getStation())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
