import './Viewprofile.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiuser } from '../apiURL';
import { _webapiadmin } from '../apiURL';
import { Link, useParams } from 'react-router-dom';

function Viewprofile()
{
  const [ userDetails, setUserDetails ] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get(_webapiadmin+"viewprofile/"+params._id).then((result)=>{
      console.log(result.data.userDetails);
      setUserDetails(result.data.userDetails);
    });  
  }, []);

  return(
  
    <div>
    {/* Page Header Start */}
    <div class="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
            <div class="row py-3">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">Admin Home</h1>
                    <a href="" class="h5 text-white">Admin Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">View Profile</a>
                </div>
            </div>
    </div>
{/* Page Header Start */}

    <div class="container-fluid py-2 wow fadeInUp">
    <div class="container py-2">
          <div class="text-center">
        <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Profile Details :   </h1>
        <br/>
        <center>
          <table class="table table-responsive">
            <tr>
              <th><b class='headtitle'>Name : </b></th>
              <td><span class='field'> {userDetails.name} </span></td>
            </tr>
            <tr>
              <th><b class='headtitle'>Email : </b></th>
              <td><span class='field'> {userDetails.email} </span></td>
            </tr>  
            <tr>
              <th><b class='headtitle'>Mobile : </b></th>
              <td><span class='field'> {userDetails.mobile} </span></td>
            </tr>
            <tr>
              <th><b class='headtitle'>Address : </b></th>
              <td><span class='field'> {userDetails.address} </span></td>
            </tr>
            <tr>
              <th><b class='headtitle'>City : </b></th>
              <td><span class='field'> {userDetails.city} </span></td>
            </tr>
            <tr>
              <th><b class='headtitle'>Gender : </b></th>
              <td><span class='field'> {userDetails.gender} </span></td>
            </tr>
            <tr>
              <th><b class='headtitle'>Status : </b></th>
              <td><span class='field'> {userDetails.status} </span></td>
            </tr>
            <tr>
              <th><b class='headtitle'>Info : </b></th>
              <td><span class='field'> {userDetails.info} </span></td>
            </tr>
            

          </table>
        </center>    
      </div>
      </div>
    </div>
    </div>
    

  )
}

export default Viewprofile;