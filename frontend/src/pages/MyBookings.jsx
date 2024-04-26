import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch user bookings when the component mounts
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      // Make an HTTP GET request to fetch user bookings
      const response = await axios.get(process.env.MONGO_URI, {
        // You may need to include authentication token in the request headers
        // headers: {
        //   Authorization: `Bearer ${authToken}`
        // }
      });

      // Set the fetched bookings in state
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  return (
    <div>
      <h1>My Bookings</h1>
      <ul>
        {/* Render user bookings */}
        {bookings.map(bookings => (
          <li key={bookings._id}>
            {bookings.title} - {bookings.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
