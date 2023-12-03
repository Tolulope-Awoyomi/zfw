import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ItemsContext } from '../components/context/items';
import { FoodRequestContext } from '../components/context/foodrequests';

function FoodSearch() {
  const { items, fetchDonationItems, updateItem } = useContext(ItemsContext);
  const { addFoodRequest } = useContext(FoodRequestContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItems, setSelectedItems] = useState(new Map());
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [pickupQuantities, setPickupQuantities] = useState({});
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDonationItems();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleItemCheck = (itemId, isChecked) => {
    const newSelectedItems = new Map(selectedItems);
    if (isChecked) {
      newSelectedItems.set(itemId, true);
      setPickupQuantities({ ...pickupQuantities, [itemId]: 1 });
    } else {
      newSelectedItems.delete(itemId);
      const newQuantities = { ...pickupQuantities };
      delete newQuantities[itemId];
      setPickupQuantities(newQuantities);
    }
    setSelectedItems(newSelectedItems);
  };

  const handleQuantityChange = (itemId, quantity) => {
    setPickupQuantities({ ...pickupQuantities, [itemId]: quantity });
  };

  const handleScheduleClick = () => {
    setShowScheduleForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pickupDate || !pickupTime) {
      alert("Please select a pickup date and time.");
      return;
    }

    const today = new Date();
    const selectedDateTime = new Date(pickupDate + 'T' + pickupTime);

    if (selectedDateTime < today) {
      alert("Pickup date and time cannot be in the past.");
      return;
    }

    const newRequests = Array.from(selectedItems.keys())
      .filter(itemId => selectedItems.get(itemId))
      .map(itemId => {
        const quantity = parseInt(pickupQuantities[itemId]);
        const item = items.find(it => it.id === parseInt(itemId));

        if (!quantity || isNaN(quantity) || quantity <= 0) {
          alert(`Invalid quantity for item: ${item.name}`);
          return null;
        }

        if (item && item.quantity >= quantity) {
          updateItem({ ...item, quantity: item.quantity - quantity });
          return {
            item_id: item.id,
            quantity: quantity,
            pickup_time: selectedDateTime.toISOString(),
          };
        } else {
          alert(`Not enough stock for item: ${item.name}`);
          return null;
        }
      }).filter(request => request !== null);

    if (newRequests.length > 0) {
      newRequests.forEach(addFoodRequest);
      navigate("/foodupdateshistory");
      setShowScheduleForm(false);
    }
  };

  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const getTodayDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  };

  const filteredItems = Array.isArray(items) ? items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || item.category === selectedCategory)
  ) : [];


  return (
    <div>
      <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">Food Search</h2>
              <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                <li className="list-inline-item"><Link to="/foodrequestor">Food Requestor Services</Link></li>
                <li className="list-inline-item">/ &nbsp; <Link to="#">Food Search</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-sm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="mb-5">
                <h3 className="mb-4" style={{ lineHeight: 1.5 }}>Search Available Food</h3>
                <div className="row">
                  <div className="col-5 mx-auto text-center">
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control shadow-none"
                        placeholder="Search for food.."
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                    </div>
                  </div>
                  <div className="col-5 mx-auto text-center">
                    <div className="input-group">
                      <select
                        className="form-control shadow-none"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                      >
                        <option value="">All Categories</option>
                        <option value="snacks_sides">Snacks & Sides</option>
                        <option value="vegetarian_vegan">Vegetarian & Vegan Dishes</option>
                        <option value="sandwishes_wraps">Sandwishes & Wraps</option>
                        <option value="soups_stew">Soups & Stew</option>
                        <option value="seafood">Seafood</option>
                        <option value="meals">Prepared Meals</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="bread_pastries">Bread & Pastries</option>
                        <option value="diary">Dairy Products</option>
                        <option value="desser">Dessert</option>
                        <option value="drinks">Drinks & Beverages</option>
                        <option value="fruits">Fruits</option>
                        <option value="grains_cereals">Grains & Cereals</option>
                        <option value="meats">Meats & Poultry</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}><b>Select</b></th>
                    <th style={{ textAlign: "center" }}><b>Item Name</b></th>
                    <th style={{ textAlign: "center" }}><b>Quantity</b></th>
                    <th style={{ textAlign: "center" }}><b>Expiration Date</b></th>
                    <th style={{ textAlign: "center" }}><b>Food Business Name</b></th>
                    <th style={{ textAlign: "center" }}><b>Food Business Address</b></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item) => (
                    <tr key={item.id}>
                      <td style={{ textAlign: "center" }}>
                        <input
                          type="checkbox"
                          checked={selectedItems.get(item.id) || false}
                          onChange={(e) => handleItemCheck(item.id, e.target.checked)}
                        />
                      </td>
                      <td style={{ textAlign: "center" }}>{item.name}</td>
                      <td style={{ textAlign: "center" }}>{item.quantity}</td>
                      <td style={{ textAlign: "center" }}>{formatDateForInput(item.expiration_date)}</td>
                      <td style={{ textAlign: "center" }}>{item.user.name}</td>
                      <td style={{ textAlign: "center" }}>{item.user.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="button-container">
                <button onClick={handleScheduleClick} className="btn btn-primary">
                  Schedule Pickup
                </button>
              </div>

              {showScheduleForm && (
                <form onSubmit={handleSubmit}>
                  {Array.from(selectedItems.keys()).map(itemId => {
                    const itemName = items.find(item => item.id === parseInt(itemId))?.name;
                    return (
                      <div key={itemId}>
                        <label>Quantity for {itemName}:</label>
                        <input
                          type="number"
                          value={pickupQuantities[itemId]}
                          onChange={(e) => handleQuantityChange(itemId, e.target.value)}
                          min="1"
                        />
                      </div>
                    );
                  })}
                  <label>Pickup Date:</label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    min={getTodayDate()}
                  />
                  <label>Pickup Time:</label>
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                  />
                  <button type="submit">Confirm Pickup</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodSearch;
