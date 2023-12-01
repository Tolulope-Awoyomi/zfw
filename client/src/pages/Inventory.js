import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ItemsContext } from '../components/context/items';

function Inventory() {
  const { items, fetchItems, updateItem, deleteItem, loading } = useContext(ItemsContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchItems()
  })

  if (!Array.isArray(items)) {
    return <div>Loading...</div>;
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditItem({ ...item });
  };

  const handleUpdate = () => {
    updateItem(editItem);
    setIsEditing(false);
    setEditItem(null);
  };

  const handleDelete = (itemId) => {
    deleteItem(itemId);
  };

  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">Food Inventory</h2>
              <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                <li className="list-inline-item"><Link to="/foodbusiness">Food Business Services</Link></li>
                <li className="list-inline-item">/ &nbsp; <Link to="#">Inventory</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="bg-white shadow rounded-lg p-4">
            {isEditing ? (
              <div className="form-container edit-form">
                <input className="form-control" type="text" name="name" value={editItem.name} onChange={handleChange} />
                <select className="form-control" name="item_type" value={editItem.item_type} onChange={handleChange}>
                  <option value="donation">Donation</option>
                  <option value="waste">Waste</option>
                </select>
                <select className="form-control" name="category" value={editItem.category} onChange={handleChange}>
                  <option value="snacks_sides">Snacks & Sides</option>
                  <option value="vegetarian_vegan">Vegetarian & Vegan Dishes</option>
                  <option value="sandwishes_wraps">Sandwiches & Wraps</option>
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
                <input className="form-control" type="number" name="quantity" value={editItem.quantity} onChange={handleChange} />
                <input className="form-control" type="date" name="purchase_date" value={formatDateForInput(editItem.purchase_date)} onChange={handleChange} />
                <input className="form-control" type="date" name="expiration_date" value={formatDateForInput(editItem.expiration_date)} onChange={handleChange} />
                <button className="btn btn-success" onClick={handleUpdate}>Save Changes</button>
                <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            ) : (
              <table className="center-table table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Inventory Type</th>
                    <th>Quantity</th>
                    <th>Purchase/Made Date</th>
                    <th>Expiration Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(items) && items.map((item) => (
                      <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.item_type}</td>
                      <td>{item.quantity}</td>
                      <td>{formatDateForInput(item.purchase_date)}</td>
                      <td>{formatDateForInput(item.expiration_date)}</td>
                      <td>
                        <button className="edit-button" onClick={() => handleEdit(item)}>Edit</button>
                        <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}


export default Inventory;
