import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      {/* ناوبری */}
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>Add Product</Link>
        <Link to="/products" style={{ marginRight: 10 }}>Product List</Link>
        <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
        <Link to="/login">Login</Link>
      </nav>

      {/* مسیرها */}
      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;