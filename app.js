import express from "express";
import bodyParser from "body-parser";
import user from "./router/user.router.js";
import company from "./router/company.router.js";
import job from "./router/job.router.js";
import application from "./router/application.router.js";
import cookieParser from "cookie-parser";
import "./model/assocication.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use("/user",user);
app.use("/company",company);
app.use("/job",job);
app.use("/application",application);
app.listen(process.env.SERVER,()=>{
    console.log("sever cannected");
})