import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Register from "../components/register";
import Login from "../components/login";
import { delUser } from "../_actions/auth";

const App = ({ auth, delUser }) => {
  const { data, isLogin } = auth;

  const handleLogout = async () => {
    localStorage.removeItem("token");
    await delUser();
  };

  if (isLogin === false) {
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
            <hr />
            <Link to="/">
              <p onClick={handleLogout}>Logout</p>
            </Link>
          </div>
        ) : (
          <div className="dropdown-content">
            <p>
              <Link to="transactionlist">List Transaksi</Link>
            </p>
            <p>
              <Link to="addticket">Ticket</Link>
            </p>
            <hr />
            <Link to="/">
              <p onClick={handleLogout}>Logout</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delUser: () => dispatch(delUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
