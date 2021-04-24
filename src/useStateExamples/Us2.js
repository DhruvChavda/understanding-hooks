import React, { useState } from "react";
import { Button, ButtonGroup, Paper, Typography } from "@material-ui/core";

// ALWAYS UPDATE USING PREVIOUS STATE

function Us2() {
  const [cnt, setCnt] = useState(0);

  function plosFive() {
    for (var i = 0; i < 5; i++) {
      setCnt((x) => x + 1);
    }
  }

  return (
    <React.Fragment>
      <Paper square elevation={0}>
        <Typography>{cnt}</Typography>
      </Paper>

      <ButtonGroup color="primary" variant="contained">
        <Button onClick={()=>{setCnt((x) => x + 1)}}>+ Counter</Button>
        <Button onClick={()=>{setCnt((x) => x - 1)}}>- Counter</Button>
        <Button onClick={plosFive}>+5 Counter</Button>
      </ButtonGroup>
    </React.Fragment>
  );
}

export default Us2;
