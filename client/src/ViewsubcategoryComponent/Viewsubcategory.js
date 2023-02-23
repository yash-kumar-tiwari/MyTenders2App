/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import './Viewsubcategory.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiuser } from '../apiURL';
import { _webapiadmin } from '../apiURL';
import { Link, useParams } from 'react-router-dom';

function Viewsubcategory()
{
  const params = useParams();
  const [ subCatDetails, setSubCatDetails ] = useState([]);

  useEffect(() => {
    axios.get(_webapiuser+"showsubcategory/"+params.catnm).then((result)=>{
      console.log(result.data.subCatList);
      setSubCatDetails(result.data.subCatList);
    });  
  }, [params.catnm]);


  return(
  
    <div>
    {/* Page Header Start */}
    <div className="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
            <div className="row py-3">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">User Home</h1>
                    <a className="h5 text-white">User Home</a>
                    <i className="far fa-circle text-white px-2"></i>
                    <a className="h5 text-white">View Sub Categories</a>
                </div>
            </div>
    </div>
{/* Page Header Start */}


<div className="container-fluid py-2 wow fadeInUp">
    <div className="container py-2">
          <div className="text-center">
        <h1 className="text-primary font-weight-semi-bold text-uppercase mb-3">Sub Category {">>"} {params.catnm}</h1>
        <br/>
        <center>
        <div id='categorymain'>
        {
          subCatDetails.map(element=>{
            const image = '/assets/uploads/subcategoryicons/'+element.subcaticonnm;
            {/* const path = '/user/viewsubcategory/'+element.catnm+"/"+element.subcatnm;; */}
            {/* const path = '/user/applytender/'+element.catnm+"/"+element.subcatnm;; */}
            const path = '/user/showtenders/'+element.subcatnm;

            return(
              <Link to={path}>
              <div className='categorypart'>
              <br/>
              <img src={image} height='100' width='120' alt=''/>
              <br/>
              <b>{element.subcatnm}</b>
              </div>
              </Link>
            )
          })
        }
        </div>
        </center>    
      </div>
      </div>
    </div>
    </div>
  )
}

export default Viewsubcategory;