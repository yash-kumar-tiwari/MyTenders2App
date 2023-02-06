import './Launchtender.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapi, _webapiadmin } from '../apiURL'


function Launchtender()
{
    const [ output , setOutput ] = useState();
    const [ title , setTitle ] = useState();
    const [ catName , setCatName ] = useState();
    const [ tenDesc , setTenDesc ] = useState();
    const [ file , setFile ] = useState();
    const [ endDate , setEndDate ] = useState();
    const [ catDetails, setCatDetails ] = useState([]);


    useEffect(() => {
        axios.get(_webapiadmin+"fetchsubcategory").then((result)=>{
          console.log(result.data.subCatList);
          setCatDetails(result.data.subCatList);
        });  
      }, [])

    const handleChange = (event)=>{
      setFile(event.target.files[0]);    
    }

    const handleSubmit = (event)=>{
        // setOutput("Form Submitted")
        event.preventDefault();
        var formData = new FormData();
        formData.append('title', title);
        formData.append('subcatnm', catName);
        formData.append('tenderdesc', tenDesc);
        formData.append('tenderdoc',file);
        formData.append('enddate', endDate);
        const config = {'content-type':'multipart/form-data'};
        axios.post(_webapiadmin+"launchtender", formData, config).then((result)=>{
            setOutput(result.data.output);
            setTitle("");
            setCatName("");
            setTenDesc("");
            setFile("");
            setEndDate("");
        }).catch((error)=>{
            console.log(error);
        });
      }

  return(
  
    <div>
        {/* Page Header Start */}
<div class="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
<div class="row py-3">
    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 class="display-4 text-white animated zoomIn">Launch Tender</h1>
        <a href="" class="h5 text-white">Admin Home</a>
        <i class="far fa-circle text-white px-2"></i>
        <a href="" class="h5 text-white">Launch Tender</a>
    </div>
</div>
</div>
{/* Page Header Start */}



{/* About Start */}
<div class="container-fluid py-2 wow fadeInUp">
    <div class="container py-2">
    <div class="container">
        <div class="row">
            {/* <div class="col-lg-5">
                <div
                    class="d-flex flex-column align-items-center justify-content-center bg-about rounded h-100 py-5 px-3">
                    <i class="fa fa-5x fa-award text-primary mb-4"></i>
                    <h1 class="display-2 text-white mb-2" data-toggle="counter-up">25</h1>
                    <h2 class="text-white m-0">Years Experience</h2>
                </div>
            </div> */}
            <div class="col-lg-12 pt-5 pb-lg-5">
                <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Launch Tender Page</h1>
                <h2>Launch Tender Here!!!</h2>
                <font style={{"color":"Green"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="title">Title:</label>
                        <input type="text" class="form-control" name="title" value={title} onChange={element=>setTitle(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="category">Category:</label>
                        <select class="form-control" value={catName} onChange={element=>setCatName(element.target.value)}>
                          <option>Select Category</option>
                          {
                            catDetails.map((row)=>(
                              <option>
                              {row.subcatnm}
                              </option>
                            ))
                          }
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="description">Tender Description:</label>
                        <input type="text" class="form-control" name="tenderdesc" value={tenDesc} onChange={element=>setTenDesc(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="tenderdoc">Tender Document:</label>
                        <input type="file" class="form-control" onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="enddate">End Date:</label>
                        <input type="date" class="form-control" name="enddate" value={endDate} onChange={element=>setEndDate(element.target.value)} />
                    </div>
                    
                    
                    <button type="submit" class="btn btn-success">Add Tender</button>
                </form>

            </div>
        </div>
    </div>
    </div>
</div>
{/* About End */}
</div>  
  )
}

export default Launchtender;