/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './NavCarousal.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function NavCarousal()
{

    const [ BannerContent , setBannerContent ] = useState();

    useEffect(()=>{
        setInterval(()=>{
           
if(localStorage.getItem("role")==="admin")
{
    setBannerContent();    
}
else if(localStorage.getItem("role")==="user")
{
    setBannerContent();
}
else
{
    setBannerContent(
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

    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="w-100" src="../../../assets/img/carousel-1.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{"max-width": "900px"}}>
                        <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                        <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                        <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="w-100" src="../../../assets/img/carousel-2.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" />
                    <div className="p-3" style={{"max-width": "900px"}}>
                        <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                        <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                        <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        {/* Navbar & Carousel End */}
    </div>
    );    
}
        },2000);  
       },[]);

    return(
        <div>

        {BannerContent}            

        </div>
    )

}

export default NavCarousal;