import React, { createContext, useState } from 'react';

// Create the context
export const WastePickupRequestContext = createContext();

// Create the provider component
export const WastePickupRequestProvider = ({ children }) => {
  // Initialize the state
  const [wastePickupRequest, setWastePickupRequest] = useState({
    selectedWaste: null,
    formData: {
      business_name: '',
      email: '',
      phone_number: '',
      address: '',
      pickup_date: '',
      pickup_time: '',
      comments: ''
    },
    scheduledWastes: {}
  });

  // Function to handle form field changes
  const handleFormChange = (name, value) => {
    setWastePickupRequest(prevState => ({
      ...prevState,
      formData: { ...prevState.formData, [name]: value }
    }));
  };

  // Function to submit the waste pickup request
  const submitWastePickupRequest = async () => {
    try {
      // Example POST request to a backend API endpoint
      const response = await fetch('/waste_pickup_requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...wastePickupRequest.formData,
          item_id: wastePickupRequest.selectedWaste,
          status: 'Scheduled'
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Update the scheduledWastes state with the response
      const newWasteData = await response.json();
      setWastePickupRequest(prevState => ({
        ...prevState,
        scheduledWastes: {
          ...prevState.scheduledWastes,
          [newWasteData.id]: newWasteData
        }
      }));
    } catch (error) {
      console.error('Error submitting waste pickup request:', error);
    }
  };

  // The value that will be provided to the context
  const value = {
    wastePickupRequest,
    setWastePickupRequest,
    handleFormChange,
    submitWastePickupRequest
  };

  return (
    <WastePickupRequestContext.Provider value={value}>
      {children}
    </WastePickupRequestContext.Provider>
  );
};
