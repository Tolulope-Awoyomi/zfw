import React, { useContext } from "react";
import { UserContext } from "../components/context/user";
import { useNavigate, Link } from "react-router-dom";

function WasteFacilitator() {
    const { user, loggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    if (loggedIn) {
      return (
        <>
          <div>
            <br></br>
              <h3>Welcome Waste Facilitator, {user.name}!</h3>
          </div>
          <section className="page-header bg-tertiary">
            <div className="container">
              <div className="row">
                <div className="col-8 mx-auto text-center">
                  <h2 className="mb-3 text-capitalize">Our Services</h2>
                  <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                    <li className="list-inline-item"><Link to="/">Home</Link></li>
                    <li className="list-inline-item">/ &nbsp; <Link to="#">Food Waste Facilitator</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="has-shapes"></div>
          </section>
          <section className="section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="icon-box-item text-center col-lg-4 col-md-6 mb-4">
                  <div className="rounded shadow py-5 px-4">
                    <div className="icon"><i className="fas fa-recycle"></i></div>
                    <h3 className="mb-3">Waste Pickup Request Updates & History</h3>
                    <p className="mb-4">Displays a history of all previous requests made by the food waste facilitator.</p>
                    <Link className="btn btn-sm btn-outline-primary" to="/viewwastepickuprequests"><b>View</b> <i className="las la-arrow-right ms-1"></i></Link>
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

export default WasteFacilitator;
