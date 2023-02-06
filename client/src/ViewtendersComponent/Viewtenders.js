import './Viewtenders.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapiuser } from '../apiURL';
import { _webapiadmin } from '../apiURL';
import { Link } from 'react-router-dom';

function Viewtenders()
{
  const [ catDetails, setCatDetails ] = useState([]);

  useEffect(() => {
    axios.get(_webapiuser+"fetchcategory").then((result)=>{
      console.log(result.data.catList);
      setCatDetails(result.data.catList);
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
                    <a href="" class="h5 text-white">View Tenders</a>
                </div>
            </div>
    </div>
{/* Page Header Start */}

    <div class="container-fluid py-2 wow fadeInUp">
    <div class="container py-2">
          <div class="text-center">
        <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Categories  </h1>
        <br/>
        <center>
        <div id='categorymain'>
        {
          catDetails.map(element=>{
            const image = '/assets/uploads/categoryicons/'+element.caticonnm;
            const path = '/user/viewsubcategory/'+element.catnm;
            
            return(
              <Link to={path}>
              <div class='categorypart'>
              <br/>
              <img src={image} height='100' width='120' alt=''/>
              <br/>
              <b>{element.catnm}</b>
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

export default Viewtenders;