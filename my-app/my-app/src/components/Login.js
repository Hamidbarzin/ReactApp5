import React, { useState } from 'react';
import { loginUser } from '../services/api';

function Login() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(user);
    if (response && response.success) {
      alert('Login successful!');
    } else {
      alert(response?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Username:</label>
      <input type="text" name="username" value={user.username} onChange={handleChange} required />
      <label>Password:</label>
      <input type="password" name="password" value={user.password} onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
