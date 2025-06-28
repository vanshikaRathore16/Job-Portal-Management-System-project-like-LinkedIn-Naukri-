import jsw from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const auth = async(request,response,next)=>{
    let { token } = request.cookies;
    try{
    if(!token)
        return response.status(401).json({message : "token is not  availble"});
        let decode = jsw.verify(token,process.env.SECRET_KEY);
        console.log(decode.Id + " " + decode.email);
        request.user = decode;
        next();
}catch(err){
    console.log(err);
    return response.status(500).json({err : "intrnal server error"});
}}


export const recruiterOnly = async(request,response,next)=>{
    if(request.user.role !== "recruiter"){
        return response.status(401).json({message : "only for recruiter"});
    }
    next();
}
// "recruiter"