import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar(){
    const { user, logout } = useContext(AuthContext);
    return(
        <nav className="h-[6vh] w-full flex justify-between items-center bg-zinc-50 px-[2.5%]">
            <div>
               <Link to="/" className="font-bold text-[1.4vw] text-center m-[2%] transition duration-[0.3s] hover-transform[scale(1.1)]">Shophub</Link>
            </div>
            <div className="flex justify-between items-center w-[7%]">
              <Link to="/" className="nav">Home</Link>
              <Link to="/checkout" className="nav">Cart</Link>
            </div>
            { user ? ( <div className=" flex justify-around items-center w-[22.5%]   h-[80%]  relative ">
               <span className="text-sm text-center absolute font-medium mr-40 w-[90%]">Hello, {user.email}</span>
               <button className="h-[80%] w-[29%] ml-60 bg-blue-500 text-white font-semibold rounded-[0.5vh] transition duration-[0.1s] text-[1.1vw] hover:opacity-[0.8] text-center flex justify-center items-center" onClick={logout}>Log out
               </button>
               </div>) : (
               <div className=" flex justify-between items-center w-[12.5%] h-[80%]  relative ">
            <Link to="/auth" className="h-[80%] w-[49%] bg-black text-white font-semibold rounded-[0.5vh] transition duration-[0.1s] text-[1.1vw] hover:opacity-[0.8] text-center flex justify-center items-center">Log in</Link>
            <Link to="/auth" className="h-[80%] w-[49%] bg-blue-500 text-white font-semibold rounded-[0.5vh] transition duration-[0.1s] text-[1.1vw] hover:opacity-[0.8] text-center flex justify-center items-center">Sign up</Link>
            </div> )
            }
            
        </nav>
    )
}