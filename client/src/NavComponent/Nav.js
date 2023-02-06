import './Nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Nav()
{

    const [ NavContent , setNavContent ] = useState();
    const [ TrackEmail , setTrackEmail ] = useState(localStorage.getItem("email"));

useEffect(()=>{
    setInterval(()=>{
           
if(localStorage.getItem("role")=="admin")
{
setNavContent(
    <div class="container-fluid position-relative p-0">
            {/* <!-- Navbar Start --> */}
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" class="navbar-brand p-0">
                <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>Startup</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a class="nav-item nav-link"><Link to={"/admin"}>Admin Home</Link></a>
                    <a class="nav-item nav-link"><Link to={"/admin/manageusers"}>Manage Users</Link></a>
                    
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Category</a>
                        <div class="dropdown-menu m-0">
                            <a class="dropdown-item"><Link to={"/admin/addcategory"}>Add Category</Link></a>
                            <a class="dropdown-item"><Link to={"/admin/addsubcategory"}>Add Sub Category</Link></a>
                        </div>
                    </div>

                    <a class="nav-item nav-link"><Link to={"/admin/launchtender"}>Launch Tender</Link></a>
                    
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
                        <div class="dropdown-menu m-0">
                            <a class="dropdown-item"><Link to={"/admin/epadmin"}>Edit Profile</Link></a>
                            <a class="dropdown-item"><Link to={"/admin/cpadmin"}>Change Password</Link></a>
                        </div>
                    </div>

                    <a class="nav-item nav-link"><Link to={"/logout"}>Logout</Link></a>

                    {/* <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu m-0">
                            <a href="price.html" class="dropdown-item">Pricing Plan</a>
                            <a href="feature.html" class="dropdown-item">Our features</a>
                            <a href="team.html" class="dropdown-item">Team Members</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="quote.html" class="dropdown-item">Free Quote</a>
                        </div>
                    </div> */}
                </div>
                <button type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
            </div>
        </nav>
    {/* <!-- Navbar End -->             */}
    </div>

);    
}

else if(localStorage.getItem("role")=="user")
{
setNavContent(
    <div class="container-fluid position-relative p-0">
            {/* <!-- Navbar Start --> */}
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a class="navbar-brand p-0">
                <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>Startup</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                <a class="nav-item nav-link"><Link to={"/user"}>User Home</Link></a>
                <a class="nav-item nav-link"><Link to={"/user/viewtenders"}>View Tenders</Link></a>
                {/*<a class="nav-item nav-link"><Link to={"/service"}>Services</Link></a> */}
                {/* <Link><a  class="nav-item nav-link">Pricing</a></Link> */}
                {/* <a class="nav-item nav-link"><Link to={"/register"}>Register</Link></a>
                    <a class="nav-item nav-link"><Link to={"/contact"}>Contact</Link></a> */}
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
                        <div class="dropdown-menu m-0">
                            <a class="dropdown-item"><Link to={"/user/epuser"}>Edit Profile</Link></a>
                            <a class="dropdown-item"><Link to={"/user/cpuser"}>Change Password</Link></a>
                        </div>
                    </div>
                <a class="nav-item nav-link"><Link to={"/logout"}>Logout</Link></a>

                    {/* <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                        <div class="dropdown-menu m-0">
                            <a href="blog.html" class="dropdown-item">Blog Grid</a>
                            <a href="detail.html" class="dropdown-item">Blog Detail</a>
                        </div>
                    </div> */}
                    {/* <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu m-0">
                            <a href="price.html" class="dropdown-item">Pricing Plan</a>
                            <a href="feature.html" class="dropdown-item">Our features</a>
                            <a href="team.html" class="dropdown-item">Team Members</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="quote.html" class="dropdown-item">Free Quote</a>
                        </div>
                    </div> */}
                </div>
                <button type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
            </div>
        </nav>
    {/* <!-- Navbar End -->             */}
    </div>

);    
}             

else
{
setNavContent(
<div class="container-fluid position-relative p-0">
        {/* Navbar & Carousel Start */}
    <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>Startup</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <a class="nav-item nav-link active"><Link to='/' >Home</Link></a>
                <a class="nav-item nav-link"><Link to='/about' >About</Link></a>
                <a class="nav-item nav-link"><Link to='/contact' >Contact</Link></a>
                <a class="nav-item nav-link"><Link to='/service' >Service</Link></a>
                <a class="nav-item nav-link"><Link to='/register' >Register</Link></a>
                <a class="nav-item nav-link"><Link to='/login' >Login</Link></a>
                {/* <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                    <div class="dropdown-menu m-0">
                        <a href="blog.html" class="dropdown-item">Blog Grid</a>
                        <a href="detail.html" class="dropdown-item">Blog Detail</a>
                    </div>
                </div> */}
                {/* <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu m-0">
                        <a href="price.html" class="dropdown-item">Pricing Plan</a>
                        <a href="feature.html" class="dropdown-item">Our features</a>
                        <a href="team.html" class="dropdown-item">Team Members</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="quote.html" class="dropdown-item">Free Quote</a>
                    </div>
                </div> */}
            </div>
            <button type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
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