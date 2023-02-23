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

export var manageUser = async (req, res, next)=>{
    var condition_obj = {"role":"user"}
    var userList = await RegisterSchemaModel.find(condition_obj);

    // console.log(userList);

    if(userList.length != 0 )
    {        
        return res.status(200).json({"userDetails":userList}); 
    }
    else
    {
        return res.status(500).json({"userDetails":"error"});
    }
}

export var manageUserStatus = async (req, res, next)=>{
    var statusDetails = req.params;
    console.log(statusDetails);
    
    if(statusDetails.status=="block")
    {
        //to update status in collection
        var result = await RegisterSchemaModel.updateMany({"_id":parseInt(statusDetails._id)},{$set:{"status":0}});
        if(result)
            return res.status(200).json({"response":true});
        else
            return res.status(500).json({"response":true});
    }
    else if(statusDetails.status=="verify")
    {
        //to update status in collection
        var result = await RegisterSchemaModel.updateMany({"_id":parseInt(statusDetails._id)},{$set:{"status":1}});
        if(result)
            return res.status(200).json({"response":true})
        else
            return res.status(500).json({"response":true})
    }
    else
    {
        //to remove record from collection
        var result = await RegisterSchemaModel.remove({"_id":parseInt(statusDetails._id)});
        if(result)
            return res.status(200).json({"response":true})
        else  
            return res.status(500).json({"response":true})
    }
}

export var addCategory = async (req, res, next)=>{
    // console.log(req.body);
    // console.log(req.files);
    var catnm = req.body.catnm;
    var caticon = req.files.caticon;
    var filename = Date.now()+"-"+caticon.name;
    // console.log(catnm+"------>"+filename);
    var filepath = path.join(__dirname, "../../client/public/assets/uploads/categoryicons",filename);
    caticon.mv(filepath);
    var catList = await CategorySchemaModel.find();
    var len = catList.length;
    var _id = (len==0)? 1: catList[len-1]._id+1;
    var catDetails = {"_id":_id, "catnm":catnm, "caticonnm":filename};
    // console.log(catDetails);
    var result = await CategorySchemaModel.create(catDetails);
    if(result)
        res.status(200).json({"output":"Add Category Successfully"});
    else
        res.status(500).json({"output":"Category Uploading Failed"});   
}
      
export var addSubCategory = async (req, res, next)=>{
    // console.log(req.body);
    // console.log(req.files);
    var catnm = req.body.catnm;
    var subcatnm = req.body.subcatnm;
    var caticon = req.files.caticon;
    var filename = Date.now()+"-"+caticon.name;
    // console.log(catnm+"------>"+filename);
    var filepath = path.join(__dirname, "../../client/public/assets/uploads/subcategoryicons",filename);
    caticon.mv(filepath);
    var subCatList = await SubCategorySchemaModel.find();
    var len = subCatList.length;
    var _id = (len==0)? 1: subCatList[len-1]._id+1;
    var subCatDetails = {"_id":_id, "catnm":catnm, "subcatnm":subcatnm,"subcaticonnm":filename};
    console.log(subCatDetails);
    var result = await SubCategorySchemaModel.create(subCatDetails);
    if(result)
        res.status(200).json({"output":"Add Sub Category Successfully"});
    else
        res.status(500).json({"output":"Sub Category Uploading Failed"});   
}

export var fetchTenderAppliedInfo = async (req, res, next)=>{
    var condition_obj = req.params.tenid;
    console.log(condition_obj);
    
    var tenderAppliedList = await TenderInfoSchemaModel.find();

    if(tenderAppliedList.length!= 0 )
        return res.status(200).json({"tenderAppliedDetails":tenderAppliedList});
    else
        return res.status(500).json({"tenderAppliedDetails":"error"});
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
    var subCatList = await SubCategorySchemaModel.find(condition_obj);
    if(subCatList.length!= 0 )
        return res.status(200).json({"subCatList":subCatList});
    else
        return res.status(500).json({"subCatList":"error"});
}

export var addTender = async (req, res, next)=>{

    // console.log(req.body);
    // console.log(req.files);
    var tenDetails = req.body;
    // console.log(tenDetails)
    var tenderdoc = req.files.tenderdoc;
    // console.log(tenderdoc);
    var filename = Date.now()+"-"+tenderdoc.name;
    // console.log(catnm+"------>"+filename);
    // console.log(filename);

    var filepath = path.join(__dirname, "../../client/public/assets/uploads/tenderdocs",filename);

    tenderdoc.mv(filepath);
    var tenderList = await TenderSchemaModel.find();
    var len = tenderList.length;
    var _id = (len==0)? 1: tenderList[len-1]._id+1;
    tenDetails = {...tenDetails, "_id":_id,"info":Date(),"tenderdocnm":filename};

    console.log(tenDetails);
    var result = await TenderSchemaModel.create(tenDetails);
    if(result)
        res.status(200).json({"output":"Tender Added Successfully"});
    else
        res.status(500).json({"output":"Tender Uploading Failed"});

}

export var manageTenderStatus = async (req, res, next)=>{
    var statusDetails = req.params;
    console.log(statusDetails);
    
    if(statusDetails.status=="unallocate")
    {
        //to update status in collection
        var result = await TenderInfoSchemaModel.updateMany({"_id":parseInt(statusDetails._id)},{$set:{"status":0}});
        if(result)
            return res.status(200).json({"response":true});
        else
            return res.status(500).json({"response":true});
    }
    else if(statusDetails.status=="allocate")
    {
        //to update status in collection
        var result = await TenderInfoSchemaModel.updateMany({"_id":parseInt(statusDetails._id)},{$set:{"status":1}});
        if(result)
            return res.status(200).json({"response":true})
        else
            return res.status(500).json({"response":true})
    }
    else
    {
        //to remove record from collection
        var result = await TenderInfoSchemaModel.remove({"_id":parseInt(statusDetails._id)});
        if(result)
            return res.status(200).json({"response":true})
        else  
            return res.status(500).json({"response":true})
    }
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

export var viewProfile = async (req, res, next)=>{
    var condition_obj = req.params;
    console.log(condition_obj);
    var result = await RegisterSchemaModel.findOne({"_id":condition_obj});
    console.log(result);
    
    if(result)
    {        
        res.status(200).json({"output":"","userDetails":result});
    }
    else
    {
        res.status(500).json({"output":"","userDetails":"error"});
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