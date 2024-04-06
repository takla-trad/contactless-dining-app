import React from 'react';

function Cart({ cartItems }) { // Prop to receive cart items

  // Calculate total cart price (replace with actual calculation logic)
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
          <li>Total: ${totalPrice.toFixed(2)}</li>
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;