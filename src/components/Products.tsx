
import { products } from "../data/products";
import Card from "./ui/Card";


const Products = () => {

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:max-w-[2000px] gap-10 mt-4 ">
      {products.map((product) => (
        <Card
          key={product.id}
          alt={product.alt}
          price={product.price}
          image={product.image}
          title={product.title}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
