import { createJob ,list,removeJob,removeList} from "../controller/job.controller.js";
import { auth,recruiterOnly } from "../middleware/auth.js";
import express from "express";
const router = express.Router();
router.post("/create",auth,recruiterOnly,createJob);
router.get("/list",auth,list);
router.delete("/:Id",auth,recruiterOnly,removeJob);
router.get("/remove-list",removeList);
export default router;