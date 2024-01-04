const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');

const port = 3000;

// app.get('/',(req,res)=>{
//     res.send("asdasd");
// });
app.get('/information',async(req,res)=>{
    try{
        const information = await UserModel.find({});
        res.status(200).json(information);
    }catch (error){
        res.status(500).json({message:error.message});
    }
});

app.listen(port,()=>{
    console.log(`Server on Port http://localhost:${port}`);
});