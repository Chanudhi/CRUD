import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Update({ match }) {
  const [item, setItem] = useState({ name: '', description: '' });

  useEffect(() => {
    const fetchItem = async () => {
      const result = await api.get(`/items/${match.params.id}`);
      setItem(result.data);
    };

    fetchItem();
  }, [match.params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/items/${match.params.id}`, item);
    // Redirect or show success message
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={item.name} onChange={handleChange} />
        <input type="text" name="description" value={item.description} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
