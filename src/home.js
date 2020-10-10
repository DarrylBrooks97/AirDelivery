import React from "react";
import "./App.css";
import UserInput from "./Components/user-input";

function Home() {
  return (
    <div className="App">
      <div className="header">
        <div className="american">American</div>
      </div>
      <div className="content">
        <UserInput />
      </div>
    </div>
  );
}

export default Home;
