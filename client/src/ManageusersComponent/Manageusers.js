/* eslint-disable jsx-a11y/anchor-is-valid */
import './Manageusers.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiadmin } from '../apiURL';
import { useNavigate } from 'react-router-dom';
 
function Manageusers()
{
  const Navigate = useNavigate();

  const [ userDetails, setUserDetails ] = useState([]);
  
  const usedetails = () =>{
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
    <div className="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
      <div className="row py-3">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 className="display-4 text-white animated zoomIn">Manage Users</h1>
        <a className="h5 text-white">Admin Home</a>
        <i className="far fa-circle text-white px-2"></i>
        <a className="h5 text-white">Manage Users</a>
        </div>
      </div>
    </div>
    {/* Page Header Start */}

    <div className="container-fluid py-2 wow fadeInUp">
    <div className="container py-2">
      <div className="table-responsive-md text-center">
        <h1 className="text-primary font-weight-semi-bold text-uppercase mb-3">View & Manage User Details</h1>
        <table className='table table-hover'>
          <tr className='table table-info'>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
            <th>View</th>
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
                      row.status === 0 &&
                      <a onClick={()=>{manageUserStatus(row._id,"verify")}}>
                      <button className='btn btn-success btn-sm' >Verify User</button>
                      </a>
                    }
                    {
                      row.status === 1 &&
                      <a onClick={()=>{manageUserStatus(row._id,"block")}}>
                      <button className='btn btn-warning btn-sm' >Block User</button>
                      </a>
                    }
                  </td>
                  <td>
                  <a onClick={()=>{manageUserStatus(row._id,"delete")}} >
                    <button className='btn btn-danger btn-sm' >Delete User</button>
                  </a>
                  </td>
                  <td>
                  <a onClick={()=>{viewProfile(row._id)}} >
                    <button className='btn btn-info btn-sm' >View Profile</button>
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