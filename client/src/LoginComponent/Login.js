import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _webapi } from '../apiURL';
import { useNavigate } from 'react-router-dom';

function Login()
{

    const navigate = useNavigate();
    const [ output , setOutput ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();


    const handleSubmit = (event)=>{
        event.preventDefault();
        var userDetails = { "email":email, "password":password };
        // console.log(name);
        // console.log(email);

        axios.post(_webapi+"login", userDetails).then((result)=>{
            // console.log(result.data);
            // console.log(result.data.output);
            // console.log(result.data.userDetails)
            if(result.data.token == "error")
            {
                // console.log("hello")
                setOutput("Invalid User or Verify Your Account...");
            }
            else
            {
                localStorage.setItem("token", result.data.token);
                localStorage.setItem("_id", result.data.userDetails._id);
                localStorage.setItem("name", result.data.userDetails.name);
                localStorage.setItem("email", result.data.userDetails.email);
                localStorage.setItem("mobile", result.data.userDetails.mobile);
                localStorage.setItem("address", result.data.userDetails.address);
                localStorage.setItem("city", result.data.userDetails.city);
                localStorage.setItem("gender", result.data.userDetails.gender);
                localStorage.setItem("role", result.data.userDetails.role);
                localStorage.setItem("info", result.data.userDetails.info);

                if(result.data.userDetails.role == "admin")
                {
                    navigate("/admin");
                }
                else
                {
                    navigate("/user");
                }
            }
            // setOutput("Login Successfully");
            setEmail("");
            setPassword("");
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
                    <h1 class="display-4 text-white animated zoomIn">Login</h1>
                    <a href="" class="h5 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">Login</a>
                </div>
            </div>
        </div>
        {/* Page Header Start */}

           {/* About Start */}
    <div class="container-fluid py-2 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-2">
            <div class="row g-5">
                <div class="col-lg-7">
                    {/* <div class="section-title position-relative pb-3 mb-5">
                        <h5 class="fw-bold text-primary text-uppercase">Login Page</h5>
                        <h1 class="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                    </div> */}

                    <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Login Page</h1>
                <h2>Login Here!!!</h2>
                <font style={{"color":"Green"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input onKeyUp={"checkEmail(this.value)"} type="email" class="form-control" name="email" value={email} onChange={element=>setEmail(element.target.value)} required />
                        <span id="emailRes"></span>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" name="password" value={password} onChange={element=>setPassword(element.target.value)} required />
                    </div>

                    <button type="submit" class="btn btn-success">Login</button>
                </form>

                    
                </div>
                <div class="col-lg-5" style={{"min-height": "500px"}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="../../../assets/img/login.jpg" style={{"object-fit": "contain"}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}

        </div>
    )

}

export default Login;