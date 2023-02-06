import './App.css';
import { Routes, Route } from 'react-router-dom';

//import components
import Header from './HeaderComponent/Header';
import NavCarousal from './NavCarousalComponent/NavCarousal';
import Nav from './NavComponent/Nav';
import Main from './MainComponent/Main';
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import Logout from './LogoutComponent/Logout';
import Footer from './FooterComponent/Footer';
import Verifyuser from './VerifyuserComponent/Verifyuser';
import Editprofile from './EditprofileComponent/Editprofile';
import Changepassword from './ChangepasswordComponent/Changepassword';

//import Admin Components
import Adminhome from './AdminhomeComponent/Adminhome';
import Manageusers from './ManageusersComponent/Manageusers';
import Viewprofile from './ViewprofileComponent/Viewprofile';
import Addcategory from './AddCategoryComponent/Addcategory';
import Addsubcategory from './AddSubCategoryComponent/Addsubcategory';
import Launchtender from './LaunchtenderComponent/Launchtender';

//import User Components
import Userhome from './UserhomeComponent/Userhome';
import Viewtenders from './ViewtendersComponent/Viewtenders';
import Viewsubcategory from './ViewsubcategoryComponent/Viewsubcategory';
import Showtenders from './ShowtendersComponent/Showtenders';
import Applytenders from './ApplytendersComponent/Applytenders';

function App() {
  return (
    <div>
    {/* Spinner Start */}
    {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner"></div>
    </div> */}
    {/* Spinner End */}

    {/* Full Screen Search Start */}
    <div class="modal fade" id="searchModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{"background": "rgba(9, 30, 62, .7)"}}>
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center">
                    <div class="input-group" style={{"max-width": "600px"}}>
                        <input type="text" class="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                        <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Full Screen Search End */}

    <Header/>

    <Routes>
        <Route path='/' element={<NavCarousal/>}></Route>
    </Routes>

    {/* NavComponent Loading */}
    <Routes>
        <Route path='/' element={<Nav/>}></Route>
        <Route path='/about' element={<Nav/>}></Route>
        <Route path='/contact' element={<Nav/>}></Route>
        <Route path='/service' element={<Nav/>}></Route>
        <Route path='/register' element={<Nav/>}></Route>
        <Route path='/login' element={<Nav/>}></Route>
        <Route path="/verifyuser/:email" element={<Nav />} ></Route>
        <Route path="/logout" element={<Nav />} ></Route>
        <Route path="/admin" element={<Nav />} ></Route>
        <Route path="/admin/manageusers" element={<Nav />} ></Route>
        <Route path="/admin/viewprofile" element={<Viewprofile />} ></Route>
        <Route path="/admin/addcategory" element={<Nav />} ></Route>
        <Route path="/admin/addsubcategory" element={<Nav />} ></Route>
        <Route path="/admin/launchtender" element={<Nav />} ></Route>
        <Route path="/admin/epadmin" element={<Nav />} ></Route>
        <Route path="/admin/cpadmin" element={<Nav />} ></Route>
        <Route path="/user/epuser" element={<Nav />} ></Route>
        <Route path="/user/cpuser" element={<Nav />} ></Route>
        <Route path="/user" element={<Nav />} ></Route>
        <Route path="/user/viewtenders" element={<Nav />} ></Route>
        <Route path="/user/viewsubcategory/:catnm" element={<Nav />} ></Route>
        <Route path="/user/showtenders/:subcatnm" element={<Nav />} ></Route>
        <Route path="/user/applytender/:tenid" element={<Nav />} ></Route>       
    </Routes>
    
    {/* Components Loading */}
    <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/verifyuser/:email" element={<Verifyuser />} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/admin" element={<Adminhome />} ></Route>
        <Route path="/admin/manageusers" element={<Manageusers />} ></Route>
        <Route path="/admin/viewprofile/:_id" element={<Viewprofile />} ></Route>
        <Route path="/admin/addcategory" element={<Addcategory />} ></Route>
        <Route path="/admin/addsubcategory" element={<Addsubcategory />} ></Route>
        <Route path="/admin/launchtender" element={<Launchtender />} ></Route>
        <Route path="/admin/epadmin" element={<Editprofile />} ></Route>
        <Route path="/admin/cpadmin" element={<Changepassword />} ></Route>
        <Route path="/user/epuser" element={<Editprofile />} ></Route>
        <Route path="/user/cpuser" element={<Changepassword />} ></Route>
        <Route path="/user" element={<Userhome />} ></Route>
        <Route path="/user/viewtenders" element={<Viewtenders />} ></Route>
        <Route path="/user/viewsubcategory/:catnm" element={<Viewsubcategory />} ></Route>
        <Route path="/user/showtenders/:subcatnm" element={<Showtenders />} ></Route>
        <Route path="/user/applytender/:tenid" element={<Applytenders />} ></Route>
        {/* <Route path="/user/viewsubcategory/:catnm/:subcatnm" element={<Applytenders />} ></Route> */}
    </Routes>
    
    <Footer/>


    

    {/* Back to Top */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>

    </div>
  );
}

export default App;
