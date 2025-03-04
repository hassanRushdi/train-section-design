import { useState } from "react";
import LoginPic from "../assets/login-picture.jpg";
import Logo from "../assets/logo-2.png";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Picture */}
      <div className=" w-full flex gap-10 justify-center">
        {/* Picture section */}
        <div className="w-1/2">
          {/* Picture itself */}
          <div
            className="w-full h-screen relative flex items-center px-10"
            style={{
              backgroundImage: `url('${LoginPic}')`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="absolute bottom-0 left-0 z-10 opacity-55 w-full h-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(6, 49, 95, 0.82) 47%, rgba(255, 255, 255, 0.97) 100%)",
              }}
            ></div>
            <p className="text-center font-bold text-lg">
              At TRAIN, we bring learning to life by blending real-world
              expertise with academic knowledge. Our programs are led by
              industry professionals who share hands-on experience, ensuring a
              perfect balance of practical skills and theoretical insights to
              help you excel in your field.
            </p>
            <img
              src={Logo}
              alt="logo"
              className="w-[230px] absolute bottom-0 left-0 z-[100]"
            />
          </div>
        </div>
        {/* Login form */}
        <div className="w-1/2  items-center justify-center">
          <div className="bg-white p-8 space-y-5">
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
                  the{"  "}
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
                className="w-full bg-primary text-white py-2 rounded-md text-lg font-medium hover:bg-blue-800 transition mt-5 disabled:bg-gray-500 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {" "}
                {loading ? (
                  <>
                  <div className="flex justify-center items-center">
                    <ImSpinner2 className="animate-spin mr-2" />
                    Logging in...
                  </div>
                  </>
                ) : (
                  "Log in"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
