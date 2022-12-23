import {Sequelize} from "sequelize";
 
const db = new Sequelize('todos-js','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;