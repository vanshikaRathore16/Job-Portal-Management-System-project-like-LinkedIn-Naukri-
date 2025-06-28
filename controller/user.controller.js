import { request, response } from "express";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import { validationResult } from "express-validator";


export const  craeteUser = async(request,response,next)=>{
    try{
    let error = validationResult(request);
    if(!error.isEmpty())
        return response.status(401).json({Message : error.array()});
     let {name,email,password,role} = request.body;
     let addsalt = bcrypt.genSaltSync(12);
     password = bcrypt.hashSync(password,addsalt);
     let user = await User.create({name,email,password,role});
     return response.status(200).json({message : "created"});
    }catch(err){
        console.log(err);
        return response.status(500).json({err : "internal server error"});

    }
}
export const sighIn = async(request,response,next)=>{
    try{
       let {email,password,role} = request.body;
       let user = await User.findOne({where : {email}});
       if(user){
        response.cookie("token",generateToken(user.Id,user.email,user.role));
    //    console.log(password + " " + user.password + " " + user.email);
       return  bcrypt.compareSync(password,user.password) ? response.status(200).json({message : "sigh up"}) : response.status(401).json({meaadge : "passwords are wrong"});
     }else
     return response.status(401).json({message : "invalid email"})
    }catch(err){
        console.log(err);
        return response.status(500).json({err  : "internal server error"});
    }
}
const generateToken = (Id,email,role)=>{
    let payload = {Id,email,role};
    let token  = jwt.sign(payload,process.env.SECRET_KEY);
    console.log(token);
    return token;
}