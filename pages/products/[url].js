import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Product.module.css";

const SingleProduct = ({ singleProduct, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { description, title, price, image, id } = singleProduct[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      alert("Quantity not valid");
      return;
    }
    addToCart({
      id,
      image: image.url,
      title,
      price,
      quantity,
    });
  };

  return (
    <Layout page={`Product ${title}`}>
      <div className={styles.product}>
        <Image
          layout="responsive"
          width={200}
          height={350}
          src={image.url}
          alt={`product image ${title}`}
        />
        <div className={styles.content}>
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="quatitiy">Quantity: </label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              <option value="">-- Select -- </option>
              <option value="1"> 1</option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5 </option>
              <option value="6"> 6</option>
              <option value="7"> 7</option>
              <option value="8"> 8</option>
            </select>
            <input type="submit" name="" value="Add to Cart" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/products?url=${url}`
  );
  const singleProduct = await response.json();

  return {
    props: { singleProduct },
  };
}

export default SingleProduct;
