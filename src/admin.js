import React, { useState } from "react";
import TravelRequests from "./Components/traveler-requests";
import { TextField, Button } from "@material-ui/core";
import "./App.css";
function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [code, setCode] = useState("");

  return !isAdmin ? (
    <>
      <div className="header">
        <h1 className="american">American Airlines</h1>
      </div>
      <div className="admin">
        <h1>Login</h1>
        <TextField
          id="outlined-multiline-static"
          label="What's the code?"
          placeholder="Enter Code"
          variant="outlined"
          onChange={(e) => setCode(e.target.value)}
        />
        <Button
          onClick={() => setIsAdmin(code === "1234!")}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
    </>
  ) : (
    <TravelRequests />
  );
}

export default Admin;
