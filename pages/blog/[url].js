import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { formatDate } from "../../helpers";
import styles from "../../styles/Entry.module.css";

const EntryBlog = ({ entry }) => {
  const router = useRouter();
  return (
    <Layout page={entry.title}>
      <main className='contenedor'>
        <h1 className='heading'>{entry.title}</h1>
        <article className={styles.entry}>
          <Image
            Layout='responsive'
            width={800}
            height={600}
            src={entry.image.url}
            alt={`Image entry ${entry.title}`}
          />
          <div>
            <p className={styles.date}>{formatDate(entry.published_at)}</p>
            <p className={styles.text}>{entry.content}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

//The way to fetch data through static props at NextJS

// export async function getStaticPaths() {
//   const response = await fetch(`${process.env.API_BASE_URL}/blogs`);
//   const entries = await response.json();
//   const paths = entries.map((entry) => ({ params: { url: entry.url } }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params: { url } }) {
//   const response = await fetch(`${process.env.API_BASE_URL}/blogs/?url=${url}`);
//   const entry = await response.json();
//   return {
//     props: { entry: entry[0] },
//   };
// }

export async function getServerSideProps({ query: { url } }) {
  const response = await fetch(`${process.env.API_BASE_URL}/blogs?_url=${url}`);
  const entry = await response.json();
  return {
    props: { entry },
  };
}

export default EntryBlog;
