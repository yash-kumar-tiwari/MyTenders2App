/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import './Showappliedtenders.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiuser } from '../apiURL';
import { _webapiadmin } from '../apiURL';
import { useNavigate, Link, useParams } from 'react-router-dom';

function Showappliedtenders()
{

  const Navigate = useNavigate();
  const params = useParams();

  const [ appliedTenDetails, setAppliedTenDetails ] = useState([]);

  const usedetails = () => {
    axios.get(_webapiadmin+"fetchtenderinfo").then((result)=>{
      console.log(result.data.tenderAppliedDetails);
      setAppliedTenDetails(result.data.tenderAppliedDetails);
    }).catch((err)=>{
      console.log(err);
    });  
  };

  useEffect(() => {
    usedetails();
  }, []);

  const manageTenderStatus = (_id, status)=>{
    // alert(_id+"----"+status)
    // var apiURL = _webapiadmin+"manageuserstatus?status="+status+"&regid="+_id
    var apiURL = _webapiadmin+"managetenderstatus/"+status+"/"+_id

    axios.get(apiURL).then((result)=>{
        usedetails();
    });
  }
  return(
  
    <div>
    {/* Page Header Start */}
    <div className="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
            <div className="row py-3">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">Admin Home</h1>
                    <a className="h5 text-white">Admin Home</a>
                    <i className="far fa-circle text-white px-2"></i>
                    <a className="h5 text-white">Show Applied Tenders</a>
                </div>
            </div>
    </div>
{/* Page Header Start */}

<div className="container-fluid py-2 wow fadeInUp">
    <div className="container py-2">
          <div className="text-center">
        <h1 className="text-primary font-weight-semi-bold text-uppercase mb-3">Search Applied Tenders {">>"} {params.subcatnm}</h1>
        <br/>
        <center>
        <table className='table table-hover'>
          <tr className='table table-info'>
            <th>ID</th>
            <th>Title</th>
            <th>Applied By</th>
            <th>Email</th>
            <th>Amount Published</th>
            <th>Quotation Received</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {
              appliedTenDetails.map((row)=>(
                <tr>
                  <td>{row._id}</td>
                  <td>{row.title}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.tenamount}</td>
                  <td>{row.quotation}</td>
                  <td>
                  {
                    row.status === 0 &&
                    <a onClick={()=>{manageTenderStatus(row._id,'allocate')}}>
                      <button type="button" className="btn btn-success btn-sm">Allocate</button>
                    </a>
                  }
                  {
                    row.status === 1 &&
                    <a onClick={()=>{manageTenderStatus(row._id, 'unallocate')}}>
                      <button type="button" className="btn btn-warning btn-sm">Unallocate</button>
                    </a>
                  }
                  </td>
                  <td>
                  {
                  <a onClick={()=>{manageTenderStatus(row._id, 'delete')}}>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                  </a>
                  }
                  </td>
                </tr>
              ))
            }
        </table>
        </center>    
      </div>
      </div>
    </div>
    </div>
  )
}

export default Showappliedtenders;