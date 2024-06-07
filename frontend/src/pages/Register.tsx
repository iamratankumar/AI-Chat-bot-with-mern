// @ts-ignore
import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import CustomizedField from "../components/shared/CustomizedField.tsx";

const Register = () => {
    return (
        <Box  display={"flex"} flex={{xs:1, md:.5}}
              justifyContent={"center"} alignItems={"center"}
              padding={2} ml={"auto"} mt={16}>
            <form style={{
                margin:"auto",
                padding:"30px",
                boxShadow:"10px 10px 20px #191919",
                borderRadius:"10px",
                border:"none"
            }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                }}>
                    <Typography
                        variant={"h4"}
                        textAlign={"center"}
                        padding={2}
                        fontWeight={600}
                    >
                        Register!
                    </Typography>
                    <CustomizedField name={"name"} type={"text"} label={"Name"}/>
                    <CustomizedField name={"email"} type={"email"} label={"Email"}/>
                    <CustomizedField name={"password"} type={"password"} label={"Password"}/>
                    <Button
                        type="submit"
                        sx={{
                            px:2,
                            py:1,
                            mt:2,
                            width:"400px",
                            borderRadius: 2,
                            backgroundColor:"#406e5a",
                            color:"white",
                            ":hover":{
                                backgroundColor:"#315145",
                                color:"white",
                            }
                        }}>Register</Button>
                </Box>
            </form>
        </Box>
    );
};

export default Register;