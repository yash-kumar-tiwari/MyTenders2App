import './NavCarousal.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function NavCarousal()
{

    const [ BannerContent , setBannerContent ] = useState();

    useEffect(()=>{
        setInterval(()=>{
           
if(localStorage.getItem("role")=="admin")
{
    setBannerContent();    
}
else if(localStorage.getItem("role")=="user")
{
    setBannerContent();
}
else
{
    setBannerContent(
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

    <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="../../../assets/img/carousel-1.jpg" alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" style={{"max-width": "900px"}}>
                        <h5 class="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                        <h1 class="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                        <a href="quote.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                        <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="w-100" src="../../../assets/img/carousel-2.jpg" alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center" />
                    <div class="p-3" style={{"max-width": "900px"}}>
                        <h5 class="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                        <h1 class="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                        <a href="quote.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                        <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
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