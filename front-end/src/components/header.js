import React from "react";
import Register from "../components/register";
import Login from "../components/login";

function App() {
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

export default App;
