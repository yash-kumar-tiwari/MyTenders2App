import '../models/connection.js';
import RegisterSchemaModel from '../models/userModel.js';
import * as url from 'url';
import sendEmail from '../routes/emailAPI.js';
import jwt from 'jsonwebtoken';


export var registerUser = async (req, res, next)=>{

    var userDetail = req.body;
    var userList = await RegisterSchemaModel.find();
    var len = userList.length;
    var _id = (len==0)? 0: userList[len-1]._id+1;
    userDetail = {...userDetail, "_id":_id ,"status":0, "role":"user","info":Date()};
    var result = await RegisterSchemaModel.create(userDetail);

    sendEmail(req.body.email,req.body.password);

    if(result)
        return res.status(200).json({"result":"User register successfully...."});
    else
        return response.status(500).json({"result": "Server Error"});
}

export var userLogin = async (req, res, next)=>{
    var userDetail = req.body;
    userDetail = {...userDetail, "status":1};
    var result = await RegisterSchemaModel.find(userDetail);
    console.log(result);

    if(result.length!=0)
    {
        let payload = {"subject":result[0].email};
        let token = jwt.sign(payload,"qwerty1234567");
        // let token = jwt.token(payload,Date.now());
        res.json({"token":token,"userDetails":result[0]});
        // console.log(result[0]);
    }
    else
    {
        res.json({"token":"error"});            
    }        
}

export var verifyUser = async (req, res, next) =>{
    var email = url.parse(req.url, true).query.email;
    var result = await RegisterSchemaModel.update({"email":email},{"status":1});
    if (result)
        res.json({"output":"succeed"});
    else
        res.json({"output":"error"});
}

export var checkEmailApi = async (req, res, next) =>{
    var email = url.parse(req.url, true).query.email;
    var regex=`^${email}`;
    var result = RegisterSchemaModel.find({"email":{$regex: regex}});
    if(result)
        res.send(result); 
    else 
        res.send(result); 
}