import React from "react";
import { Button, CardActions, CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Card } from "@mui/material";

const Cards= (props)=>{

    return (
        <>
        <a target="_blank" rel= "noreferrer" href= {props.link}>
        <Card className= "cards" elevation="10" style={{height: "450px"}}>
            <CardMedia component="img" src={props.image} height= "300" width= "150" />
            <CardContent>
                <p>{props.name}</p>
                <CardActions>
                   <a href={props.link} ><Button color= "success" size="small">Learn More</Button></a>
                </CardActions>
            </CardContent>
        </Card>
        </a>
        </>
    );
}

export default Cards;

