import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Products from '../components/Products';
import Cart from '../components/Cart';
import Login from '../components/Login';
import ErrorPage from '../components/ErrorPage';

const Router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
      </Route>
  )
)

export default Router;