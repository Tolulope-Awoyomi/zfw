import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ViewWastePickupRequests() {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    fetch('/waste_pickup_requests') 
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setRequests(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function getStatus(pickupDate, pickupTime) {
    const now = new Date();
    const pickupDateTime = new Date(`${pickupDate}`);
    if (pickupDateTime < now) {
      return 'Past Pickups';
    } else {
      return 'Upcoming Pickups';
    }
  }
  
  
  

  return (
    <div>
      {/* Page Header Section */}
      <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">Waste Pick-Up Requests</h2>
              <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                <li className="list-inline-item"><Link to="/wastefacilitator">Waste Facilitator Services</Link></li>
                <li className="list-inline-item">/ &nbsp; <Link to="#">View Requests</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requests Table */}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Business Name</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Phone Number</th>
              <th style={{ textAlign: "center" }}>Address</th>
              <th style={{ textAlign: "center" }}>Waste Type</th>
              <th style={{ textAlign: "center" }}>Weight (lbs)</th>
              <th style={{ textAlign: "center" }}>Pickup Date</th>
              <th style={{ textAlign: "center" }}>Pickup Time</th>
              <th style={{ textAlign: "center" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{request.business_name}</td>
                <td style={{ textAlign: "center" }}>{request.email}</td>
                <td style={{ textAlign: "center" }}>{request.phone_number}</td>
                <td style={{ textAlign: "center" }}>{request.address}</td>
                <td style={{ textAlign: "center" }}>{request.waste_type}</td>
                <td style={{ textAlign: "center" }}>{request.quantity}</td>
                <td style={{ textAlign: "center" }}>{new Date(request.pickup_date).toLocaleDateString()}</td>
                <td style={{ textAlign: "center" }}>{new Date(request.pickup_time).toLocaleTimeString()}</td>
                <td style={{ textAlign: "center" }}>
                  {getStatus(request.pickup_date, request.pickup_time)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewWastePickupRequests;
