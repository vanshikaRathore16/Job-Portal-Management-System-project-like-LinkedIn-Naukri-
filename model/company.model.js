import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";
const Company = sequelize.define("company",{
      Id:{
       type : DataTypes.INTEGER,
       primaryKey : true,
       autoIncrement : true
    },
    name:DataTypes.STRING,
    website:DataTypes.STRING
})


sequelize.sync()
.then(()=>{
    console.log("company model craeted");
})
.catch(err=>{
    console.log(err);
})
export default Company;
// Company (id, name, website, recruiterId)