import '../models/connection.js'
import * as url from 'url';
import * as path from 'path';

//import schema models 
import RegisterSchemaModel from '../models/userModel.js';
import CategorySchemaModel from '../models/categoryModel.js';
import SubCategorySchemaModel from '../models/subCategoryModel.js';
import TenderSchemaModel from '../models/tenderModel.js';
import TenderInfoSchemaModel from '../models/tenderInfoModel.js';

//static files path
const __dirname = url.fileURLToPath(new URL ('.', import.meta.url));

export var applyTenderInfo = async (req, res, next)=>{

    var condition_obj = {"name": req.body.name, "email": req.body.email, "title":req.body.title };
    // console.log(condition_obj);

    var chkRecord = await TenderInfoSchemaModel.find(condition_obj);
    console.log(chkRecord);

        var tenderInfo = req.body;
        console.log(tenderInfo);
    
        var tenderInfoList = await TenderInfoSchemaModel.find();
        var len = tenderInfoList.length;
        var _id = (len==0)?1:tenderInfoList[len-1]._id+1;
        tenderInfo = {...tenderInfo, "_id": _id, "status":0 ,"info": Date()};
        var result = await TenderInfoSchemaModel.create(tenderInfo);

        if(result.length!= 0 )
            return res.status(200).json({"tenderInfoList":result});
        else
            return res.status(500).json({"tenderInfoList":"error"});   

}

export var fetchTenders = async (req, res, next)=>{
    var condition_obj = req.params;
    console.log(condition_obj);
    
    var tenList = await TenderSchemaModel.find(condition_obj);
    if(tenList.length!= 0 )
        return res.status(200).json({"tenDetails":tenList});
    else
        return res.status(500).json({"tenDetails":"error"});
}

export var fetchTenderInfo = async (req, res, next)=>{
    var condition_obj = req.params.tenid;
    console.log(condition_obj);
    
    var tenList = await TenderSchemaModel.find({"_id":condition_obj});

    if(tenList.length!= 0 )
        return res.status(200).json({"tenderDetails":tenList});
    else
        return res.status(500).json({"tenderDetails":"error"});
}

export var fetchcategory = async (req, res, next)=>{
    var condition_obj = req.params;
    var catList = await CategorySchemaModel.find(condition_obj);
    if(catList.length!= 0 )
        return res.status(200).json({"catList":catList});
    else
        return res.status(500).json({"catList":"error"});
}

export var fetchsubcategory = async (req, res, next)=>{
    var condition_obj = req.params;
    // console.log(condition_obj);
    var subCatList = await SubCategorySchemaModel.find(condition_obj);
    if(subCatList.length!= 0 )
        return res.status(200).json({"subCatList":subCatList});
    else
        return res.status(500).json({"subCatList":"error"});
}

export var fetchProfile = async (req, res, next)=>{
    var condition_obj = url.parse(req.url, true).query.email;
    console.log(condition_obj);
    var result = await RegisterSchemaModel.findOne({"email":condition_obj});
    console.log(result);
    
    if(result)
    {        
        res.status(200).json({"output":"","userDetail":result});
    }
    else
    {
        res.status(500).json({"output":"","userDetail":"error"});
    }
}

export var fetchInfo = async (req, res, next)=>{
    var condition_obj = url.parse(req.url, true).query.email;
    console.log(condition_obj);
    var result = await RegisterSchemaModel.findOne({"email":condition_obj});
    console.log(result);
    
    if(result)
    {        
        res.status(200).json({"output":"","userDetail":result});
    }
    else
    {
        res.status(500).json({"output":"","userDetail":"error"});
    }
}

export var updateProfile = async (req, res, next)=>{

    console.log(req.body);
    var userDetails = req.body;
    var condData = {"email":userDetails.email};
    var updData = {"name":userDetails.name,"mobile":userDetails.mobile,"address":userDetails.address,"city":userDetails.city,"gender":userDetails.gender};
  
    var result = await RegisterSchemaModel.updateMany(condData,updData);

    if(result)
        return res.status(200).json({"output":"Details Successfully Updated","userDetail":result});
    else
        return res.status(500).json({"output":"Error While Updating Details","userDetail":"error"});
}

export var updatePassword = async (req, res, next)=>{
    // console.log(req.body);
    var email = req.body.email;
    var oldpass = req.body.password;
    var newpass = req.body.newpassword;
    var confpass = req.body.confirmpassword;
    var userList = await RegisterSchemaModel.findOne({"email":email,"password":oldpass});

    var msg="";
        if(userList.length!=0)
        {
            if(newpass==confpass)
            {
                var condData = {"email":email};
                var updData = {"password":confpass};

                var result =await RegisterSchemaModel.updateMany(condData,updData);

                if(result)
                    return res.status(200).json({"output":"Update Password Successfully","userDetails":result});
                else
                    return res.status(500).json({"output":"Update Password Failed","userDetails":"error"});
            }
            else
            res.status(500).json({"output":"New Password & Old Password Mismatch"});
        }
        else
        res.status(500).json({"output":"Invalid Old Password"});
}