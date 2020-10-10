import React, { useState } from "react";
import TravelRequests from "./Components/traveler-requests";
import { TextField, Button } from "@material-ui/core";
function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [code, setCode] = useState("");

  return !isAdmin ? (
    <>
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
    </>
  ) : (
    <TravelRequests />
  );
}

export default Admin;
