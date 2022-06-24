import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { formatDate } from "../../helpers";
import styles from "../../styles/Entry.module.css";

const EntryBlog = ({ entry }) => {
  const { content, published_at, image, title } = entry ?? entry;
  const router = useRouter();
  return (
    <Layout page={title}>
      <main className="contenedor">
        <h1 className="heading">{title}</h1>
        <article className={styles.entry}>
          <Image
            Layout="responsive"
            width={800}
            height={600}
            src={image.url}
            alt={`Image entry ${title}`}
          />
          <div>
            <p className={styles.date}>{formatDate(published_at)}</p>
            <p className={styles.text}>{content}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

//The way to fetch data through static props at NextJS

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_BASE_URL}/blogs`);
  const entries = await response.json();
  const paths = entries.map((entry) => ({ params: { url: entry.url } }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params: { url } }) {
  const response = await fetch(`${process.env.API_BASE_URL}/blogs/?url=${url}`);
  const entry = await response.json();
  return {
    props: { entry: entry[0] },
  };
}

// export async function getServerSideProps({ query: { id } }) {
//   const response = await fetch(`${process.env.API_BASE_URL}/blogs/${id}`);
//   const entry = await response.json();
//   return {
//     props: { entry },
//   };
// }

export default EntryBlog;
