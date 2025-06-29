import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveMap = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await axios.get('/api/drivers');
      setDrivers(res.data);
    };
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 50 }}>
      <h2>Live Map (Placeholder)</h2>
      <p>This is where the Google Map would render with live markers.</p>
      {drivers.map(driver => (
        <div key={driver._id}>
          {driver.name}: {driver.location?.lat}, {driver.location?.lng}
        </div>
      ))}
    </div>
  );
};

export default LiveMap;
