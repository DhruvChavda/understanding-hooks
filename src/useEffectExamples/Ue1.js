import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";

// useEffect Example
// useEffect Renders everytime a component is rendered

function Ue1() {
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    if (cnt === 1) {
      document.title = `${cnt} time clicked!`;
    } else {
      document.title = `${cnt} times clicked!`;
    }
  });

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Adder
      </Typography>
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

export default Ue1;
