import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Checkout from "./pages/Checkout.jsx";
import Navbar from "./components/Navbar.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  
  return(
    <AuthProvider>
      <Navbar/>
    <div className='app'>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/products/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </div>
    </AuthProvider>
  )
}

export default App
