import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-1.png";
import { useEffect, useState } from "react";
import { isAuthenticated, logout } from "../utils/auth";

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  const handleLogout = () => {
    logout();
    setAuth(false);
    navigate("/login");
  };

  return (
    <div className="w-full px-5 mt-2">
      <nav className="flex justify-between items-center p-4 bg-white ">
        {/* Logo Section */}
        <img src={logo} alt="train logo" className="h-10" />

        {/* Button Section */}
        
        <div className="flex gap-4">
        {auth ? (
            // If authenticated, show Profile & Logout button
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  {/* Placeholder avatar (You can replace this with an actual profile picture) */}
                  <span className="text-gray-700 font-bold">A</span>
                </div>
                <span className="font-semibold text-gray-700">Ahmed</span>
              </div>

              <button
                onClick={handleLogout}
                className="px-6 py-2 border border-red-500 text-red-500 rounded-md 
                hover:bg-red-500 hover:text-white transition duration-300 text-sm font-bold"
              >
                Sign Out
              </button>
            </div>
          ) : (
            // If not authenticated, show Login & Sign Up buttons
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/login")}
                className="px-8 py-2 border border-primary text-primary rounded-md 
                hover:bg-primary hover:text-white transition duration-300 text-sm font-bold"
              >
                Log in
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="px-8 py-2 bg-primary text-white rounded-md 
                hover:bg-blue-900 transition duration-300 text-sm font-bold"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;