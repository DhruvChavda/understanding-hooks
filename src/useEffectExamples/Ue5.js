import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";

// cleanup function clears interval every time
// interval ID can be viewed in the console.log as it displays new ID everytime
// this is beacuse time is added in dependency array
// it changes and triggers return function as well as new setInterval
// DEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEP!!
// here we are using previous state as parameter in setTime which is a good practice
// if prev State was not used then it becomes mandatory to add time in dependency list to update it to new value
// You can try by these by removing time from dependency list OR prev state from setTime

function Ue5() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log("tick");
    const id = setInterval(() => {
      setTime((time) => time + 1);
      console.log("ticktock");
    }, 5000);
    return () => {
      console.log("Returned! "+ id);
      clearInterval(id);
    };
  }, [time]);
  return (
    <React.Fragment>
      <Typography variant="button" color="secondary">
        {time}
      </Typography>
    </React.Fragment>
  );
}

export default Ue5;
