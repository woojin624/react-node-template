import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loadData, setLoadData] = useState();

  useEffect(() => {
    axios
      .get('/api/load')
      .then((res) => {
        console.log(res.data);
        setLoadData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='App' style={{ marginTop: '5rem' }}>
      {loadData ? (
        <div>
          안녕하세요 {loadData.name}입니다. {loadData.age}살이에요.
        </div>
      ) : null}
    </div>
  );
}

export default App;
