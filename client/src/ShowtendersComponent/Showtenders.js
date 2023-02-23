/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import './Showtenders.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiuser } from '../apiURL';
import { _webapiadmin } from '../apiURL';
import { useNavigate, Link, useParams } from 'react-router-dom';

function Showtenders()
{
  const Navigate = useNavigate();
  const params = useParams();
  const [ tenderDetails, setTenderDetails ] = useState([]);

  useEffect(() => {
    axios.get(_webapiuser+"showtenders/"+params.subcatnm).then((result)=>{
      console.log(result.data.tenDetails);
      setTenderDetails(result.data.tenDetails);
    });  
  }, [params.subcatnm]);

  const applyTender = (_id)=>{

    Navigate("/user/applytender/"+_id)

    // axios.get(_webapiuser+"applytender/"+_id).then((result)=>{

    //     // window.location.reload();
    //     // var url = "applytender?tenderid="+_id+"&enddate="+enddate
    //     Navigate("/user/applytender/"+_id)
    // })
  }

  return(
  
    <div>
    {/* Page Header Start */}
    <div className="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
            <div className="row py-3">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">User Home</h1>
                    <a className="h5 text-white">User Home</a>
                    <i className="far fa-circle text-white px-2"></i>
                    <a className="h5 text-white">Show Tenders</a>
                </div>
            </div>
    </div>
{/* Page Header Start */}

<div className="container-fluid py-2 wow fadeInUp">
    <div className="container py-2">
    <div className="table-responsive-md text-center">
        <h1 className="text-primary font-weight-semi-bold text-uppercase mb-3">Search Sub Category {">>"} {params.subcatnm}</h1>
        <br/>
        <center>
        <table className='table table-hover'>
          <tr className='table table-info'>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Tender Document</th>
            <th>Last Date</th>
            <th>Info</th>
            <th>Action</th>
          </tr>
          {
    tenderDetails.map((row)=>(
      <tr>
        <td>{row._id}</td>
        <td>{row.title}</td>
        <td>{row.subcatnm}</td>
        <td>{row.tenderdesc}</td>
        <td>{<Link to='../../public/assets/uploads/tenderdocs/'></Link>}
            
        </td>
        <td>{row.enddate}</td>
        <td>{row.info}</td>
        <td>
        <a onClick={()=>{applyTender(row._id)}}>
          <button type="button" className="btn btn-info btn-sm">Apply Tender</button>
        </a>
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

export default Showtenders;