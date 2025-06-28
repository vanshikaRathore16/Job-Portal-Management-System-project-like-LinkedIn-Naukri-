import { request, response } from "express";
import Job from "../model/job.model.js";
import { auth } from "../middleware/auth.js";
import Company from "../model/company.model.js";
import User from "../model/user.model.js";
export const createJob = async(request,response,next)=>{
    try{
    let {title,des} = request.body;
    let userId = request.user.Id;
    const company = await Company.findByPk(userId);
    const job = await Job.create({title,des,userId,companyId : company.Id});
    return response.status(200).json({message : "job created"});
    }catch(err){
        console.log(err);
        return response.status(500).json({err : "internal server error"});
    }
}
export const list = async(request,response,next)=>{
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

export const removeJob = async(request,response,next)=>{
    try{
       let  Id = request.params.Id;
       let userId = request.user.Id;
       let job = await Job.findByPk(Id);
    //    console.log(job);
    //    let user = await User.findByPk(Id);
    console.log(userId + " " + job.userId);
       if(!job)
        return response.status(401).json({message : "job not found"});
       if(job.userId !== userId)
       return response.status(401).json({message : "unauthroze user"});
    if(job){
        job.isOpen = false;
        await job.save();
    }
        let deletejob = await Job.destroy({where : {Id}});
        return response.status(200).json({meaage : "job removed"});
    }catch(err){
        console.log(err);
        return response.status(500).json({err : "internal server error"});
    }
}


export const removeList = async(request,response,next)=>{
    try{
        let list = await Job.findAll({paranoid : false});
        return response.status(200).json({message : "list",list});
    }catch(err){
        console.log(err);
        return response.status(500).json({err : "internal serevr error"});
    }
}