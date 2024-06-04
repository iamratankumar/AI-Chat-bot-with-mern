import {connect, disconnect} from "mongoose"

const  connectDB = async ()=>{
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Database connection failure!");
    }
}

const closeConn = async ()=> {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Databse disconnection failuire!");
    }
}
export default connectDB
export {connectDB, closeConn};