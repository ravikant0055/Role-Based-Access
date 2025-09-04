import { Link, useMatchRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const {user, logout} = useAuth();  
  const navigate = useNavigate(); 
  const matchRoute = useMatchRoute();
  const isLoginPage = matchRoute({to:"/login"});

  const handleLogout = () => {
    logout();
    navigate({to:'/dashboard'});
  }
  return (
    <div className="flex py-3 gap-5 mx-5">
        {user ? (
          <>
             <Link to="/products" activeProps={{ className:"font-bold" }}>Products</Link>
             <button onClick={handleLogout} className="bg-red-200 text-red-600 px-3 py-1 rounded-lg font-medium cursor-pointer">Logout</button>
          </>
          )
          :(
          <>
            {isLoginPage ? (
               <Link to="/dashboard" activeProps={{ className:"font-bold" }}>Dashboard</Link>
            ):(
                <Link to="/login" activeProps={{ className:"font-bold" }}>Login</Link>
            )}
          </>
          )} 
    </div>
  )
}

export default Navbar;