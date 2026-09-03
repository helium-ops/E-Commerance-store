
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCards({ product }){
  const {addToCart, cartItems} = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : '';
    return(
                <div className='flex justify-center items-center flex-col gap-2 rounded-[2vh] bg-[#F8FAFC] shadow-sm pb-3 p-2 transition duration-[0.3s] hover:-translate-y-3 border border-slate-200'>
                  <img src={product.image} alt="" className='rounded-[1vh]'/>
                  <div className='flex justify-center items-center flex-col gap-1'>
                    <h3 className="font-semibold text-[1.2vw] w-[100%]">{product.name}</h3>
                    <p className="font-medium text-[1.3vw] text-blue-500">${product.price}</p>
                  </div>
                  <div className='flex justify-between items-center w-[100%] px-[2%]'>
                    <Link className="bg-black w-[43%] h-[120%] rounded-[0.5vw] font-bold text-white transition duration-[0.3s] hover:opacity-[0.8] text-center pt-1" to={`/products/${product.id}`}>View details</Link>
                    <button className='bg-blue-500 w-[43%] h-[120%] rounded-[0.5vw] font-bold text-white transition duration-[0.3s] hover:opacity-[0.8]' onClick={() => addToCart(product.id)}>Add to cart
                      {productQuantityLabel}
                    </button>
                  </div>
                </div>
    )
}