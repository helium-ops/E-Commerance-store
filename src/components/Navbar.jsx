import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="h-[6vh] w-full flex justify-between items-center bg-zinc-50 px-[2%]">
            <div>
               <Link to="/" className="font-bold text-[1.4vw] text-center m-[2%]">Shophub</Link>
            </div>
            <div className="flex justify-between items-center w-[7%]">
              <Link to="/Home" className="nav">Home</Link>
              <Link to="/Cart" className="nav">Cart</Link>
            </div>
        </nav>
    )
}