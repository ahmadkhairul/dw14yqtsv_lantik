import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../_actions/user";

const App = ({ user, getUser }) => {
  const { data, loading, error } = user;

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) return <h2>AN UNKNOWN ERROR OCCURED</h2>;

  if (loading) return <>NOW LOADING</>;

  console.log(data);

  return <>Nama : {data.username}</>;
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
