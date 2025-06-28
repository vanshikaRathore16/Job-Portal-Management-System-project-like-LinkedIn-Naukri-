import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";
const Application = sequelize.define("application",{
       Id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
     status:{
        type : DataTypes.ENUM("applied","rejected","selected"),
        defaultValue : "applied"
     },
     appliedAt:{
        type : DataTypes.DATE,
        defaultValue : sequelize.Now
     }
})
sequelize.sync()
.then(()=>{
    console.log("application model created");
})
.catch(err=>{
    console.log(err);
})
export default Application
// Application (id, jobId, userId, status, appliedAt)