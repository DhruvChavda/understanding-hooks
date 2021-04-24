import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";

// UseState on Object
// Spread Operator is used to keep previous values and update any value

function Us3() {
  const [name, setName] = useState({ fname: "", lname: "" });

  function fchange(event) {
    return setName({ ...name, fname: event.target.value });
  }

  function lchange(event) {
    return setName({ ...name, lname: event.target.value });
  }

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Hello! {name.fname} {name.lname}
      </Typography>
      <form>
        <TextField
          id="Fname"
          variant="outlined"
          label="FirstName"
          onChange={fchange}
        />
        <TextField
          id="Lname"
          variant="outlined"
          label="LastName"
          onChange={lchange}
        />
      </form>
    </React.Fragment>
  );
}

export default Us3;
