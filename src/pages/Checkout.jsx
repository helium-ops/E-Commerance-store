import { useCart } from "../context/CartContext"

export default function Checkout(){
    const { getCartItemsWithProducts } = useCart();
    const cartItems = getCartItemsWithProducts();
    return(
        <div className="checkout-page flex flex-col justify-between items-start p-4 flex-wrap gap-[2vh] h-[90%] w-[100%] h-[98vh] bg-slate-100 absolute">
<div className="checkout-inner h-[80vh] w-auto absolute flex justify-start items-start flex-col ">
                <h1 className="checkout-title font-bold text-4.5">Checkout</h1>
                <div className="checkout-summary rounded-[1vh] flex justify-start items-start">
                    <div>
                        <h2>Order summary</h2>
                        {cartItems.map((item)=>
                        <div className="cart-item flex justify-between items-center bg-white mb-2 h-[35%] rounded-[2vh] shadow-sm w-[400%] absolute">
                            <img src={item.product.image} alt="" className="cart-image rounded-[2vh] h-[75%] w-[35%]"/>
                            <div className="cart-content flex justify-start items-start pb-20">
                        <div className="cart-name-row flex justify-between items-center">
                            <h3 className="cart-name">{item.product.name}</h3>
                            <p className="cart-price">${item.product.price}</p>
                            </div>
                            <div className="quantity-control">
                                <button>-</button>
                                <p>0</p>
                                <button>+</button>
                            </div>
                            <p className="cart-total">${(item.product.price * item.quantity)}</p>
                            <button className="remove-button">Remove</button>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}