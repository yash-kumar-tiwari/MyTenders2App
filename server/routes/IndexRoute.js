import express from 'express';
import * as indexController from '../controllers/indexController.js ';

const router = express.Router();

//middleware to manage user details in cookie
// var cookUserNm="", cookUserPass="";
// router.use("/login",(req,res,next)=>{
//     if(req.cookies.cookUserNm!=undefined)
//     {
//         cookUserNm = req.cookies.cookUserNm;
//         cookUserPass = req.cookies.cookUserPass;        
//     }
//     next()
// });

router.get("/",(req,res)=>{
    res.send("Express Server Working");
});

router.post("/register", indexController.registerUser );

router.get("/verifyuser", indexController.verifyUser );

router.get("/checkEmailApi", indexController.checkEmailApi );

router.post("/login", indexController.userLogin );

export default router;