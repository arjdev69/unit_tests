import React, { useState } from 'react';

const App = () => {

  const [list, setLists] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddList = () => {
    setLists([...list, newItem])
    setNewItem('')
  }

  return (
    <>
      <p>Lista de compras</p>
    </>
  );
}

export default App;
