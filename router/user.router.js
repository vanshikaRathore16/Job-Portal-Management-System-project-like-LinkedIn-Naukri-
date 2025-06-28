import {craeteUser,sighIn} from "../controller/user.controller.js";
import express from "express";
import {body} from "express-validator"
let router = express.Router();
router.post("/create",
       body("name","name is not empty").notEmpty(),
       body("name","only letter are allow").isAlpha(),
       body("email","not a valid email").isEmail(),
       body("email","not to be empty").notEmpty(),
       body("password","maxlength 5 to ")
    ,craeteUser);
router.post("/sign-in",sighIn);
export default router;

