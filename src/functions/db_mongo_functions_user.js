const userModel = require("../mongoose_models/user");
const dbMongoFunctionsUser = {};

dbMongoFunctionsUser.addUser = async (user) => {
    return new Promise((resolve, reject) => {
        const userAdding = userModel({
            name:       user.name,
            last_name:  user.last_name,
            email:      user.email,
            user_name:  user.user_name
        });
        try {
            userAdding.save();
            resolve("1")
        } catch{
            console.log("/////////////////////////////", error)
            resolve("0")
        }
    })
}

dbMongoFunctionsUser.getUsers = async() => {
    return new Promise((resolve, reject) => {
        let users = userModel.find();
        try{
            resolve(users)
        }catch(error){
            console.log(error)
            resolve('0')
        }
    })
}

module.exports = dbMongoFunctionsUser