import ProductList from "./pages/ProductList";
import Register from './pages/Register'
import Login from './pages/Login'
import {Routes , Route, Navigate } from 'react-router-dom'
import Success from './pages/Success'
import Product from "./pages/Product";
import Cart from './pages/Cart'
import Home from './pages/Home'
import { useSelector } from "react-redux";




function App() {

  
 
  // useSelector will tell us if there is user or nots
  const user = useSelector(state => state.user.currentUser)


  return (
 <>
   <Routes >
   {/* if the user exist we will navigate to home page */}
    {/* http://localhost:3000/register */}
    <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} / > 
     {/* http://localhost:3000/login */}
     <Route path="/login"  element={user ? <Navigate to="/" /> : <Login />}/>
     {/* http://localhost:3000/ */}
     <Route path="/" element={<Home/>} />
     {/* http://localhost:3000/cart */}
     <Route path="/cart" element={<Cart/>} />
     {/* http://localhost:3000/products/:category */}
     <Route path="/products/:category" element={<ProductList/>} />
     {/* http://localhost:3000/product/:id */}
     <Route path="/product/:id" element={<Product/>} />
     {/* http://localhost:3000/success */}
     <Route path="/success" element={<Success/>} />
   </Routes>
 </>
  );
}

export default App;
