import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";

// Data Fetching using useEffect and Axios
// Selective Data fetching OnChange of input
function DfUe2() {
    const [card, setCard] = useState();
    const [id, setId] = useState(1);
    const [btnId, setBtnId] = useState(1);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${btnId}`)
            .then((res) => {
                console.log(res.data);
                setCard(res.data.name);
            })
            .catch((err) => console.log(err));
    }, [btnId]);

    function handleClick(){
        setBtnId(id);
    }

    return (
        <div>
            <TextField
                id="DfUe3-inp"
                label="Number"
                variant="outlined"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <Button variant="outlined" color="primary" onClick={handleClick}>Get!</Button>
            <br />
            <Typography variant="h5" component="h2" color="secondary">
                {card}
            </Typography>
        </div>
    );
}

export default DfUe2;
