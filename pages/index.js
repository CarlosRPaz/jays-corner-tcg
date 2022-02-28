import Head from "next/head";
import {motion} from "framer-motion";

import {commerce} from "../lib/commerce";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import ProductGrid from "../components/ProductGrid";

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
      <div className=" bg-green-200">
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-10">
          <Header />

          <motion.div
            className="py-6 md:py-12 flex items-center md:z-40"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -50}}
          >
            <ProductGrid
              products={products}
              className="h-112 md:h-96 xl:h-112"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
