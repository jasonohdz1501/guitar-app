import Layout from "../components/Layout";
import List from "../components/List";

const Store = ({ products }) => {
  return (
    <div>
      <Layout page="Store">
        <main className="contenedor">
          <h1 className="heading">Collection</h1>
          <List products={products} />
        </main>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.API_BASE_URL}/products?_sort=price:asc`
  );
  const products = await response.json();
  return { props: { products } };
}
export default Store;
