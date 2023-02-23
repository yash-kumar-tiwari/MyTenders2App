/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import './Header.css';
import { useState, useEffect } from 'react';

function Header()
{

    const [ TrackEmail , setTrackEmail ] = useState(localStorage.getItem("email"));

    const [ HeaderContent , setHeaderContent ] = useState();

    useEffect(()=>{
        setInterval(()=>{
           
if(localStorage.getItem("role")==="admin" || localStorage.getItem("role")==="user")
{
    setHeaderContent(
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
            {/* Topbar Start */}
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{"height": "45px"}}>
                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>Collectorate Square, Indore (M.P.), India</small>
                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+91 XXXXX-XXXXX</small>
                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>{localStorage.getItem("email")}</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{"height": "45px"}}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    {/* Topbar End */}
    </div>
    );    
}
else
{
    setHeaderContent(
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
            {/* Topbar Start */}
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{"height": "45px"}}>
                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>Collectorate Square, Indore (M.P.), India</small>
                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+91 XXXXX-XXXXX</small>
                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>mp-e-tender@gov.in</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{"height": "45px"}}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    {/* Topbar End */}
    </div>
    );    
}
        },2000);  
       },[]);



    return(
        <div>

        {HeaderContent}
    

        </div>
    )

}

export default Header;