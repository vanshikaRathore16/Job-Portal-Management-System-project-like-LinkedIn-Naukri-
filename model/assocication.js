import Job from "./job.model.js";
import User from "./user.model.js";
import Company from "./company.model.js";
import Application from "./application.model.js";
User.hasOne(Company);
Company.belongsTo(User);

Company.hasMany(Job);
Job.belongsTo(Company);

User.belongsToMany(Job,{through : Application});
Job.belongsTo(User,{through : Application});

Job.hasMany(Application);
Application.belongsTo(Job);

// Company.hasMany(Application);
// Application.belongsTo(Company);
export {User,Company,Job,Application}

// . Job Portal Management System
// 🧠 Think of this like Naukri.com backend

// Entities:
// User (id, name, email, role = 'jobseeker' or 'recruiter')

// Company (id, name, website, recruiterId)

// Job (id, title, description, companyId, isOpen)

// Application (id, jobId, userId, status, appliedAt)

// Relationships:
// Recruiter creates a company

// One company → Many jobs

// One job → Many applications

// One user (jobseeker) → Many applications

// Core Features:
// GET /users/:id/jobs-applied → Show all jobs a student applied to

// GET /jobs → Filter by company, title, isOpen

// POST /applications → Apply for a job

// Prevent duplicate applications

// Soft delete jobs (mark closed instead of delete)

// Only recruiter can view all applicants to their jobs
//  give full dscripation not code just tell me how