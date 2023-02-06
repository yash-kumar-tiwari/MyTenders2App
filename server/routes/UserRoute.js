import express from 'express';
import * as adminController from '../controllers/adminController.js';
import * as userController from '../controllers/userController.js';
import * as url from 'url';
import * as path from 'path';

const router = express.Router();

// //middleware to apply security : user panel
// router.use((req,res,next)=>{
//     if(req.session.sessUserNm==undefined || req.session.sessUserRole!="user")
//     {
//         res.redirect("/login");
//     }
//     next();
// });


router.get("/searchtenders", userController.fetchcategory );

router.get("/showsubcategory/:catnm", userController.fetchsubcategory );

router.get("/showtenders/:subcatnm", userController.fetchTenders );

router.get("/applytender/:tenid", userController.fetchTenderInfo );

router.post("/applytender", userController.applyTenderInfo );

router.get("/epuser", userController.fetchProfile );

router.post("/epuser", userController.updateProfile );

router.post("/cpuser", userController.updatePassword );

//fetch category list
router.get("/fetchcategory", userController.fetchcategory );

//fetch sub category list
router.get("/fetchsubcategory", userController.fetchsubcategory );

export default router;