import './Manageusers.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiadmin } from '../apiURL';
import { useNavigate } from 'react-router-dom';
 
function Manageusers()
{
  const Navigate = useNavigate();

  const [ userDetails, setUserDetails ] = useState([]);
  
  const usedetails = ()=>{
    axios.get(_webapiadmin+"manageusers").then((result)=>{
      console.log(result.data.userDetails)
      setUserDetails(result.data.userDetails);
    }).catch((err)=>{
      console.log(err)
    });
  }

  useEffect( usedetails,[] );

  const manageUserStatus = (_id, status)=>{
    // alert(_id+"----"+status)
    // var apiURL = _webapiadmin+"manageuserstatus?status="+status+"&regid="+_id
    var apiURL = _webapiadmin+"manageuserstatus/"+status+"/"+_id

    axios.get(apiURL).then((result)=>{
        // window.location.reload();
        // console.log(result.data);

        usedetails();

        // Navigate("/admin/manageusers");
    });
  }

  const viewProfile = (_id)=>{
    
    console.log(_id)
    Navigate("/admin/viewprofile/"+_id);
  
  }
    
  return(
  
    <div>
    {/* Page Header Start */}
    <div class="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
      <div class="row py-3">
        <div class="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 class="display-4 text-white animated zoomIn">Manage Users</h1>
        <a href="" class="h5 text-white">Admin Home</a>
        <i class="far fa-circle text-white px-2"></i>
        <a href="" class="h5 text-white">Manage Users</a>
        </div>
      </div>
    </div>
    {/* Page Header Start */}

    <div class="container-fluid py-2 wow fadeInUp">
    <div class="container py-2">
      <div class="table-responsive-md text-center">
        <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">View & Manage User Details</h1>
        <table class='table table-bordered table-hover '>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Status</td>
            <td>Action</td>
            <td>View</td>
          </tr>
            {
              userDetails &&
              userDetails.map((row)=>(
                <tr>
                  <td>{row._id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>
                    {
                      row.status == 0 &&
                      <a onClick={()=>{manageUserStatus(row._id,"verify")}}>
                      <button class='btn btn-success btn-sm' >Verify User</button>
                      </a>
                    }
                    {
                      row.status == 1 &&
                      <a onClick={()=>{manageUserStatus(row._id,"block")}}>
                      <button class='btn btn-warning btn-sm' >Block User</button>
                      </a>
                    }
                  </td>
                  <td>
                  <a onClick={()=>{manageUserStatus(row._id,"delete")}} >
                    <button class='btn btn-danger btn-sm' >Delete User</button>
                  </a>
                  </td>
                  <td>
                  <a onClick={()=>{viewProfile(row._id)}} >
                    <button class='btn btn-info btn-sm' >View Profile</button>
                  </a>
                  </td>
                </tr>
              ))
            }
        </table>
      </div>
    </div>
    </div>
    </div>
    

  )
}

export default Manageusers;