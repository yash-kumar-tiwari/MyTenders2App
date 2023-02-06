import './Userhome.css'

function Userhome()
{
  return <div>
      {/* Page Header Start */}
      <div class="container-fluid bg-primary py-3 bg-header" style={{ "margin-bottom": "90px" }}>
        <div class="row py-3">
          <div class="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 class="display-4 text-white animated zoomIn">User Home</h1>
            <a href="" class="h5 text-white">
              User Home
            </a>
            <i class="far fa-circle text-white px-2" />
            <a href="" class="h5 text-white">
              User Home
            </a>
          </div>
        </div>
      </div>
      {/* Page Header Start */}

      <div class="container-fluid py-2 wow fadeInUp">
        <div class="container py-2">
          {" "}<div class="text-center">
            <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Welcome to User Panel</h1>
          </div>
        </div>
      </div>
    </div>;
}

export default Userhome;