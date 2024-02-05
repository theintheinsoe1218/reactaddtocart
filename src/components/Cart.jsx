import React from "react";
import CartItem from "./CartItem";
const fruits = [
  {
    id: 1,
    price: 10.98,
    name: "Banana",
    description: "fresh banana from thailand",
    quantity: 2,
  },
  {
    id: 2,
    price: 10.98,
    name: "Apple",
    description: "fresh banana from thailand",
    quantity: 2,
  },
  {
    id: 3,
    price: 10.98,
    name: "Orange",
    description: "fresh banana from thailand",
    quantity: 2,
  },
];
const Cart = () => {
  return (
    <section className="cart-box">
      <h2>Carts</h2>
      {fruits.map((fruit) => (
        <CartItem key={fruit.id} fruit={fruit} />
      ))}
      <hr />
      <div className="total">
        <h2>Total price</h2>
        <p>$ 3000.00</p>
      </div>
      <div className="btns">
        <button className="close-btn">Close</button>
        <button className="order-btn">Order</button>
      </div>
    </section>
  );
};

export default Cart;
