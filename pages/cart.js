import Image from "next/image";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Cart.module.css";
const Cart = ({ cart, updateCart, deleteItemFromCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acum, item) => acum + item.price * item.quantity, 0));
  }, [cart]);

  return (
    <Layout>
      <h2 className='heading'>Cart</h2>
      <main className={`${styles.content} contenedor`}>
        <div className={styles.cart}>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item._id} className={styles.item}>
                  <div>
                    <Image
                      height={480}
                      width={250}
                      src={item.image}
                      alt={`product cart ${item.title}`}
                    />
                  </div>
                  <div>
                    <p className={styles.title}>{item.title}</p>
                    <div className={styles.quantity}>
                      <p>Quantity: </p>
                      <select
                        className={styles.select}
                        value={item.quantity}
                        onChange={(e) => {
                          updateCart(e.target.value, item._id);
                        }}
                      >
                        <option value='1'> 1</option>
                        <option value='2'>2 </option>
                        <option value='3'>3 </option>
                        <option value='4'>4 </option>
                        <option value='5'>5 </option>
                        <option value='6'> 6</option>
                        <option value='7'> 7</option>
                        <option value='8'> 8</option>
                      </select>
                    </div>
                    <p className={styles.price}>${item.price}</p>
                    <p className={styles.subtotal}>
                      Subtotal: <span>${item.price * item.quantity}</span>
                    </p>
                  </div>
                  <button
                    type='button'
                    className={styles.delete}
                    onClick={() => {
                      deleteItemFromCart(item._id);
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.summary}>
          <h3>Summary of your order</h3>
          {total > 0 ? (
            <>
              <p>Summary</p>
              <p>Total: ${total}</p>
            </>
          ) : (
            <p>There&apos;s no products</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
