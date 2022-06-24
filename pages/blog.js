import Layout from "../components/Layout";
import ListOfEntries from "../components/ListOfEntries";

const Blog = ({ entries }) => {
  return (
    <div>
      <Layout page="Blog">
        <main className="contenedor">
          <h2 className="heading">Blog</h2>
          <ListOfEntries entries={entries} />
        </main>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_BASE_URL}/blogs`);
  const entries = await res.json();

  // Pass data to the page via props
  return { props: { entries } };
}
export default Blog;
