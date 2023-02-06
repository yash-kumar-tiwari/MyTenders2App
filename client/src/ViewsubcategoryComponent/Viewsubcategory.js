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
  }, []);


  return(
  
    <div>
    {/* Page Header Start */}
    <div class="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
            <div class="row py-3">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">User Home</h1>
                    <a href="" class="h5 text-white">User Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">View Sub Categories</a>
                </div>
            </div>
    </div>
{/* Page Header Start */}


<div class="container-fluid py-2 wow fadeInUp">
    <div class="container py-2">
          <div class="text-center">
        <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Sub Category >> {params.catnm}</h1>
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
              <div class='categorypart'>
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