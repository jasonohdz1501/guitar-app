import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, page, starProduct }) => {
  return (
    <div>
      <Head>
        <title>Guitar Shop - {page}</title>
        <meta name='description' content='Guitar app shop' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header starProduct={starProduct} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  starProduct: null,
};

export default Layout;
