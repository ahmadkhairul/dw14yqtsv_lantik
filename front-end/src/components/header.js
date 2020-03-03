import React from "react";
import Register from "../components/register";
import Login from "../components/login";

function App() {
  return (
    <ul className="menu">
      <li>
        <div className="brand">Land Tick</div>
      </li>
      <li>
        <span>
          <Register />
        </span>
      </li>
      <li>
        <span>
          <Login />
        </span>
      </li>
    </ul>
  );
}

export default App;
