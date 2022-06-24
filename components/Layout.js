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
