import './Changepassword.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { _webapiadmin } from '../apiURL'

function Changepassword()
{

    const [ output , setOutput ] = useState();
    const [ password , setPassword ] = useState();
    const [ newPassword , setNewPassword ] = useState();
    const [ confirmPassword , setConfirmPassword ] = useState();
    const [ email , setEmail ] = useState(localStorage.getItem('email'));



    const handleSubmit = (event)=>{
        event.preventDefault();
        var passDetails = { "email":email, "password":password, "newpassword":newPassword, "confirmpassword":confirmPassword };
        console.log(passDetails);

        axios.post(_webapiadmin+"cpadmin", passDetails).then((result)=>{
            console.log(result.data.userDetails);
            console.log(result.data.output);
            setOutput(result.data.output);
            setPassword("");
            setNewPassword("");
            setConfirmPassword("");
        }).catch((err)=>{
            console.log(err);
        });
    }
  return(
  
    <div>
        {/* Page Header Start */}
<div class="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
<div class="row py-3">
    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 class="display-4 text-white animated zoomIn">Change Password</h1>
        <a href="" class="h5 text-white">Admin Home</a>
        <i class="far fa-circle text-white px-2"></i>
        <a href="" class="h5 text-white">Change Password</a>
    </div>
</div>
</div>
{/* Page Header Start */}


{/* About Start */}
<div class="container-fluid py-2 wow fadeInUp">
    <div class="container py-2">
        <div class="row">
            {/* <div class="col-lg-5">
                <div
                    class="d-flex flex-column align-items-center justify-content-center bg-about rounded h-100 py-5 px-3">
                    <i class="fa fa-5x fa-award text-primary mb-4"></i>
                    <h1 class="display-2 text-white mb-2" data-toggle="counter-up">25</h1>
                    <h2 class="text-white m-0">Years Experience</h2>
                </div>
            </div> */}

            <div class="col-lg-12 pt-5 pb-lg-5">
                <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Update Password Page</h1>
                <h2>Update Password Here!!!</h2>
                <font style={{"color":"Green"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="oldpass">Old Password:</label>
                        <input type="password" class="form-control" name="oldpass" value={password} onChange={element=>setPassword(element.target.value)} />
                    </div>                    
                    <div class="form-group">
                        <label for="newpass">New Password:</label>
                        <input type="password" class="form-control" name="newpass" value={newPassword} onChange={element=>setNewPassword(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="confpass">Confirm Password:</label>
                        <input type="password" class="form-control" name="confpass" value={confirmPassword} onChange={element=>setConfirmPassword(element.target.value)} />
                    </div>
                    
                    <button type="submit" class="btn btn-success">Update Password</button>
                </form>


            </div>
        </div>
    </div>
</div>
{/* About End */}
</div>  
  )
}

export default Changepassword;