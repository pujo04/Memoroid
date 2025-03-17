import React from "react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Red Printed T-shirt",
      price: 50,
      image: "./assets/images/category-2.jpg",
    },
    {
      id: 2,
      name: "Blue Printed T-shirt",
      price: 50,
      image: "./assets/images/buy-2.jpg",
    },
    {
      id: 3,
      name: "Green Printed T-shirt",
      price: 50,
      image: "./assets/images/buy-3.jpg",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = 30;
  const total = subtotal + tax;

  return (
    <div className="small-container cart-page">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Product</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border border-gray-200">
              <td className="flex items-center p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 mr-4"
                />
                <div>
                  <p>{item.name}</p>
                  <small>Price: ${item.price}</small>
                  <br />
                  <a href="#" className="text-red-500">
                    Remove
                  </a>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  defaultValue="1"
                  className="border border-gray-300 p-1 w-12"
                />
              </td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-price mt-6">
        <table className="w-full border-collapse border border-gray-200">
          <tr>
            <td className="p-2">Subtotal</td>
            <td className="p-2">${subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="p-2">Tax</td>
            <td className="p-2">${tax.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="p-2">Total</td>
            <td className="p-2 font-bold">${total.toFixed(2)}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cart;
