import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      {/* router */}
      <Routes>
        <Route
          element={<Checkout />}
          path="/checkout"
        />
          <Route
            element={<Login />}
            path="/login"
          />
          <Route
            element={<Cart />}
            path="/cart"
          />
          <Route
            element={<Dashboard />}
            path="/dashboard"
          />
      </Routes>
    </div>
  );
}

export default App;
