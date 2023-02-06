import express from 'express';
import * as adminController from '../controllers/adminController.js';
import * as userController from '../controllers/userController.js';
import * as url from 'url';
import * as path from 'path';

const router = express.Router();

const __dirname = url.fileURLToPath(new URL ('.', import.meta.url));

// //middleware to apply security : admin panel
// router.use((req,res,next)=>{
//     if(req.session.sessUserNm==undefined || req.session.sessUserRole!="admin")
//     {
//         res.redirect("/login");
//     }
//     next();
// });

router.get("/manageusers", adminController.manageUser );

router.get("/manageuserstatus/:status/:_id", adminController.manageUserStatus );

router.get("/viewprofile/:_id", adminController.viewProfile );

router.post("/launchtender", adminController.addTender );

router.post("/addcategory", adminController.addCategory );

router.post("/addsubcategory", adminController.addSubCategory );

router.get("/epadmin", adminController.fetchProfile );

router.post("/epadmin", adminController.updateProfile )

router.get("/cpadmin", (req,res)=>{
    res.json({"output":"Updated Successfully","userDetails":result[0]});
});

router.post("/cpadmin", adminController.updatePassword );

//fetch category list
router.get("/fetchcategory", adminController.fetchcategory );

//fetch sub category list
router.get("/fetchsubcategory", adminController.fetchsubcategory );

export default router;