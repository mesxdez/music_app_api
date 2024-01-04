const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/userRegister').on('open',()=>{
    console.log("MondoDB Connected");
}).on('error',()=>{
    console.log("MondoDB Connected Error");
});

module.exports = connection;