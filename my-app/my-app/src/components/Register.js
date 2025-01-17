import React, { useState } from 'react';
import { registerUser } from '../services/api';

function Register() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(user);
    if (response && response.success) {
      alert('User registered successfully!');
      setUser({ username: '', password: '' });
    } else {
      alert(response?.message || 'Failed to register');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label>Username:</label>
      <input type="text" name="username" value={user.username} onChange={handleChange} required />
      <label>Password:</label>
      <input type="password" name="password" value={user.password} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
