import './Applytenders.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiuser } from '../apiURL';
import { Link, useParams } from 'react-router-dom';

function Applytenders()
{
  const params = useParams();
  // console.log(params.tenid);
  
  const [ tenderDetails, setTenderDetails ] = useState([]);

  useEffect(() => {
    axios.get(_webapiuser+"applytender/"+params.tenid).then((result)=>{
      console.log(result.data.tenDetails[0]);
      setTenderDetails(result.data.tenDetails[0]);
    });  
  }, []);

    const [ output , setOutput ] = useState();
    const [ name , setName ] = useState();
    const [ email , setEmail ] = useState();
    const [ mobile , setMobile ] = useState();
    const [ address , setAddress ] = useState();
    const [ city , setCity ] = useState();
    const [ typeofApplicant , setTypeOfApplicant ] = useState();
    const [ title , setTitle ] = useState(tenderDetails.title);
    const [ subCatName , setSubCatName ] = useState(tenderDetails.subcatnm);
    const [ endDate , setEndDate ] = useState(tenderDetails.enddate);




    const handleSubmit = (event)=>{
        event.preventDefault();
        var applyTenderInfo = { "name":name, "email":email, "mobile":mobile, "address":address, "city":city, "typeofApplicant":typeofApplicant, "title":tenderDetails.title , "subcatnm":tenderDetails.subcatnm, "enddate":tenderDetails.enddate };
        console.log(applyTenderInfo);

        // console.log(name);
        // console.log(email);

        axios.post(_webapiuser+"applytender", applyTenderInfo).then((result)=>{
            // console.log(result.data);
            // console.log(result.data.output);
            setOutput("Tender Applied Successfully");
            setName("");
            setEmail("");
            setMobile("");
            setAddress("");
            setCity("");
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
                    <h1 class="display-4 text-white animated zoomIn">User Home</h1>
                    <a href="" class="h5 text-white">User Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">Apply Tender</a>
                </div>
            </div>
    </div>
{/* Page Header Start */}


<div class="container-fluid py-2 wow fadeInUp">
    <div class="container py-2">
          <div class="text-center">
        <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Apply Tender >> {tenderDetails.title}</h1>
        <br/>
        <center>
        <h1>Apply Tender Here !!!</h1>

        <font style={{"color":"Green"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="name">Name of Applicant : </label>
                        <input type="text" class="form-control" name="name" value={name} onChange={element=>setName(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address : </label>
                        <input onKeyUp={"checkEmail(this.value)"} type="email" class="form-control" name="email" value={email} onChange={element=>setEmail(element.target.value)} />
                        <span id="emailRes"></span>
                    </div>
                    <div class="form-group">
                        <label for="mobile">Mobile Number : </label>
                        <input type="text" class="form-control" name="mobile" value={mobile} onChange={element=>setMobile(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="address">Address of Company : </label>
                        <textarea rows="5" class="form-control" name="address" value={address} onChange={element=>setAddress(element.target.value)} ></textarea>
                    </div>
                    <div class="form-group">
                        <label for="city">City : </label>
                        <select class="form-control" name="city" value={city} onChange={element=>setCity(element.target.value)}>
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
                    <div class="form-group">
                        <label for="gender">Type of Applicant : </label>
                        &nbsp;&nbsp;
                        <input type="radio" name="typeofApplicant" value="Government" onChange={element=>setTypeOfApplicant(element.target.value)} /> Government
                        &nbsp;&nbsp;
                        <input type="radio" name="typeofApplicant" value="Private" onChange={element=>setTypeOfApplicant(element.target.value)} /> Private
                    </div>
                    <div class="form-group">
                        <label for="title">Title of Tender : </label>
                        <input readOnly type="text" class="form-control" name="title" value={tenderDetails.title} onChange={element=>setTitle(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="categoryname">Category of Tender : </label>
                        <input readOnly type="text" class="form-control" name="subcatnm" value={tenderDetails.subcatnm} onChange={element=>setSubCatName(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="lastdate">Last Date of Apply : </label>
                        <input readOnly type="text" class="form-control" name="enddate" value={tenderDetails.enddate} onChange={element=>setEndDate(element.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-success">Apply Tender</button>
                </form>
        
        </center>    
      </div>
      </div>
    </div>
    </div>
  )
}

export default Applytenders;