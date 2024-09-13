import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ICard } from "../../interfaces/interfaces";
import { addToCart, decFromCart } from "../../app/feature/cart/cartSlice";
import { memo } from "react";

const Card = ({ title, image, price, alt, id }: ICard) => {
  const { value } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    dispatch(addToCart(id));
    console.log(productsInCart);
    
  };

  const handleDecreaseClick = () => {
    dispatch(decFromCart(id));
  };

  const countProductsInCart = (arr: number[]): { [key: number]: number } => {
    const countMap: { [key: number]: number } = {};

    arr.forEach((num) => {
      if (countMap[num]) {
        countMap[num] += 1;
      } else {
        countMap[num] = 1;
      }
    });

    return countMap;
  }

  const productsInCart = countProductsInCart(value);

  return (
    <div className="flex flex-col space-y-4 border-2 p-2 rounded-xl pb-5">
      <img src={image} alt={alt} className="mt-1 h-full rounded-xl" />
      <h3 className="text-white text-2xl font-bold ">{title}</h3>
      <p className="text-white text-xl font-bold ">{price}$</p>
      <div className="flex-row flex w-full justify-center">
        <button
          onClick={handleDecreaseClick}
          className="size-8 font-bold text-2xl bg-white rounded-full flex justify-center items-center hover:bg-slate-300 duration-300"
        >
          -
        </button>
        <p className="size-8 font-bold text-white">{productsInCart[id]}</p>
        <button
          onClick={handleIncreaseClick}
          className="size-8 font-bold text-2xl bg-white rounded-full flex justify-center items-center hover:bg-slate-300 duration-300"
        >
          +
        </button>
      </div>
      <button
        className="hover:bg-gray-300 mx-2 bg-white rounded-lg py-1 font-semibold text-lg font-sans duration-300"
      >
        Buy Now
      </button>
    </div>
  );
};

export default memo(Card);
