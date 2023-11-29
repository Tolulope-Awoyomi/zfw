import React, { useContext } from "react";
import { UserContext } from "../components/context/user";
import { useNavigate, Link } from "react-router-dom";

function FoodBusinessServices() {
    const { user, loggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    function navigateToAddItemPage() {
      navigate("/additem")
    }
    function navigateToInventoryPage() {
      navigate("/inventory")
    }
    function navigateToWastePickupPage() {
      navigate("/wastepickuprequest")
    }
    function navigateToDonatedFoodHistoryPage() {
      navigate("/donatedfoodhistory")
    }

    if (loggedIn) {
      return (
        <>
          <div>
            <br></br>
              <h3>Welcome Food Business, {user.name}!</h3>
          </div>
          <section className="page-header bg-tertiary">
            <div className="container">
              <div className="row">
                <div className="col-8 mx-auto text-center">
                  <h2 className="mb-3 text-capitalize">Our Services</h2>
                  <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                    <li className="list-inline-item"><Link to="/">Home</Link></li>
                    <li className="list-inline-item">/ &nbsp; <Link to="#">Food Business</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="row justify-content-center">
                {/* Icon Box Item 1 */}
                <div className="icon-box-item text-center col-lg-4 col-md-6 mb-4">
                  <div className="rounded shadow py-5 px-4">
                    <div className="icon"><i className="fas fa-plus"></i></div>
                    <h3 className="mb-3">Add Item</h3>
                    <p className="mb-4">Allows food business to submit food donations, ensuring they find their way to those in need.</p>
                    <button className="btn btn-sm btn-outline-primary" onClick={navigateToAddItemPage}><b>Add</b><i className="las la-arrow-right ms-1"></i></button>
                  </div>
                </div>
                {/* Icon Box Item 2 */}
                <div className="icon-box-item text-center col-lg-4 col-md-6 mb-4">
                  <div className="rounded shadow py-5 px-4">
                    <div className="icon"><i className="fas fa-dolly"></i></div>
                    <h3 className="mb-3">Inventory</h3>
                    <p className="mb-4">The gateway for food business to efficiently track their entire stock donations inventory.</p>
                    <button className="btn btn-sm btn-outline-primary" onClick={navigateToInventoryPage}><b>View</b> <i className="las la-arrow-right ms-1"></i></button>
                  </div>
                </div>
                {/* Icon Box Item 3 */}
                <div className="icon-box-item text-center col-lg-4 col-md-6 mb-4">
                  <div className="rounded shadow py-5 px-4">
                    <div className="icon"><i className="fas fa-recycle"></i></div>
                    <h3 className="mb-3">Waste Pickup</h3>
                    <p className="mb-4">Allows food business users to effortlessly store data related to the pickup of disposal food waste.</p>
                    <button className="btn btn-sm btn-outline-primary" onClick={navigateToWastePickupPage}><b>Schedule</b> <i className="las la-arrow-right ms-1"></i></button>
                  </div>
                </div>
                {/* Icon Box Item 4 */}
                {/* <div className="icon-box-item text-center col-lg-4 col-md-6 mb-4">
                  <div className="rounded shadow py-5 px-4">
                    <div className="icon"><i className="fas fa-book"></i></div>
                    <h3 className="mb-3">Food Request Updates & History</h3>
                    <p className="mb-4">Displays live updates and history of all previous requests made by the food business, offering an overview of past interactions.</p>
                    <button className="btn btn-sm btn-outline-primary" onClick={navigateToDonatedFoodHistoryPage}><b>View</b> <i className="las la-arrow-right ms-1"></i></button>
                  </div>
                </div> */}
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

export default FoodBusinessServices;
