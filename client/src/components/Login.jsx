import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page relative flex items-center justify-center h-screen">
      <img
        src="./login.png"
        alt="bg-img"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="w-4/5 sm:w-[600px] flex flex-col justify-between items-center gap-4 sm:gap-5 pt-8 pb-[56px] px-4 bg-[#D9D9D9] bg-opacity-[0.85] z-[1]">
        <img
          src="./logo-transparent.png"
          alt="logo"
          className="w-[60px] sm:w-[68px]"
        />
        <h3 className="font-Montagu text-[17px] sm:text-[24px] text-center text-primary">
          Welcome to <span className="text-secondary">e-Campus !</span> <br />{" "}
          Log in To continue
        </h3>

        <div className="flex items-center justify-center w-full gap-4">
          <button
            className={`mt-[20px] sm:mt-[40px] px-[15px] sm:px-[30px] py-1 hover:bg-secondary bg-[#1F3D75]  text-white font-Montagu text-[16px] sm:text-[20px] rounded duration-0.3 "bg-secondary`}
            value="student"
            type="button"
          >
            <Link
              to="/login/academician"
              className="block w-fit text-center font-mukta text-[13px] sm:text-[20px] text-white duration-0.3 "
            >
              Academician
            </Link>
          </button>
          <button
            className={`mt-[20px] sm:mt-[40px] px-[15px] sm:px-[30px] py-1 hover:bg-secondary bg-[#1F3D75]  text-white font-Montagu text-[16px] sm:text-[20px] rounded duration-0.3 "bg-secondary`}
            value="student"
            type="button"
          >
            <Link
              to="/login/student"
              className="block w-fit text-center font-mukta text-[13px] sm:text-[20px] text-white duration-0.3 "
            >
              Student
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
