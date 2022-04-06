import Head from "next/head";
import {motion} from "framer-motion";

import {commerce} from "../lib/commerce";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import ProductGrid from "../components/ProductGrid";
import Banner from "../components/Banner";
import Socials from "../components/Socials";

export async function getStaticProps() {
  const {data} = await commerce.products.list();

  const products = data.filter(({active}) => active);

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

function IndexPage({products}) {
  return (
    <>
      <Head>
        <title>Jay's Corner TCG</title>
        <link rel="icon" href="/JCTCG_logo.png" />
      </Head>
      <div>
        <div className="flex flex-col">
          <Header />
          <Banner />

          <motion.div
            id="shop-section"
            className="py-6 px-6 md:py-12 flex-col items-center md:z-40 bg-secondary-dark"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -50}}
          >
            <h1 className="text-text-primary-light text-center">Jay's Shop</h1>
            <ProductGrid
              products={products}
              className="h-48 md:h-96 xl:h-112"
            />
          </motion.div>

          <Socials />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
