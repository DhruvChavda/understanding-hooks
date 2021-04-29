import React, { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import axios from "axios";

// Data Fetching using useEffect and Axios

function createCards(props) {
    return (
        <div key={props.id} style={{ margin: "5px", maxWidth: "200px", display:"inline-block"}}>
            <Card >
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        User
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography color="textSecondary">{props.username}</Typography>
                    <Typography variant="body2" component="p">
                        {props.email}
                        <br />
                        {`${props.address.street}, ${props.address.city}`}
                        <br />
                        {props.address.zipcode}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}

function DfUe1() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res);
                setCards(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Typography variant="h3" color="secondary">
                {cards.map(createCards)}
            </Typography>
        </div>
    );
}

export default DfUe1;
