import React, { useState, useEffect } from 'react';

function HistoryFoodBusiness() {
  const [foodRequests, setFoodRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodRequests = async () => {
      try {
        const response = await fetch('/allfoodrequests');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFoodRequests(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
      setLoading(false);
    };

    fetchFoodRequests();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Food Request History</h2>
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Business Name</th>
            <th>Type of Food</th>
            <th>Quantity</th>
            <th>Pickup Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {foodRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.businessName}</td>
              <td>{request.foodType}</td>
              <td>{request.quantity}</td>
              <td>{new Date(request.pickupDate).toLocaleDateString()}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryFoodBusiness;
