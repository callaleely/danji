import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Earn from './pages/Earn';
import Borrow from './pages/Borrow';
import Details from './pages/Details';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/danji" element={<Earn />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
