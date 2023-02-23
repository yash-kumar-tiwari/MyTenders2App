/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
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
  }, [params._id]);

  return(
  
    <div>
    {/* Page Header Start */}
    <div className="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
            <div className="row py-3">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">Admin Home</h1>
                    <a className="h5 text-white">Admin Home</a>
                    <i className="far fa-circle text-white px-2"></i>
                    <a className="h5 text-white">View Profile</a>
                </div>
            </div>
    </div>
{/* Page Header Start */}

    <div className="container-fluid py-2 wow fadeInUp">
    <div className="container py-2">
          <div className="text-center">
        <h1 className="text-primary font-weight-semi-bold text-uppercase mb-3">Profile Details :   </h1>
        <br/>
        <center>
          <div className="table-responsive-md text-center">
          <table className="table table-responsive">
            <tr>
              <th><b className='headtitle'>Name : </b></th>
              <td><span className='field'> {userDetails.name} </span></td>
            </tr>
            <tr>
              <th><b className='headtitle'>Email : </b></th>
              <td><span className='field'> {userDetails.email} </span></td>
            </tr>  
            <tr>
              <th><b className='headtitle'>Mobile : </b></th>
              <td><span className='field'> {userDetails.mobile} </span></td>
            </tr>
            <tr>
              <th><b className='headtitle'>Address : </b></th>
              <td><span className='field'> {userDetails.address} </span></td>
            </tr>
            <tr>
              <th><b className='headtitle'>City : </b></th>
              <td><span className='field'> {userDetails.city} </span></td>
            </tr>
            <tr>
              <th><b className='headtitle'>Gender : </b></th>
              <td><span className='field'> 
              {
                userDetails.gender==="male" && <button className="btn btn-success">Male</button> 
              }
              {
                userDetails.gender==="female" && <button className='btn btn-warning'>Female</button>
              }
              </span></td>
            </tr>
            <tr>
              <th><b className='headtitle'>Status : </b></th>
              <td><span className='field'> {userDetails.status} </span></td>
            </tr>
            <tr>
              <th><b className='headtitle'>Info : </b></th>
              <td><span className='field'> {userDetails.info} </span></td>
            </tr>
            

          </table>
          </div>
        </center>    
      </div>
      </div>
    </div>
    </div>
    

  )
}

export default Viewprofile;