// App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>WELCOME TO MY 3D-PORTFOLIO </h1>
    </div>
  );
}

export default App;
