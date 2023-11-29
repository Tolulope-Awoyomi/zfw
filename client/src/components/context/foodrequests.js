import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ItemsContext } from './items';

const FoodRequestContext = React.createContext();

function FoodRequestProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [foodRequests, setFoodRequests] = useState([]);
  const { items, updateItem } = useContext(ItemsContext);
  const navigate = useNavigate()

  const fetchFoodRequests = () => {
    fetch("/food_requests")
      .then(response => response.json())
      .then(data => {
        setFoodRequests(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch food requests:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFoodRequests();
  }, []);

  const addFoodRequest = (newRequest) => {
    fetch('/food_requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRequest),
    })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      const itemIdToDeduct = newRequest.item_id;
      const quantityToDeduct = newRequest.quantity;

      const deductQuantityFromInventory = (itemId, quantityToDeduct) => {
        const inventoryItem = items.find((inventoryItem) => inventoryItem.id === itemId);
        if (inventoryItem) {
          const newQuantity = inventoryItem.quantity - quantityToDeduct;
          const updatedItem = { ...inventoryItem, quantity: newQuantity };
          updateItem(updatedItem); 
        } else {
          console.error(`Item with id ${itemId} not found in inventory`);
        }
      };

      deductQuantityFromInventory(itemIdToDeduct, quantityToDeduct);

      setFoodRequests(prevRequests => [...prevRequests, data]);
      navigate("/foodupdateshistory");
    })
    .catch(error => console.error('Error:', error));
  };

  const updateFoodRequestStatus = (requestId, newStatus) => {
    fetch(`/food_requests/${requestId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    })
    .then(response => response.json())
    .then(updatedRequest => {
      setFoodRequests(prevRequests => prevRequests.map(request => request.id === updatedRequest.id ? updatedRequest : request));
    })
    .catch(error => console.error('Error:', error));
  };

  const updateFoodRequest = (updatedRequest) => {
    fetch(`/food_requests/${updatedRequest.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRequest),
    })
    .then(response => response.json())
    .then((updatedData) => {
      setFoodRequests(foodRequests.map(request => request.id === updatedData.id ? updatedData : request));
    })
    .catch(error => console.error('Error:', error));
  };

  const deleteFoodRequest = (requestId) => {
    fetch(`/food_requests/${requestId}`, {
      method: 'DELETE',
    })
    .then(() => {
      setFoodRequests(prevRequests => prevRequests.filter(request => request.id !== requestId)); 
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <FoodRequestContext.Provider value={{ foodRequests, fetchFoodRequests, addFoodRequest, updateFoodRequest, deleteFoodRequest, updateFoodRequestStatus, loading }}>
      {children}
    </FoodRequestContext.Provider>
  );
}

export { FoodRequestContext, FoodRequestProvider };
