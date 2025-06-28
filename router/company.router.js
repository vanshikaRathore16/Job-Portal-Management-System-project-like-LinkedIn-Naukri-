import { createCompany } from "../controller/company.controller.js";
import { auth,recruiterOnly } from "../middleware/auth.js";
import express from "express";
let router = express.Router();
router.post("/create",auth,recruiterOnly,createCompany);
export default router;