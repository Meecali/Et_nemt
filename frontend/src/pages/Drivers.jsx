import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      const res = await axios.get('/api/drivers');
      setDrivers(res.data);
    };
    fetchDrivers();
  }, []);

  return (
    <div style={{ padding: 50 }}>
      <h2>Drivers</h2>
      {drivers.map(driver => (
        <div key={driver._id}>
          {driver.name} - {driver.available ? 'Available' : 'Busy'}
        </div>
      ))}
    </div>
  );
};

export default Drivers;
