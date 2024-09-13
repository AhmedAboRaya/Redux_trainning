import { Link, NavLink } from 'react-router-dom';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { value } = useSelector((state: RootState) => state.cart);

  function countProductsInCart(arr: number[]): { [key: number]: number } {
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

  const cartCount = Object.values(countProductsInCart(value)).length;
  
  return (
    <nav className="flex flex-row justify-between items-center bg-white rounded-lg">
      <div className="flex items-center bg-white">
        <Link className="text-gray-700 font-bold text-4xl hover:text-white bg-white" to="/">Store</Link>
      </div>
      <div className="space-x-4 flex items-center bg-white">
        <NavLink className="text-gray-700 hover:text-gray-500 py-3 font-semibold text-2xl duration-500 bg-white" to="/">Home</NavLink>
        <NavLink className="text-gray-700 hover:text-gray-500 py-3 font-semibold text-2xl duration-500 bg-white" to="/cart">Cart({cartCount})</NavLink>
        <NavLink className="text-gray-700 hover:text-gray-500 py-3 font-semibold text-2xl duration-500 bg-white" to="/products">Products</NavLink>
        <NavLink className="text-gray-700 hover:text-gray-500 py-3 font-semibold text-2xl duration-500 bg-white" to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
