import { products } from "../data/products";
import Card from "./ui/Card";

const Products = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-6 gap-5 mt-4">
      {products.map((product, index) => (
        <Card
          key={index}
          alt={product.alt}
          price={product.price}
          image={product.image}
          title={product.title}
        />
      ))}
    </div>
  );
};

export default Products;
