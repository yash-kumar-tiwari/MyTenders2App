/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import './Editprofile.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { _webapiadmin } from '../apiURL'

function Editprofile()
{

    const [ output , setOutput ] = useState();
    const [ name , setName ] = useState();
    const [ email , setEmail ] = useState();
    const [ mobile , setMobile ] = useState();
    const [ address , setAddress ] = useState();
    const [ city , setCity ] = useState();
    const [ gender , setGender ] = useState();

    useEffect(()=>{
        // console.log(localStorage.getItem('email'));
        let condition_email = localStorage.getItem('email');
        console.log(condition_email);

        axios.get(_webapiadmin+"epadmin?email="+condition_email).then((result)=>{
          console.log(result.data.userDetail)
            setName(result.data.userDetail.name);
            setEmail(result.data.userDetail.email);
            setMobile(result.data.userDetail.mobile);
            setAddress(result.data.userDetail.address);
            setCity(result.data.userDetail.city);

        });
      },[]);


    const handleSubmit = (event)=>{
        event.preventDefault();
        var userDetails = { "name":name, "email":email, "mobile":mobile, "address":address, "city":city, "gender":gender };
        // console.log(name);
        // console.log(email);

        axios.post(_webapiadmin+"epadmin", userDetails).then((result)=>{
            console.log(result.data.userDetails);
            console.log(result.data.output);
            setOutput(result.data.output);
            setName(name);
            setEmail(email);
            setMobile(mobile);
            setAddress(address);
            setCity(city);
            setGender(gender);
        }).catch((err)=>{
            console.log(err);
        });
    }
  return(
  
    <div>
        {/* Page Header Start */}
<div className="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
<div className="row py-3">
    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 className="display-4 text-white animated zoomIn">Edit Profile</h1>
        <a className="h5 text-white">Admin Home</a>
        <i className="far fa-circle text-white px-2"></i>
        <a className="h5 text-white">Edit Profile</a>
    </div>
</div>
</div>
{/* Page Header Start */}



{/* About Start */}
<div className="container-fluid py-2 wow fadeInUp">
    <div className="container py-2">
        <div className="row">
            {/* <div className="col-lg-5">
                <div
                    className="d-flex flex-column align-items-center justify-content-center bg-about rounded h-100 py-5 px-3">
                    <i className="fa fa-5x fa-award text-primary mb-4"></i>
                    <h1 className="display-2 text-white mb-2" data-toggle="counter-up">25</h1>
                    <h2 className="text-white m-0">Years Experience</h2>
                </div>
            </div> */}

            <div className="col-lg-12 pt-5 pb-lg-5">
                <h1 className="text-primary font-weight-semi-bold text-uppercase mb-3">Update Profile Page</h1>
                <h2>Update Profile Here!!!</h2>
                <font style={{"color":"Green"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={element=>setName(element.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input readOnly onKeyUp={"checkEmail(this.value)"} type="email" className="form-control" name="email" value={email} onChange={element=>setEmail(element.target.value)} />
                        <span id="emailRes"></span>
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
                    <button type="submit" className="btn btn-success">Update Details</button>
                </form>


            </div>
        </div>
    </div>
</div>
{/* About End */}
</div>  
  )
}

export default Editprofile;