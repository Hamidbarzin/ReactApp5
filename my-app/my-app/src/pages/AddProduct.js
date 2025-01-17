import React, { useState } from 'react';
import { addProduct } from '../services/api';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      const response = await addProduct(product);
      if (response && response.success) {
        alert('Product added successfully!');
        setProduct({ name: '', brand: '', price: '', description: '' });
      } else {
        setError(response?.message || 'Failed to add product.');
      }
    } catch (err) {
      setError('An error occurred while adding the product.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;