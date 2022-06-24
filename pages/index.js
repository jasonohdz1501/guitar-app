import Layout from "../components/Layout";
import List from "../components/List";
import Course from "../components/Course";
import ListOfEntries from "../components/ListOfEntries";

export default function Home({ products, course, entries }) {
  return (
    <div>
      <Layout page="home" starProduct={products[3]}>
        <main className="contenedor">
          <h1 className="heading">Our Collection</h1>
          <List products={products} />
        </main>
        <Course course={course} />
        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <ListOfEntries entries={entries} />
        </section>
      </Layout>
    </div>
  );
}

/*
/This code with promises all avoid to block the code because the @await 
/ is going to block the next line until is ready. So to Avoid blocking the code
/ we put a Promise.all to resolve
*/
export async function getServerSideProps() {
  const [responseProducts, responseCourse, responseEntries] = await Promise.all(
    [
      fetch(`${process.env.API_BASE_URL}/products?_sort=price:asc`),
      fetch(`${process.env.API_BASE_URL}/courses`),
      fetch(`${process.env.API_BASE_URL}/blogs?_limit=3&_sort=createdAt:asc`),
    ]
  );

  const [products, course, entries] = await Promise.all([
    responseProducts.json(),
    responseCourse.json(),
    responseEntries.json(),
  ]);

  return { props: { products, course, entries } };
}
