import React from "react";
import { requests } from "../datalayer";

class UserInput extends React.Component {
  Submit = (e) => {
    const userRequest = new requests();
    var request = document.getElementById("request").value;
    var seat = document.getElementById("seat").value;

    if (request.length === 0 || seat.length === 0) {
      alert("Fill in all information");
      return;
    }

    userRequest.userSubmit(request, seat);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.Submit}>
          <input placeholder="Seat Number" id="seat"></input>
          <input placeholder="Request" id="request"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default UserInput;
