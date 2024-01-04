const UserService = require('../services/user.services');
const UserModel = require('../model/user.model');

exports.register = async(req,res,next)=>{
    try{

        // const {email,password} = req.body;

        // const successRes = await UserService.registerUser(email,password);
        const createUser = await new UserModel(req.body).save();
        // await createUser.save();
        // return await createUser.save();

        res.json({success:createUser,status:true});
    }catch(error){
        throw error;
    }
}

