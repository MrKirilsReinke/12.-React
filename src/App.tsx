import { useState } from 'react'
import './App.css'

function App() {
  // State hook - `useState`
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState<{ id: number; value: string; }[]>([]);

  // Helper Functions
  const addItem = () => {

    if (!newItem) {
      alert('Enter an item');
      return;
    }
    
    const item = {
      id: Math.floor(Math.random() * 10000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);

    setNewItem('');
  }

  const deletItem = (id: number) => {
    const newArray = items.filter(item => item.id != id);
    setItems(newArray);
  }

  return (
    <div>

      <h1>
        Todo List:
      </h1>

      <input
        type='text'
        placeholder='Add an item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>{item.value}<button onClick={() => deletItem(item.id)}>✖️</button></li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
