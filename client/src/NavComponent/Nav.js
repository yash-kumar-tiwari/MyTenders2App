/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import './Nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Nav()
{

    const [ NavContent , setNavContent ] = useState();
    const [ TrackEmail , setTrackEmail ] = useState(localStorage.getItem("email"));

useEffect(()=>{
    setInterval(()=>{
           
if(localStorage.getItem("role")==="admin")
{
setNavContent(
    <div className="container-fluid position-relative p-0">
            {/* <!-- Navbar Start --> */}
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" className="navbar-brand p-0">
                <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Tenders</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a className="nav-item nav-link"><Link to={"/admin"}>Admin Home</Link></a>
                    <a className="nav-item nav-link"><Link to={"/admin/manageusers"}>Manage Users</Link></a>
                    
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Category</a>
                        <div className="dropdown-menu m-0">
                            <a className="dropdown-item"><Link to={"/admin/addcategory"}>Add Category</Link></a>
                            <a className="dropdown-item"><Link to={"/admin/addsubcategory"}>Add Sub Category</Link></a>
                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Tenders</a>
                        <div className="dropdown-menu m-0">
                        <a className="dropdown-item"><Link to={"/admin/launchtender"}>Launch Tender</Link></a>
                        <a className="dropdown-item"><Link to={"/admin/showappliedtenders"}>Show Applied Tenders</Link></a>
                        </div>
                    </div>

                    {/* <a className="nav-item nav-link"><Link to={"/admin/launchtender"}>Launch Tender</Link></a> */}
                    
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
                        <div className="dropdown-menu m-0">
                            <a className="dropdown-item"><Link to={"/admin/epadmin"}>Edit Profile</Link></a>
                            <a className="dropdown-item"><Link to={"/admin/cpadmin"}>Change Password</Link></a>
                        </div>
                    </div>

                    <a className="nav-item nav-link"><Link to={"/logout"}>Logout</Link></a>

                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="price.html" className="dropdown-item">Pricing Plan</a>
                            <a href="feature.html" className="dropdown-item">Our features</a>
                            <a href="team.html" className="dropdown-item">Team Members</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="quote.html" className="dropdown-item">Free Quote</a>
                        </div>
                    </div> */}
                </div>
                <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
            </div>
        </nav>
    {/* <!-- Navbar End -->             */}
    </div>

);    
}

else if(localStorage.getItem("role")==="user")
{
setNavContent(
    <div className="container-fluid position-relative p-0">
            {/* <!-- Navbar Start --> */}
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a className="navbar-brand p-0">
                <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Tenders</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                <a className="nav-item nav-link"><Link to={"/user"}>User Home</Link></a>
                <a className="nav-item nav-link"><Link to={"/user/viewtenders"}>View Tenders</Link></a>
                {/*<a className="nav-item nav-link"><Link to={"/service"}>Services</Link></a> */}
                {/* <Link><a  className="nav-item nav-link">Pricing</a></Link> */}
                {/* <a className="nav-item nav-link"><Link to={"/register"}>Register</Link></a>
                    <a className="nav-item nav-link"><Link to={"/contact"}>Contact</Link></a> */}
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
                        <div className="dropdown-menu m-0">
                            <a className="dropdown-item"><Link to={"/user/epuser"}>Edit Profile</Link></a>
                            <a className="dropdown-item"><Link to={"/user/cpuser"}>Change Password</Link></a>
                        </div>
                    </div>
                <a className="nav-item nav-link"><Link to={"/logout"}>Logout</Link></a>

                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                        <div className="dropdown-menu m-0">
                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                            <a href="detail.html" className="dropdown-item">Blog Detail</a>
                        </div>
                    </div> */}
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="price.html" className="dropdown-item">Pricing Plan</a>
                            <a href="feature.html" className="dropdown-item">Our features</a>
                            <a href="team.html" className="dropdown-item">Team Members</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="quote.html" className="dropdown-item">Free Quote</a>
                        </div>
                    </div> */}
                </div>
                <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
            </div>
        </nav>
    {/* <!-- Navbar End -->             */}
    </div>

);    
}             

else
{
setNavContent(
<div className="container-fluid position-relative p-0">
        {/* Navbar & Carousel Start */}
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Tenders</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <a className="nav-item nav-link active"><Link to='/' >Home</Link></a>
                <a className="nav-item nav-link"><Link to='/about' >About</Link></a>
                <a className="nav-item nav-link"><Link to='/contact' >Contact</Link></a>
                <a className="nav-item nav-link"><Link to='/service' >Service</Link></a>
                <a className="nav-item nav-link"><Link to='/register' >Register</Link></a>
                <a className="nav-item nav-link"><Link to='/login' >Login</Link></a>
                {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                    <div className="dropdown-menu m-0">
                        <a href="blog.html" className="dropdown-item">Blog Grid</a>
                        <a href="detail.html" className="dropdown-item">Blog Detail</a>
                    </div>
                </div> */}
                {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                        <a href="price.html" className="dropdown-item">Pricing Plan</a>
                        <a href="feature.html" className="dropdown-item">Our features</a>
                        <a href="team.html" className="dropdown-item">Team Members</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="quote.html" className="dropdown-item">Free Quote</a>
                    </div>
                </div> */}
            </div>
            <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
        </div>
    </nav>
        {/* Navbar & Carousel End */}
    </div>);    
}
    },2000);  
},[]);

    return(
        <div>

        {NavContent}
            
        </div>
    )

}

export default Nav;