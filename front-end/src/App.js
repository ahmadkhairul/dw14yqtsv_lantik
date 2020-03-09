import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import moment from "moment";

import { connect } from "react-redux";
import { getUser } from "./_actions/user";
import { searchTicket } from "./_actions/ticket";

import Index from "./app/index";
import MyTicket from "./app/myTicket";
import MyInvoice from "./app/myInvoice";
import TransactionList from "./app/transactionList";

import "./App.css";

const App = ({ user, ticket, getUser, searchTicket }) => {
  const value = {
    destination: "",
    start: "",
    dateStart: moment().format("YYYY-MM-DD"),
    adult: 1
  };

  useEffect(() => {
    getUser();
    searchTicket(value);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { loading: loadUser, data: dataUser } = user;
  const { loading: loadTicket, error: errorTicket } = ticket;

  const loading = loadUser || loadTicket;
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
    ticket: state.ticket
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser()),
    searchTicket: value => dispatch(searchTicket(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
