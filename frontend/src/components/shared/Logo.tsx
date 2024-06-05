//@ts-ignore
import React from 'react';
import {Link} from 'react-router-dom';
import {Typography} from "@mui/material";

const Logo = () => {
    return (
        <>
            <div style={{display:"flex", alignContent:"center",marginRight:"auto",gap:"15px"}}>
                <Link to="/">
                    <img src={"openai.png"} alt={"chatAPP"} height={30} width={30} className="logo" />
                </Link>
                    <Typography sx={{display:{md:"block", sm:"none", xs:'none'},mr:"auto",fontWeight:"800", textShadow:"2px 2px 20px #000",alignItems:"center"}}>
                        AI CHATAPP- OPENAI
                    </Typography>
            </div>
        </>
    );
};

export default Logo;