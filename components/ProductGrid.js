import Product from "./Product";

function ProductGrid({products, ...props}) {
  if(!products || products.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-4 xl:gap-8">
      {products.map((product) => (
        <Product key={product.id} {...product} {...props} />
      ))}
    </div>
  );
}

export default ProductGrid;
