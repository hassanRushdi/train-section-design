import logo from "../assets/logo-1.png";
const Navbar = () => {
  return (
    <div className="w-full px-5 mt-2">
      <nav className="flex justify-between items-center p-4 bg-white ">
        {/* Logo Section */}
        <img src={logo} alt="train logo" className="h-10" />

        {/* Button Section */}
        <div className="flex gap-4">
          {/* Log in Button */}
          <button
            className="px-8 py-2 border border-primary text-primary rounded-md 
          hover:bg-primary hover:text-white transition duration-300 text-sm font-bold"
          >
            Log in
          </button>

          {/* Sign up Button */}
          <button
            className="px-8 py-2 bg-primary text-white rounded-md 
          hover:bg-blue-900 transition duration-300 text-sm font-bold"
          >
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
