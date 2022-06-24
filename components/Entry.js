import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../helpers";
import styles from "../styles/Entry.module.css";

const Entry = ({ entry }) => {
  const { title, extract, image, published_at, url } = entry;
  return (
    <article>
      <Image
        priority="true"
        src={image.url}
        width={800}
        height={400}
        layout="responsive"
        alt={`image blog ${title}`}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(published_at)}</p>
        <p className={styles.extract}>{extract}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.link}>Read more</a>
        </Link>
      </div>
    </article>
  );
};

export default Entry;
