import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Trips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await axios.get('/api/trips');
      setTrips(res.data);
    };
    fetchTrips();
  }, []);

  return (
    <div style={{ padding: 50 }}>
      <h2>Trips</h2>
      {trips.map(trip => (
        <div key={trip._id}>
          {trip.patientName} - {trip.status}
        </div>
      ))}
    </div>
  );
};

export default Trips;
