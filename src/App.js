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
      <p data-testid="test-p">List Title</p>
      <form data-testid="list-form" onSubmit={handleAddList}>
        <ul data-testid="item-list">
          {list.map(item => <li key={item}>{item}</li>)}
        </ul>
        <label htmlFor="list">List</label>
        <input id="list" value={newItem} onChange={event => setNewItem(event.target.value)} />
      </form>
      <button onClick={handleAddList}>Add Item</button>
    </>
  );
}

export default App;
