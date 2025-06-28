import { DataTypes, TINYINT } from "sequelize";
import sequelize from "../db/dbconfig.js";
const Job = sequelize.define("job",{
      Id:{
        type :DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    title:DataTypes.STRING,
    des:DataTypes.STRING,
   isOpen:{
      type : DataTypes.BOOLEAN,
      defaultValue : true
   }
},{
    paranoid : true,
    timestamps : true
})
sequelize.sync()
.then(()=>{
    console.log("job model created");
})
.catch(err=>{
    console.log(err);
})
export default Job;
// Job (id, title, description, companyId, isOpen)
