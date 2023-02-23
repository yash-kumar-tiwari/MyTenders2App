/* eslint-disable jsx-a11y/anchor-is-valid */
import './Userhome.css'

function Userhome()
{
  return <div>
      {/* Page Header Start */}
      <div className="container-fluid bg-primary py-3 bg-header" style={{ "margin-bottom": "90px" }}>
        <div className="row py-3">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">User Home</h1>
            <a className="h5 text-white">User Home</a>
            <i className="far fa-circle text-white px-2" />
            <a className="h5 text-white">User Home</a>
          </div>
        </div>
      </div>
      {/* Page Header Start */}

      <div className="container-fluid py-2 wow fadeInUp">
        <div className="container py-2">
          {" "}<div className="text-center">
            <h1 className="text-primary font-weight-semi-bold text-uppercase mb-3">Welcome to User Panel</h1>
          </div>
        </div>
      </div>
    </div>;
}

export default Userhome;