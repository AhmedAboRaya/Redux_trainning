import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ICard } from "../../interfaces/interfaces";
import { addToCart } from "../../app/feature/cart/cartSlice";

const Card = ({ title, image, price, alt, id }: ICard) => {
  const { value } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(id));
  };

  return (
    <div className="flex flex-col space-y-2 border-2 p-2 rounded-xl pb-5">
      <img src={image} alt={alt} className="mt-1 h-full rounded-xl" />
      <h3 className="text-white text-2xl font-bold ">{title}</h3>
      <p className="text-white text-xl font-bold ">{price}$</p>
      <button
        onClick={handleClick}
        className="hover:bg-gray-300 mx-2 bg-white rounded-lg py-1 font-semibold text-lg font-sans duration-300"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
