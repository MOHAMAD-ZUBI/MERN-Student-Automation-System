import Cookies from "js-cookie";
const useAuth = () => {
  const token = Cookies.get("token");

  return { token };
};

export default useAuth;
