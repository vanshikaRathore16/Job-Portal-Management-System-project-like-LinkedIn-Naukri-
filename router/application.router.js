import express from "express";
import { apply,list,allList} from "../controller/application.controller.js";
import { auth } from "../middleware/auth.js";
let router = express.Router();
router.post("/apply",auth,apply);
router.get("/list",auth,list);
router.get("/all-list",allList);
export default router;