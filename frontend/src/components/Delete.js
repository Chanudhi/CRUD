import React, { useEffect } from 'react';
import api from '../services/api';

function Delete({ match, history }) {
  useEffect(() => {
    const deleteItem = async () => {
      await api.delete(`/items/${match.params.id}`);
      history.push('/read');
    };

    deleteItem();
  }, [match.params.id, history]);

  return <div>Deleting item...</div>;
}

export default Delete;
