import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RandomNumbers from '../RandomNumbers';

function App() { 
  return (
    <Routes>
      <Route index element={<RandomNumbers />} />
    </Routes>
  );
}

export default App;
