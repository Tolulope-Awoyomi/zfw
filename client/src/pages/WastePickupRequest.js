import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemsContext } from '../components/context/items';
import { WastePickupRequestContext } from '../components/context/WastePickupRequestContext';
import { FormField, Error } from '../styles';

function HistoryWastePickup() {
  const { setWasteItems, wasteItems, fetchWasteItems, scheduledWastes, setScheduledWastes } = useContext(ItemsContext);
  const { wastePickupRequest, handleFormChange, submitWastePickupRequest } = useContext(WastePickupRequestContext);
  const [selectedWaste, setSelectedWaste] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errorsList, setErrorsList] = useState([]);
  const [formData, setFormData] = useState({
    business_name: '',
    email: '',
    phone_number: '',
    address: '',
    waste_type: '',
    quantity: '',
    pickup_date: '',
    pickup_time: '',
    comments: ''
  });

  useEffect(() => {
    fetchWasteItems();
    fetchCurrentUserDetails();
  }, []);

  const fetchCurrentUserDetails = async () => {
    try {
      const response = await fetch('/current_user_details');
      if (!response.ok) throw new Error('Network response was not ok');
      const userData = await response.json();
      setFormData({
        ...formData,
        business_name: userData.business_name,
        email: userData.email,
        phone_number: userData.phone_number,
        address: userData.address
      });
    } catch (error) {
      setErrorsList(prevErrors => [...prevErrors, error.message || "Kindly fill all details"]);
    }
  };

  const handleScheduleClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePickupDate = () => {
    const today = new Date();
    const pickupDate = new Date(formData.pickup_date);
    return pickupDate >= today;
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.business_name) errors.push("Business name is required.");
    if (!formData.email) errors.push("Email is required.");
    if (!formData.phone_number) errors.push("Phone number is required.");
    if (!formData.address) errors.push("Address is required.");
    if (!formData.waste_type) errors.push("Waste type is required.");
    if (!formData.quantity) errors.push("Quantity is required.");
    if (!formData.pickup_date) errors.push("Pickup date is required.");
    if (!formData.pickup_time) errors.push("Pickup time is required.");
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (formErrors.length > 0) {
      setErrorsList(formErrors);
      return;
    }

    if (!validatePickupDate()) {
      setErrorsList(['Pickup date cannot be in the past. Must be at least 24 hours from now.']);
      return;
    }

    const payload = {
      waste_pickup_request: {
        ...formData,
        item_id: selectedWaste, 
        status: 'Scheduled'
      }
    };

    try {
      const response = await fetch('/waste_pickup_requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
  
      if (response.ok) {
        setWasteItems(prevItems => prevItems.filter(item => item.id !== selectedWaste));
        setShowPopup(true);
        setShowForm(false);
      } else {
        throw new Error('Failed to submit waste pickup request');
      }
      
    } catch (error) {
      setErrorsList(prevErrors => [...prevErrors, error.message || "Failed to submit waste pickup request"]);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedWaste(null); 
  };

  const renderWasteSelection = (waste) => {
    if (scheduledWastes[waste.id] || waste.status === 'Scheduled') {
      return <span>Scheduled</span>;
    }

    return (
      <input
        type="radio"
        name="wasteSelection"
        checked={selectedWaste === waste.id}
        onChange={() => setSelectedWaste(waste.id)}
      />
    );
  };

  return (
    <div>
      {/* Page Header Section */}
      <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">Waste Pick-Up Request</h2>
              <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                <li className="list-inline-item"><Link to="/foodbusiness">Food Business Services</Link></li>
                <li className="list-inline-item">/ &nbsp; <Link to="#">Waste Pick-Up</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waste List Section */}
      <div className="container">
        <div className="col-5 mx-auto text-center">
          <h4 style={{ textAlign: "center" }}>Available Waste for Pick-Up</h4>
          <table className="table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Name</th>
                <th style={{ textAlign: "center" }}>Quantity</th>
                <th style={{ textAlign: "center" }}>Select</th>
              </tr>
            </thead>
            <tbody>
              {wasteItems.map((waste, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{waste.name}</td>
                  <td style={{ textAlign: "center" }}>{waste.quantity}</td>
                  <td style={{ textAlign: "center" }}>{renderWasteSelection(waste)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!showForm && (
            <div className="center-button">
              <button className="btn btn-primary" onClick={handleScheduleClick}>
                Schedule Waste Pickup
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Waste Pickup Form */}
      {showForm && (
        <div className="container">
          <div className="form-container bg-white shadow rounded-lg p-3">
          <div className="col-lg-10">
              <div className="shadow rounded p-5 bg-white">
          <h4>Waste Pickup Form </h4>
          <form onSubmit={handleSubmit}>
          <div className="form-group mb-4 pb-2">
                          <label htmlFor="business_name" className="form-label">Food Business Name</label>
                          <input
                            type="text"
                            className="form-control shadow-none"
                            id="business_name"
                            name="business_name"
                            value={formData.business_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control shadow-none"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="phone_number" className="form-label">Phone Number</label>
                          <input
                            type="tel"
                            className="form-control shadow-none"
                            id="phone_number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="address" className="form-label">Pick-Up Address</label>
                          <input
                            type="text"
                            className="form-control shadow-none"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="waste_type" className="form-label">Type of Waste</label>
                          <select
                            className="form-control shadow-none"
                            id="waste_type"
                            name="waste_type"
                            value={formData.waste_type}
                            onChange={handleChange}
                          >
                            <option value="">Select Type</option>
                            <option value="organic">Organic Waste</option>
                            <option value="recyclable">Recyclable Waste</option>
                            <option value="non-recyclable">Non-Recyclable Waste</option>
                          </select>
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="quantity" className="form-label">Estimated Quantity (lbs)</label>
                          <input
                            type="number"
                            className="form-control shadow-none"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="pickup_date" className="form-label">Preferred Pick-Up Date</label>
                          <input
                            type="date"
                            className="form-control shadow-none"
                            id="pickup_date"
                            name="pickup_date"
                            value={formData.pickup_date}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="pickup_time" className="form-label">Preferred Pick-Up Time</label>
                          <input
                            type="time"
                            className="form-control shadow-none"
                            id="pickup_time"
                            name="pickup_time"
                            value={formData.pickup_time}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-4 pb-2">
                          <label htmlFor="comments" className="form-label">Additional Comments</label>
                          <textarea
                            className="form-control shadow-none"
                            id="comments"
                            name="comments"
                            rows="3"
                            value={formData.comments}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        {errorsList.length > 0 && (
                          <Error className="alert alert-danger" role="alert">
                            {errorsList.map((error, index) => (
                              <p key={index}>{error}</p>
                            ))}
                          </Error>
                        )}
                       <button className="btn btn-primary w-100" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup for successful submission */}
      {showPopup && (
        <FormField>
          <h6>Pickup request submitted successfully!</h6>
          <button onClick={closePopup} className="schedule-button">Close</button>
        </FormField>
      )}
    </div>
  );
}

export default HistoryWastePickup;