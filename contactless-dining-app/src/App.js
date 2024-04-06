import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu'; // Import Menu component
import Cart from './components/Cart'; // Import Cart component

function App() {

  // State to manage selected items
  const [cartItems, setCartItems] = React.useState([]);

  // Function to add item to cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <h1>Welcome to Contactless Dining</h1>
      {/* Display Menu component */}
      <Menu onAddToCart={handleAddToCart} />

      {/* Conditionally render Cart component if items are present */}
      {cartItems.length > 0 && <Cart cartItems={cartItems} />}
    </div>
  );
}

export default App;
