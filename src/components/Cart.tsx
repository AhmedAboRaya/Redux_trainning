import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Card from "./ui/Card";
import { products } from "../data/products";


const Cart = () => {

    const { value } = useSelector((state: RootState) => state.cart);
    // const dispatch = useDispatch();

    const renderProductsInCart = () => {
        return products
          .filter(product => value.includes(product.id)) // Filter products by `id`
          .map(product => (
            <Card alt={product.alt} id={product.id} image={product.image} price={product.price} title={product.title} key={product.id} />
          ));
      };

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:max-w-[2000px] gap-10 mt-4 ">
            {renderProductsInCart()}
        </div>
    )
}

export default Cart