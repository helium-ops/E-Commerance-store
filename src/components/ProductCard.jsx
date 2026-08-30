
import { Link } from "react-router-dom";

export default function ProductCards({ product }){
    return(
                <div className='flex justify-center items-center flex-col gap-2 rounded-[2vh] bg-[#F8FAFC] shadow-sm pb-3 p-2 transition duration-[0.3s] hover:-translate-y-3'>
                  <img src={product.image} alt="" className='rounded-[1vh]'/>
                  <div className='flex justify-center items-center flex-col gap-1'>
                    <h3 class="font-semibold text-[1vw] w-[100%]">{product.name}</h3>
                    <p className="font-medium text-[1.2vw]">${product.price}</p>
                  </div>
                  <div className='flex justify-between items-center w-[100%] px-[2%]'>
                    <Link className="bg-black w-[43%] h-[120%] rounded-[0.5vw] font-bold text-white transition duration-[0.3s] hover:opacity-[0.8] text-center pt-1">View details</Link>
                    <button className='bg-blue-500 w-[43%] h-[120%] rounded-[0.5vw] font-bold text-white transition duration-[0.3s] hover:opacity-[0.8]'>Add to cart</button>
                  </div>
                </div>
    )
}