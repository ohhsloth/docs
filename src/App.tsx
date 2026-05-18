import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sheep from './pages/Sheep';
import Docs from './pages/Docs';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/docs" element={<Docs />} />
        <Route path="/" element={<Sheep/>} />
      </Routes>
    </Router>
  );
};

export default App;
