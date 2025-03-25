import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Read() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await api.get('/items');
      setItems(result.data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Read;
