import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Register from "../components/register";
import Login from "../components/login";

const App = ({ user }) => {
  const { data, error } = user;

  function handleLogout() {
    localStorage.removeItem("token");
  }

  if (error) {
    return (
      <div className="menu">
        <label className="brand">Land Tick</label>
        <span>
          <Register />
        </span>
        <span>
          <Login />
        </span>
      </div>
    );
  }

  if (data) {
    return (
      <div className="menu">
        <label>Land Tick</label>
        <div className="dropdown">
          {data.name} &nbsp;
          <img src="./profile.png" alt="avatar" />
          {data.level === "User" ? (
            <div className="dropdown-content">
              <p>
                <Link to="myticket">Ticket Saya</Link>
              </p>
              <p>
                <Link to="myinvoice">Payment</Link>
              </p>
              <hr />
              <p onClick={handleLogout}>Logout</p>
            </div>
          ) : (
            <div className="dropdown-content">
              <p>
                <Link to="transactionlist">List Transaksi</Link>
              </p>
              <p>Ticket</p>
              <hr />
              <p onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(App);
