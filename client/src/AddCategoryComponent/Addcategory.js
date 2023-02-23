/* eslint-disable jsx-a11y/anchor-is-valid */
import './Addcategory.css'
import { useState } from 'react';
import axios from 'axios';
import { _webapiadmin } from '../apiURL';
 
function Addcategory()
{
  const [ output , setOutput ] = useState();
  const [ catName, setCatName ] = useState();
  const [ file, setFile ] = useState();

  const handleChange = (event)=>{
    setFile(event.target.files[0]);    
  }

  const handleSubmit = (event)=>{
    // setOutput("Form Submitted")
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('caticon',file);
    const config = {'content-type':'multipart/form-data'};
    axios.post(_webapiadmin+"addcategory", formData, config).then((result)=>{
      setCatName("");
      setFile[0]("");
      setOutput(result.data.output);
    });
  }

  return(
  
    <div>
    {/* Page Header Start */}
    <div className="container-fluid bg-primary py-3 bg-header" style={{"margin-bottom": "90px"}}>
      <div className="row py-3">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 className="display-4 text-white animated zoomIn">Add Category</h1>
        <a className="h5 text-white">Admin Home</a>
        <i className="far fa-circle text-white px-2"></i>
        <a className="h5 text-white">Add Category</a>
        </div>
      </div>
    </div>
    {/* Page Header Start */}

    <div className="container-fluid py-2 wow fadeInUp">
    <div className="container py-2">
      <div className="text-center">
        <h1 className="text-primary font-weight-semi-bold text-uppercase mb-3">Add Category</h1>

        <font style={{"color":"Green"}}>{output}</font>
          <form onSubmit={handleSubmit}>        
            <div className="form-group">
              <label for="category">Category Name:</label>
              <input type="text" className="form-control" value={catName} onChange={element=>setCatName(element.target.value)} />
            </div>
            <div className="form-group">
              <label for="catFile">Category Icon:</label>
              <input type="file" className="form-control" onChange={handleChange} />
            </div>

            <button className="btn btn-success">Add Category</button>
          </form>
      </div>
      </div>
    </div>
    </div>
    

  )
}

export default Addcategory;