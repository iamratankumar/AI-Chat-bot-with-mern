import jwt from 'jsonwebtoken'
export const createToken=(id:string,email:string, expiry: string = "7d")=>{
    return jwt.sign({id, email},process.env.JWT_SECRET,{expiresIn:expiry});
}