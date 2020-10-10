import React, { useState } from "react";
import { userSubmit } from "../datalayer";
import { TextField, Button, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import EventSeatIcon from "@material-ui/icons/EventSeat";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
    maxWidth: "50vw",
  },
}));

function UserInput() {
  const [seat, setSeat] = useState("");
  const [request, setRequest] = useState("");

  const submit = () => {
    if (request.length === 0 || seat.length === 0) {
      alert("Fill in all information");
      return;
    }

    userSubmit(request, seat);
  };

  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Seat"
        onChange={(e) => setSeat(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EventSeatIcon />
            </InputAdornment>
          ),
        }}
        inputProps={{ maxLength: 3 }}
      />
      <TextField
        id="outlined-multiline-static"
        label="What's your request?"
        multiline
        rows={4}
        placeholder="Can I get some water?"
        variant="outlined"
        onChange={(e) => setRequest(e.target.value)}
      />
      <Button onClick={submit} variant="contained" color="primary">
        Submit
      </Button>
    </>
  );
}

export default UserInput;
