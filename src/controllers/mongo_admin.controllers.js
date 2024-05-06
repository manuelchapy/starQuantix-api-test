const mongoAdmonCtrl = {};
const { use } = require("../app");
const dbMongoFunctionsUser = require("../functions/db_mongo_functions_user")

 mongoAdmonCtrl.getUsers = async(req, res) =>{
    let users = await dbMongoFunctionsUser.getUsers();
    res.send(users)
 }

 mongoAdmonCtrl.addUser = async(req, res) =>{
    console.log(req.body)
    const respUser = await dbMongoFunctionsUser.addUser(req.body.data);
    res.send(respUser)
 }

 module.exports = mongoAdmonCtrl;