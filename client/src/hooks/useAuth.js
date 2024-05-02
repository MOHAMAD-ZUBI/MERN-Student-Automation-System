import Cookies from "js-cookie";

const useAuth = () => {
  const token = Cookies.get("token");
  const logout = () => {
    Cookies.remove("token");
    sessionStorage.removeItem("admin");
  };

  return { token, logout };
};

export default useAuth;
