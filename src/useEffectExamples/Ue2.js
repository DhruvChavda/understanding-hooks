import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";

// useEffect Example
// useEffect Renders everytime a component is rendered
// To conditionally render, there is a second parameter in useEffect
// it's an array that will contains all the states and props to look for
// useEffect will now be rendered only when any one of those states is changed/modified

function Ue2() {
  const [cnt, setCnt] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Rendered again!!");
    if (cnt === 1) {
      document.title = `${cnt} time clicked!`;
    } else {
      document.title = `${cnt} times clicked!`;
    }
  }, [cnt]);

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Conditional Adder
      </Typography>
      <TextField
        id="Ue2-inp"
        label="RandomText"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setCnt((x) => x + 1);
        }}
      >
        {cnt}
      </Button>
    </React.Fragment>
  );
}

export default Ue2;
