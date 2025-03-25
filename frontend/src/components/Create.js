import React, { useState } from 'react';
import api from '../services/api';

function Create() {
  const [item, setItem] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/items', item);
    // Redirect or show success message
  };

  return (
    <div>
      <h2>Create Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;
