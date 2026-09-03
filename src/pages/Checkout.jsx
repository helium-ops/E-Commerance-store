import { useCart } from "../context/CartContext"

export default function Checkout(){
    const { getCartItemsWithProducts, updateQuantity, removeFromCart } = useCart();
    const cartItems = getCartItemsWithProducts();
    return(
        <div className="checkout-page flex flex-col items-start">
            <div className="checkout-inner flex flex-col items-start">
                <h1 className="checkout-title font-bold text-4.5">Checkout</h1>
                <div className="checkout-summary rounded-[1vh] flex justify-start items-start">
                    <div>
                        <h2>Order summary</h2>
                        {cartItems.map((item)=>
                        <div className="cart-item">
                            <img src={item.product.image} alt={item.product.name} className="cart-image"/>
                            <div className="cart-content">
                        <div className="cart-name-row">
                            <h3 className="cart-name">{item.product.name}</h3>
                            <p className="cart-price">${item.product.price}</p>
                            </div>
                            <div className="quantity-control">
                                <button onClick={()=>updateQuantity(item.id, item.quantity - 1)}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={()=>updateQuantity(item.id, item.quantity + 1)}>+</button>
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