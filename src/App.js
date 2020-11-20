import React, { useState } from 'react';

// import { Container } from './styles';

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
      <button onClick={handleAddList}>Adicionar Item</button>
      <form onSubmit={handleAddList}>
        <label htmlFor="list">Item: </label>
        <input id="list" value={newItem} onChange={event => setNewItem(event.target.value)} />
        <ul>
          {list.map(item => <li key={item}>{item}</li>)}
        </ul>
      </form>
    </>
  );
}

export default App;
