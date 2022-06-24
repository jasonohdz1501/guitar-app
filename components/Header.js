import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
const Header = ({ starProduct }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.bar}>
          <div>
            <Link href="/">
              <a>
                <Image
                  height={100}
                  width={400}
                  src="/img/logo.svg"
                  alt="logo guitar shop"
                />
              </a>
            </Link>
          </div>
          <nav className={styles.navigation}>
            <Link href="/">Home</Link>
            <Link href="/us">About us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Store</Link>
            <Link href="/cart">
              <a href="">
                <Image
                  width={30}
                  height={25}
                  layout="fixed"
                  src="/img/carrito.png"
                  alt="cart shopping"
                />
              </a>
            </Link>
          </nav>
        </div>
        {starProduct && (
          <div className={styles.model}>
            <h2>{starProduct.title}</h2>
            <p>{starProduct.description}</p>
            <p className={styles.price}>${starProduct.price}</p>
            <Link href={`/products/${starProduct.url}`}>
              <a className={styles.link}>See product</a>
            </Link>
          </div>
        )}
      </div>
      {router.pathname === "/" && (
        <div className={styles.productImg}>
          <Image
            height={1200}
            width={600}
            src="/img/header_guitarra.png"
            alt="image header guitar"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
