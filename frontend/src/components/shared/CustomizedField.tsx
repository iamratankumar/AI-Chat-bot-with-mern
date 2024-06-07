//@ts-ignore
import React from 'react';
import {TextField} from "@mui/material";

type Props = {
    name:string;
    type:string;
    label:string;
}

const CustomizedField = (props:Props) => {
    return <TextField
        margin={"normal"}
        InputLabelProps={{style:{color:"#fff"}}}
        InputProps={{style:{color:"#fff", width:"400px", fontSize:"18px"}}}
        name={props.name}
        type={props.type}
        label={props.label}

    />;
};

export default CustomizedField;