import { useState } from "react";
import LoginPic from "../assets/login-picture.jpg";
import Logo from "../assets/logo-2.png";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login(email, password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div>
      {/* Picture */}
      <div className=" w-[80%] flex mx-auto mt-14 gap-20 justify-center">
        {/* Picture section */}
        <div>
          {/* Picture itself */}
          <div
            className="w-[400px] h-[560px] relative flex items-center px-4"
            style={{
              backgroundImage: `url('${LoginPic}')`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="absolute bottom-0 left-0 z-10 opacity-55 w-full h-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(6, 49, 95, 0.82) 47%, rgba(255, 255, 255, 0.97)",
              }}
            ></div>
            <p className="text-center font-bold">
              At TRAIN, we bring learning to life by blending real-world
              expertise with academic knowledge. Our programs are led by
              industry professionals who share hands-on experience, ensuring a
              perfect balance of practical skills and theoretical insights to
              help you excel in your field.
            </p>
            <img
              src={Logo}
              alt="logo"
              className="w-[140px] absolute bottom-0 left-0 z-[100]"
            />
          </div>
        </div>
        {/* Login form */}
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
            <h2 className="text-3xl font-bold text-black mb-2">
              Welcome to TRAIN!
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              If you don’t have an account?{" "}
              <span className="text-primary font-medium cursor-pointer">
                Sign up
              </span>
            </p>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <form onSubmit={handleLogin} className="flex flex-col">
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>

              <div className="flex justify-between items-center text-sm mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" required />I agree to
                  the{" "}
                  <span className="text-primary font-medium cursor-pointer">
                    Terms & Conditions
                  </span>
                </label>
                <span className="text-primary font-medium cursor-pointer">
                  Forget Password?
                </span>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md text-lg font-medium hover:bg-blue-800 transition"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
