import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ViewWastePickupRequests() {
  const [wastePickupRequests, setWastePickupRequests] = useState([]);

  useEffect(() => {
    fetchWastePickupRequests();
  }, []);

  const fetchWastePickupRequests = async () => {
    try {
      const response = await fetch('/waste_pickup_requests');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setWastePickupRequests(data);
    } catch (error) {
      console.error('Error fetching waste pickup requests:', error);
    }
  };

  function getStatus(pickupDate, pickupTime) {
    const now = new Date();
    const formattedPickupDateTime = formatDateTime(pickupDate, pickupTime);
    const pickupDateTime = new Date(formattedPickupDateTime);
    return pickupDateTime < now ? 'Past Pickups' : 'Upcoming Pickups';
  }

  function formatDateTime(date, time) {
    // Assuming 'date' is in YYYY-MM-DD format and 'time' is in HH:MM format
    if (!date || !time) return '';
    return `${date}T${time}`;
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
            {wastePickupRequests.map((request, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{request.business_name}</td>
                <td style={{ textAlign: "center" }}>{request.email}</td>
                <td style={{ textAlign: "center" }}>{request.phone_number}</td>
                <td style={{ textAlign: "center" }}>{request.address}</td>
                <td style={{ textAlign: "center" }}>{request.waste_type}</td>
                <td style={{ textAlign: "center" }}>{request.quantity}</td>
                <td style={{ textAlign: "center" }}>{new Date(request.pickup_date).toLocaleDateString()}</td>
                <td style={{ textAlign: "center" }}>{request.pickup_time ? new Date(request.pickup_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A'}</td>
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
