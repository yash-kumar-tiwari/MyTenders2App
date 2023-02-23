/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import './Register.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapi } from '../apiURL';


function Register()
{
    const [ output , setOutput ] = useState();
    const [ name , setName ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    const [ mobile , setMobile ] = useState();
    const [ address , setAddress ] = useState();
    const [ city , setCity ] = useState();
    const [ gender , setGender ] = useState();


    const handleSubmit = (event)=>{
        event.preventDefault();
        var userDetails = { "name":name, "email":email, "password":password, "mobile":mobile, "address":address, "city":city, "gender":gender };
        // console.log(name);
        // console.log(email);

        axios.post(_webapi+"register", userDetails).then((result)=>{
            // console.log(result.data);
            // console.log(result.data.output);
            setOutput("Registered Successfully");
            setName("");
            setEmail("");
            setPassword("");
            setMobile("");
            setAddress("");
            setCity("");
        }).catch((err)=>{
            console.log(err);
        });
    }

    function checkEmail(email)
    {
        var obj = new XMLHttpRequest();
        obj.open("GET","http://localhost:3001/checkEmailApi?email="+email ,true);
        obj.send();


        obj.onreadystatechange=function(){
            if(obj.status===200 && obj.readyState===4)
            {
                let userData = JSON.parse(obj.responseText);
                // let ref=userData.length;
                //for check user email availability
                let refEmail = document.getElementById("emailRes");
                if(userData.length===0)
                {
                    refEmail.innerHTML="Email is Available";
                    refEmail.style.color="green";
                }
                else
                {
                    refEmail.innerHTML="Email is Already Taken";
                    refEmail.style.color="red";                    
                }
            }
        }

        // document.getElementById("emailRes").innerHTML=email;        
    }

    return(
        <div>

        {/* Page Header Start */}
        <div className="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
            <div className="row py-3">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">Register</h1>
                    <a className="h5 text-white">Home</a>
                    <i className="far fa-circle text-white px-2"></i>
                    <a className="h5 text-white">Register</a>
                </div>
            </div>
        </div>
        {/* Page Header Start */}

           {/* About Start */}
    <div className="container-fluid py-2 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-2">
            <div className="row g-5">
                <div className="col-lg-7">
                    {/* <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">Register Page</h5>
                        <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                    </div> */}

                    <div>

                    <h1 className="text-primary font-weight-semi-bold text-uppercase mb-3">Register Page</h1>
                <h2>Register Here!!!</h2>
                <font style={{"color":"Green"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={element=>setName(element.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input onKeyUp={element=>checkEmail(element.target.value)} type="email" className="form-control" name="email" value={email} onChange={element=>setEmail(element.target.value)} />
                        <span id="emailRes"></span>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={element=>setPassword(element.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="mobile">Mobile:</label>
                        <input type="text" className="form-control" name="mobile" value={mobile} onChange={element=>setMobile(element.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="address">Address:</label>
                        <textarea rows="5" className="form-control" name="address" value={address} onChange={element=>setAddress(element.target.value)} ></textarea>
                    </div>
                    <div className="form-group">
                        <label for="city">City:</label>
                        <select className="form-control" name="city" value={city} onChange={element=>setCity(element.target.value)}>
                            <option>Select City</option>
                            <option value="Indore">Indore</option>
                            <option>Bhopal</option>
                            <option>Ujjain</option>
                            <option>Dewas</option>
                            <option>Bhind</option>
                            <option>Morena</option>
                            <option>Gwalior</option>
                            <option>Khargone</option>
                            <option>Singrauli</option>
                            <option>Rewa</option>
                            <option>Katni</option>
                            <option>Panna</option>
                            <option>Satna</option>
                            <option>Sidhi</option>
                            <option>Harda</option>
                            <option>Narmada Puram</option>
                            <option>Chhindwara</option>
                            <option>Burhanpur</option>
                            <option>Khandwa</option>
                            <option>Dhar</option>
                            <option>Jhabua</option>
                            <option>Alirajpur</option>
                            <option>Ratlam</option>
                            <option>Sheopur</option>
                            <option>Shivpuri</option>
                            <option>Neemuch</option>
                            <option>Mandsaur</option>
                            <option>Rajgarh</option>
                            <option>Sehore</option>
                            <option>Vidisha</option>
                            <option>Chhatarpur</option>
                            <option>Niwari</option>
                            <option>Betul</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="gender">Gender:</label>
                        &nbsp;&nbsp;
                        <input type="radio" name="gender" value="male" onChange={element=>setGender(element.target.value)} /> Male
                        &nbsp;&nbsp;
                        <input type="radio" name="gender" value="female" onChange={element=>setGender(element.target.value)} /> Female
                    </div>
                    <button type="submit" className="btn btn-success">Register</button>
                </form>

                    </div>
                    
                    
                </div>
                <div className="col-lg-5" style={{"min-height": "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="../../../assets/img/register.jpg" style={{"object-fit": "contain"}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}

        </div>
    )

}

export default Register;