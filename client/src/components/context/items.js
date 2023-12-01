import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const ItemsContext = React.createContext();

function ItemsProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]); 
  const [wasteItems, setWasteItems] = useState([]);
  const navigate = useNavigate()

  const fetchItems = () => {
    fetch("/items")
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch items:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const updateItem = (updatedItem) => {
    fetch(`/items/${updatedItem.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      setItems(prevItems => prevItems.map(item => item.id === data.id ? data : item));
    })
    .catch(error => console.error('Error:', error));
  };

  const addItem = (newItem) => {
    fetch('/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      setItems(prevItems => Array.isArray(prevItems) ? [...prevItems, data] : [data]);
      fetchItems(); 
      navigate("/inventory");
    })    
    .catch(error => console.error('Error:', error));
  };

  const deleteItem = (itemId) => {
    fetch(`/items/${itemId}`, {
      method: 'DELETE',
    })
    .then(() => {
      setItems(prevItems => prevItems.filter(item => item.id !== itemId)); 
    })
    .catch(error => console.error('Error:', error));
  };

  const fetchDonationItems = () => {
    fetch("/donated-items")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setItems(data); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const fetchWasteItems = () => {
    fetch("/waste-items")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setItems(data); 
        setWasteItems(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  return (
    <ItemsContext.Provider value={{ items, setItems, addItem, updateItem, deleteItem, fetchItems, fetchDonationItems, fetchWasteItems, wasteItems, loading  }}>
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext, ItemsProvider };
