import React from "react";

const Navigation = () => {
  return (
    <div className="container-fluid sticky-top">
      <div id='navBarCentred' className="container">
        <nav className="navbar navbar-expand-lg  navbar-light py-2 py-lg-0">
          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
   
              <a href="/" className="nav-item nav-link active">
                  Home
                </a>
               
                <a href="/order" className="nav-item nav-link">
                  Create a Booking
                </a>
               
                <a href="/staff" className="nav-item nav-link">
                  Your Bookings
                </a>     
            </div>
            <div className=" ps-4 d-none d-lg-block">
              <button type="button" className="btn btn-sm p-0">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navigation;
