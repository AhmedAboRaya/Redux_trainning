import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="flex items-center">
        <NavLink className="text-white font-bold text-3xl hover:text-white" to="/">Store</NavLink>
      </div>
      <div className="space-x-4 flex items-center">
        <NavLink className="text-white hover:text-gray-500 text-xl duration-500" to="/">Home</NavLink>
        <NavLink className="text-white hover:text-gray-500 text-xl duration-500" to="/cart">Cart</NavLink>
        <NavLink className="text-white hover:text-gray-500 text-xl duration-500" to="/products">Products</NavLink>
        <NavLink className="text-white hover:text-gray-500 text-xl duration-500" to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
