import { useEffect, useState } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) ?? [];
    if (cartLS.length !== 0) {
      setCart(cartLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productAdded) => {
    setCart(
      cart.some((product) => product._id === productAdded._id)
        ? cart.map((product) =>
            product._id === productAdded._id
              ? {
                  ...product,
                  quantity: productAdded.quantity,
                }
              : productAdded
          )
        : [...cart, productAdded]
    );
  };

  const updateCart = (quantity, id) => {
    setCart(
      cart.map((product) =>
        product._id === id ? { ...product, quantity: quantity } : product
      )
    );
  };

  const deleteItemFromCart = (id) => {
    setCart(cart.filter((product) => product._id !== id));
  };

  return (
    <Component
      {...pageProps}
      cart={cart}
      addToCart={addToCart}
      updateCart={updateCart}
      deleteItemFromCart={deleteItemFromCart}
    />
  );
}

export default MyApp;
