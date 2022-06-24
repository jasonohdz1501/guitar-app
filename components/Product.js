import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Product.module.css";

const Product = ({ product }) => {
  const { description, title, url, price, image } = product;
  return (
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
        <Link href={`/products/${url}`}>
          <a className={styles.link}> See product</a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
