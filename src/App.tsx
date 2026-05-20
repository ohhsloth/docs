import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OhhSloth from './pages/OhhSloth';
import Docs from './pages/Docs';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/docs" element={<Docs />} />
        <Route path="/" element={<OhhSloth/>} />
      </Routes>
    </Router>
  );
};

export default App;
