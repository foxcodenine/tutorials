import { useState } from 'react'
import './App.scss'

// ---------------------------------------------------------------------

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    console.log(id)
    setItems((items) => {
      return items.map(item =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    })
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  )
}

function Logo() {
  return (
    <h1>🌴 Far Away 🎒</h1>
  )
}

// ---------------------------------------------------------------------

function Form({ items, onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);
    setDescription("")
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

// ---------------------------------------------------------------------

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul style={{ overflow: "auto" }}>
        {items.map(item => (
          <Item
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </div>
  )
}

// ---------------------------------------------------------------------

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => { onDeleteItem(item.id) }}>✖️</button>
    </li>
  )
}

// ---------------------------------------------------------------------

function Stats() {
  return (
    <footer className='stats'>
      <em>🎒 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}
