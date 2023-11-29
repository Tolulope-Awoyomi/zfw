import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ItemsContext } from '../components/context/items';

function AddItem() {
  const { addItem } = useContext(ItemsContext);
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    purchase_date: '',
    expiration_date: '',
    category: 'meals',
    item_type: 'donation'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    navigate('/inventory');
  };

  return (
    <>
      <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">Add Items</h2>
              <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                <li className="list-inline-item">&nbsp; <Link to="/foodbusiness">Food Business Services</Link></li>
                <li className="list-inline-item">/ &nbsp; <Link to="#">Register Items</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className=" form-container bg-white shadow rounded-lg p-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="itemName">Item Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="itemName"
                  name="name"
                  value={newItem.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="itemQuantity">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="itemQuantity"
                  name="quantity"
                  value={newItem.quantity}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="purchase_date">Purchase/Made Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="purchase_date"
                  name="purchase_date"
                  value={newItem.purchase_date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="expiration_date">Expiration Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="expiration_date"
                  name="expiration_date"
                  value={newItem.expiration_date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="itemCategory">Category</label>
                <select
                  className="form-control"
                  id="itemCategory"
                  name="category"
                  value={newItem.category}
                  onChange={handleChange}
                  required
                >
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

              <div className="form-group mb-3">
                <label htmlFor="item_type">Item Type</label>
                <select
                  className="form-control"
                  id="item_type"
                  name="item_type"
                  value={newItem.item_type}
                  onChange={handleChange}
                  required
                >
                  <option value="donation">Donation</option>
                  <option value="waste">Waste</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddItem;
