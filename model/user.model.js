import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";
const User = sequelize.define("users",{
    Id:{
        type:DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name:{
        type : DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
    type : DataTypes.STRING
    },
    role:{
        type : DataTypes.ENUM("jobseeker","recruiter"),
        defaultValue : "jobseeker"
    }
})
sequelize.sync()
.then(()=>{
    console.log("user model created");
})
.catch(err=>{
    console.log(err);
})
export default User;
// User (id, name, email, role = 'jobseeker' or 'recruiter')