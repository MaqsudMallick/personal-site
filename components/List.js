import React from 'react';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
const Lists = (props)=>{
    return(
            <>
            <List className="list">
                <ListItem autoFocus= "true"><Image  src= {props.image} alt= "logo"  width= "150" height= "150"/>
            <p className="institute-logo">{props.content}</p></ListItem></List>

            </>

    );
}

export default Lists;
