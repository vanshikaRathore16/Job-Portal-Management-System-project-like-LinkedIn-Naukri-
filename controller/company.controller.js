import { request, response } from "express";
import Company from "../model/company.model.js";
import { auth } from "../middleware/auth.js";
export const createCompany = async(request,response,next)=>{
    try{
    let {name,website} = request.body;
    let userId = request.user.Id;
    let company = await Company.create({name,website,userId});
    console.log(userId,name,website);
    return response.status(200).json({message : "company is created"});
    }catch(err){
        console.log(err);
        return response.status(500).json({err : "internal sever error"});
    }
}