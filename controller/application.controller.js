import { request, response } from "express";
import Application from "../model/application.model.js";
import Job from "../model/job.model.js";
import Company from "../model/company.model.js";
import { auth } from "../middleware/auth.js";
export const apply = async(request,response,next)=>{
    try{
    let { Id } = request.body;
    let userId = request.user.Id;
    let job = await Job.findByPk(Id);
    console.log(userId);
    if(job)
        return response.status(401).json({message : "job not found"});
        let application =await Application.create({jobId : Id,userId});
        return response.status(200).json({message : "application submit"});
}catch(err){
    console.log(err);
    return response.status(500).json({err : "internal server error"});
}
}

export const list = async(request,response,next)=>{
    try{
       let userId = request.user.Id;
       let application = await Application.findAll({where : {userId},
        include : [
            {model : Job,
            attributes : ["title","des","isOpen"],
            paranoid : false,
            include : [
            {model : Company,attributes : ["name","website"]}
             ]
            }
       ]
       });
       if(!application)
       return response.status(401).json({message : "application not found"});
       return response.status(200).json({message : application});
       
       
    }catch(err){
        console.log(err);
        return response.status(500).json({err : "internal server error"});
    }
}

export const allList = async(request,response,next)=>{
    try{
        const list = await Job.findAll({include : [
            {model : Company,
                attributes : ["name","website"]
            }
        ]});
        return response.status(200).json({message : "list of all job",list});
    }catch(err){
        console.log(err);
        return response.status(500).json({err : "internal server error"});
    }
}
