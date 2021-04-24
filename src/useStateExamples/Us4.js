import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

// UseState on Array
// Spread Operator is used to keep previous values and update any value
// used 2 useStates

function Us4() {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState("");

  function addItem() {
    setItems([...items, { id: items.length, value: val }]);
    setVal("");
  }

  return (
    <React.Fragment>
      <TextField
        id="list-inp"
        variant="outlined"
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
      <Button variant="contained" color="primary" onClick={addItem}>
        Add it!
      </Button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Us4;
