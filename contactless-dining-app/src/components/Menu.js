import React from 'react';

function Menu({ onAddToCart }) { // Prop to handle adding items to cart

  // Sample menu items (replace with your actual data)
  const menuItems = [
    { id: 1, name: 'Pizza Margherita', price: 10.99 },
    { id: 2, name: 'Pasta Carbonara', price: 12.50 },
    // Add more menu items here
  ];

  const handleItemClick = (item) => {
    onAddToCart(item); // Trigger prop function to add item to cart
  };

  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => handleItemClick(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;