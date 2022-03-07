import Image from "next/image";
import Link from "next/link";
import cc from "classcat";

function Product({media, name, permalink, price, className}) {
  const imageClass = cc([
    "relative rounded-t-lg rounded-b-none hover:rounded-none overflow-hidden w-full transition-all",
    className,
  ]);

  return (
    <Link href={`/products/${permalink}`}>
      <a className="group relative">
        {media?.source && (
          <div className={imageClass}>
            <Image
              src={media.source}
              alt={Product.name}
              layout="fill"
              sizes="616px, (min-width: 768px): 352px, (min-width: 1024px): 232px, (min-width: 1280px): 288px"
              className="object-cover"
              priority={true}
            />
          </div>
        )}
        <div className="flex flex-col justify-between p-4 sm:p-6 md:py-6 space-y-6 lg:space-y-8 bg-product-dark rounded-b-lg border-t-4 border-primary-color text-text-primary-light">
          <span className="text-xl lg:text-2xl font-medium">{name}</span>
          <span className="text-2xl lg:text-3xl text-right font-medium">
            {price.formatted_with_symbol}
          </span>
        </div>
      </a>
    </Link>
  );
}

export default Product;
