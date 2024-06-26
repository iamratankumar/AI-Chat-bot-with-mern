import axios from "axios";

export const loginUser = async (email: string, password: string) => {
    const res = await axios.post("/user/login", {email, password});

    if(res.status != 200){
        throw new Error("Failed to login");
    }
    const data = await res.data;
    return data;
}

export const authUser = async ()=>{
    const res = await axios.get("/user/auth");
    if(res.status != 200){
        throw new Error("Failed to login");
    }
    const data = await res.data;
    return data;
}