import React from "react";
import Index from "./app/index";
import MyTicket from "./app/myTicket";
import MyInvoice from "./app/myInvoice";
import TransactionList from "./app/transactionList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
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
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
