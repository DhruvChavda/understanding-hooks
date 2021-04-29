import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

// useEffect Example
// adding [] as second argument will make useEffect work only on 1st render 
// Cleanup function demonstration
// Same as componentWillUnmount() method

function Ue4() {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    console.log("Log at the time of initial render only");
  },[]);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setCnt((x) => x + 1);
        }}
      >
        {cnt}
      </Button>
    </React.Fragment>
  );
}

export default Ue4;
