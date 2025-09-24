import { log } from 'console';
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/date')
    .then(res=>res.json())
    .then(data=>setDate(data.date))
  }, []);

  return (
    <div>
      <p>Current Date: {date}</p>
    </div>
  );
};

export default MyComponent;