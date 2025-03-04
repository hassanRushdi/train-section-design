import axios from "axios";

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      "https://vigtas.co/lms/login",
      new URLSearchParams({ email, password }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    if (response.data.success && response.data.data.authorization?.token) {
      localStorage.setItem("token", response.data.data.authorization.token);
      return { success: true };
    } else {
      return { success: false, message: "Invalid response from server" };
    }
  } catch (err) {
    return { success: false, message: err.response?.data?.message || "Login failed" };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
}