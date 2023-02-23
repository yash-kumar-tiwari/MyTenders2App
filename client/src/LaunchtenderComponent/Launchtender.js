/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
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
    const [ tenAmount , setTenAmount ] = useState();
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
        formData.append('tenamount', tenAmount);
        formData.append('tenderdoc',file);
        formData.append('enddate', endDate);
        const config = {'content-type':'multipart/form-data'};
        axios.post(_webapiadmin+"launchtender", formData, config).then((result)=>{
            setOutput(result.data.output);
            setTitle("");
            setCatName("");
            setTenDesc("");
            setTenAmount("");
            setFile[0]("");
            setEndDate("");
        }).catch((error)=>{
            console.log(error);
        });
      }

  return(
  
    <div>
        {/* Page Header Start */}
<div className="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
<div className="row py-3">
    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 className="display-4 text-white animated zoomIn">Launch Tender</h1>
        <a className="h5 text-white">Admin Home</a>
        <i className="far fa-circle text-white px-2"></i>
        <a className="h5 text-white">Launch Tender</a>
    </div>
</div>
</div>
{/* Page Header Start */}



{/* About Start */}
<div className="container-fluid py-2 wow fadeInUp">
    <div className="container py-2">
    <div className="container">
        <div className="row">
            {/* <div className="col-lg-5">
                <div
                    className="d-flex flex-column align-items-center justify-content-center bg-about rounded h-100 py-5 px-3">
                    <i className="fa fa-5x fa-award text-primary mb-4"></i>
                    <h1 className="display-2 text-white mb-2" data-toggle="counter-up">25</h1>
                    <h2 className="text-white m-0">Years Experience</h2>
                </div>
            </div> */}
            <div className="col-lg-12 pt-5 pb-lg-5">
                <h1 className="text-primary font-weight-semi-bold text-uppercase mb-3">Launch Tender Page</h1>
                <h2>Launch Tender Here!!!</h2>
                <font style={{"color":"Green"}}>{output}</font>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="title">Title:</label>
                        <input type="text" className="form-control" name="title" value={title} onChange={element=>setTitle(element.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="category">Category:</label>
                        <select className="form-control" value={catName} onChange={element=>setCatName(element.target.value)}>
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
                    <div className="form-group">
                        <label for="description">Tender Description:</label>
                        <input type="text" className="form-control" name="tenderdesc" value={tenDesc} onChange={element=>setTenDesc(element.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="amount">Tender Amount:</label>
                        <input type="text" className="form-control" name="tenamount" value={tenAmount} onChange={element=>setTenAmount(element.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="tenderdoc">Tender Document:</label>
                        <input type="file" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="enddate">End Date:</label>
                        <input type="date" className="form-control" name="enddate" value={endDate} onChange={element=>setEndDate(element.target.value)} />
                    </div>
                    
                    
                    <button type="submit" className="btn btn-success">Add Tender</button>
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