import { getProducts } from '../data/products.js';
import { Link } from "react-router-dom";
import ProductCards from '../components/ProductCard.jsx';

export default function Home(){
    const products = getProducts();
    return(
        <div className="flex flex-col justify-between items-center gap-[2vh] h-[150%] w-[100%] h-[98vh] bg-slate-100 absolute">
            <div className="flex flex-col justify-center items-center gap-[8%] pt-[3%]">
                <h1 class="font-bold text-[2rem] mb-[2%]">Welcome to Shophub!</h1>
                <p className="text-[#4B5563]">Discover amazing products at great prices!</p>
            </div>
        <div className="absolute left-2 my-50 flex justify-center items-center">
                <h2 className="font-semibold text-[1.2vw] ml-2">Our products</h2>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 my-40 w-[85%] gap-6'>
            {products.map((product => (
                <ProductCards product={product} key={product.id}/>
            )))}
            </div>
        </div>
    )
}