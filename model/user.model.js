const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require("bcrypt");

const { Schema } = mongoose;


const userSchema = new Schema({
    fullName:{
        type:String,
    },
    // birthDate:{
    //     type:Date,
    // },
    // gender:{
    //     type:String,
    // },
    // maritalStatus:{
    //     type:String,
    // },
    // phone:{
    //     type:String,
    // },
    // email:{
    //     type:String,
    // },
    // address:{
    //     type:String,
    // },
    // degree:{
    //     type:String,
    // },
    // university:{
    //     type:String,
    // },
    // startingUniversity:{
    //     type:Date,
    // },
    // endingUniversity:{
    //     type:Date,
    // },
    // grade:{
    //     type:String,
    // },
    // jobTitle:{
    //     type:String,
    // },
    // companyName:{
    //     type:String,
    // },
    // city:{
    //     type:String,
    // },
    // country:{
    //     type:String,
    // },
    // startingJob:{
    //     type:Date,
    // },
    // endingJob:{
    //     type:Date,
    // },
    // jobDescription:{
    //     type:String,
    // },
});


const UserModel = db.model('userInformation',userSchema);

module.exports = UserModel;