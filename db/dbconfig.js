import { authPlugins } from "mysql2";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize("jobPortalSystemDB","root","Vanshika1612",{
      host : "localhost",
      dialect : "mysql"
    
})
sequelize.authenticate()
.then(()=>{
    console.log("databae cannnected");
})
.catch(err=>{
     console.log(err);
})
export default sequelize;