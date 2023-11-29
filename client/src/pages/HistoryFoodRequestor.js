import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FoodRequestContext } from '../components/context/foodrequests';

function HistoryFoodRequestor() {
  const { fetchFoodRequests, foodRequests } = useContext(FoodRequestContext);
  
  useEffect(() => {
    fetchFoodRequests();
  }, []);

  if (!Array.isArray(foodRequests)) {
    return <div>Loading...</div>;
  }

  const isUpcoming = (pickupTime) => {
    const now = new Date();
    const pickupDate = new Date(pickupTime);
    return pickupDate > now;
  };
  
  return (
    <div>
      <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">Food Request Updates & History</h2>
              <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                <li className="list-inline-item"><Link to="/foodrequestor"> Food Requestor Services</Link></li>
                <li className="list-inline-item">/ &nbsp; <Link to="#">Food Request Updates & History</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content">
                <table className="TableOfContents">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}><b>Name</b></th>
                      <th style={{ textAlign: "center" }}><b>Quantity</b></th>
                      <th style={{ textAlign: "center" }}><b>Pickup Date</b></th>
                      <th style={{ textAlign: "center" }}><b>Food Business</b></th>
                      <th style={{ textAlign: "center" }}><b>Pickup Address</b></th>
                      {/* <th style={{ textAlign: "center" }}><b>Status</b></th> */}
                      <th style={{ textAlign: "center" }}><b>Pickup Schedule</b></th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodRequests.map((request, index) => (
                      <tr className="cart-item" key={index}>
                        <td style={{ textAlign: "center" }}>{request.item.name}</td> 
                        <td style={{ textAlign: "center" }}>{request.quantity}</td>
                        <td style={{ textAlign: "center" }}>{new Date(request.pickup_time).toLocaleDateString()}</td>
                        <td style={{ textAlign: "center" }}>{request.user_name}</td>
                        <td style={{ textAlign: "center" }}>{request.user_address}</td>
                        {/* <td style={{ textAlign: "center" }}>{request.status}</td> */}
                        <td style={{ textAlign: "center" }}>
                          {isUpcoming(request.pickup_time) ? "Upcoming Pickup" : "Past Pickup"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HistoryFoodRequestor;
