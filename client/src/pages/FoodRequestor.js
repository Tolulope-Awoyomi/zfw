import React, { useContext } from "react";
import { UserContext } from "../components/context/user";
import { useNavigate, Link } from "react-router-dom";

function FoodRequestor() {
    const { user, loggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    if (loggedIn) {
      return (
        <>
          <div>
              <br></br>
              <h3>Welcome Food Requestor, {user.name}!</h3>
          </div>
          <section className="page-header bg-tertiary">
            <div className="container">
              <div className="row">
                <div className="col-8 mx-auto text-center">
                  <h2 className="mb-3 text-capitalize">Our Services</h2>
                  <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                    <li className="list-inline-item"><Link to="/">Home</Link></li>
                    <li className="list-inline-item">/ &nbsp; <Link to="#">Food Requestor</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="icon-box-item text-center col-lg-4 col-md-6 mb-4">
                  <div className="rounded shadow py-5 px-4">
                    <div className="icon"><i className="fas fa-search"></i></div>
                    <h3 className="mb-3">Search Food</h3>
                    <p className="mb-4">Enables food requestor users to easily search and discover food offerings within their area.</p>
                    <Link className="btn btn-sm btn-outline-primary" to="/foodsearch"><b>Search</b> <i className="las la-arrow-right ms-1"></i></Link>
                  </div>
                </div>
    
                <div className="icon-box-item text-center col-lg-4 col-md-6 mb-4">
                  <div className="rounded shadow py-5 px-4">
                    <div className="icon"><i className="fas fa-book"></i></div>
                    <h3 className="mb-3">Food Request Updates & History</h3>
                    <p className="mb-4">Displays live updates and history of all requests.</p>
                    <Link className="btn btn-sm btn-outline-primary" to="/foodupdateshistory"><b>View</b> <i className="las la-arrow-right ms-1"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      navigate("/loginform")
      return null
    }
  }

export default FoodRequestor;
