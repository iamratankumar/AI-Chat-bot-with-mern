// @ts-ignore
import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import CustomizedField from "../components/shared/CustomizedField.tsx";
import {FiLogIn} from "react-icons/fi";
import {userAuth} from "../context/AuthContext.tsx";
import toast from "react-hot-toast";

const Login = () => {
    const auth = userAuth();
    const loginHanlde = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email") as string;
        const password = form.get("password") as string;
        try{
            toast.loading("Signing In...",{id:"1"});
            await auth?.login(email, password);
            toast.success("Signed In!",{id:"1"});
        }catch(error){
            console.log(error);
            toast.error("Login Failed!",{id:"1"});
        }

    }
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
               }}
               onSubmit={loginHanlde}>
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
                           Login
                       </Typography>
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
                           }}
                       endIcon={<FiLogIn />
                       }>Login</Button>
                   </Box>
               </form>
           </Box>
    );
};

export default Login;