import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="h-[6vh] w-full flex justify-between items-center bg-zinc-50 px-[2.5%]">
            <div>
               <Link to="/" className="font-bold text-[1.4vw] text-center m-[2%] transition duration-[0.3s] hover-transform[scale(1.1)]">Shophub</Link>
            </div>
            <div className="flex justify-between items-center w-[7%]">
              <Link to="/" className="nav">Home</Link>
              <Link to="/checkout" className="nav">Cart</Link>
            </div>
            <div className="flex justify-between items-center w-[13%] h-[80%]">
                <Link to="/auth" className="h-[80%] w-[49%] bg-black text-white font-semibold rounded-[0.5vh] transition duration-[0.1s] text-[1.1vw] hover:opacity-[0.8] text-center flex justify-center items-center">Log in</Link>
                <Link to="/auth" className="h-[80%] w-[49%] text-white font-semibold rounded-[0.5vh] bg-blue-500 transition duration-[0.1s] text-[1.1vw] hover:opacity-[0.9] text-center flex jusitfy-center items-center pl-2.5">Sign up</Link>
            </div>
            
        </nav>
    )
}