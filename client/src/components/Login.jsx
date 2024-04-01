import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Person from '../../public/Person';
import Password from '../../public/Password';
import { useAuth } from './Auth';

const Login = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = () => {
    if (auth.user == 'student' || auth.user == 'doctor') {
      navigate('/', { replace: true });
      sessionStorage.setItem('admin', auth.user);
    } else {
      document.querySelector('.user-state').classList.remove('hidden');
    }
  };

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
          Welcome to <span className="text-secondary">e-Campus !</span> <br />{' '}
          Log in To continue
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login-form w-full sm:w-3/4 flex flex-col items-center"
        >
          <div className="email-input w-full flex items-center justify-start h-[45px] rounded bg-white p-0 mb-[10px]">
            <div className="flex items-center justify-center w-[40px] h-full p-[7px] bg-[#F5F5F5] rounded">
              <Person wth="100%" hth="100%" fill="#223f76" />
            </div>
            <input
              className="flex-1 h-full py-[6px] px-3 outline-none rounded text-[17px] sm:text-[20px] font-Montagu text-primary"
              type="email"
              placeholder="Enter Email"
              {...register('email', { required: 'this is required.' })}
            />
          </div>
          <p className="w-full py-1 pl-[52px] font-mukta font-medium text-secondary text-[16px]">
            {errors.email?.message}
          </p>
          <div className="password-input w-full flex items-center justify-start h-[45px] rounded bg-white p-0">
            <div className="flex items-center justify-center w-[40px] h-full p-[7px] bg-[#F5F5F5] rounded">
              <Password wth="100%" hth="100%" fill="#223f76" />
            </div>
            <input
              className="flex-1 h-full py-[6px] px-3 outline-none rounded text-[17px] sm:text-[20px] font-Montagu text-primary"
              type="password"
              placeholder="Enter Password"
              {...register('password', {
                required: 'this is required.',
                minLength: {
                  value: 8,
                  message: 'password must be long enough',
                },
              })}
            />
          </div>
          <p className="w-full py-1 pl-[52px] font-mukta font-medium text-secondary text-[16px]">
            {errors.password?.message}
          </p>

          <Link
            to="/"
            className="block w-fit text-center font-mukta text-[13px] sm:text-[20px] text-[#1F3D75] hover:text-secondary duration-0.3 underline"
          >
            Forgot Your Password?
          </Link>

          <div className="flex items-center justify-center w-full gap-4">
            <button
              className={`mt-[20px] sm:mt-[40px] px-[15px] sm:px-[30px] py-1 hover:bg-secondary text-white font-Montagu text-[16px] sm:text-[20px] rounded duration-0.3 ${
                auth.user === 'doctor' ? 'bg-secondary' : 'bg-primary'
              }`}
              value="doctor"
              type="button"
              onClick={(e) => {
                auth.login(e.target.value);
              }}
            >
              Doctor
            </button>
            <button
              className={`mt-[20px] sm:mt-[40px] px-[15px] sm:px-[30px] py-1 hover:bg-secondary text-white font-Montagu text-[16px] sm:text-[20px] rounded duration-0.3 ${
                auth.user === 'student' ? 'bg-secondary' : 'bg-primary'
              }`}
              value="student"
              type="button"
              onClick={(e) => {
                auth.login(e.target.value);
              }}
            >
              Student
            </button>
          </div>
          <p className="user-state hidden w-full py-1 text-center font-mukta font-medium text-secondary text-[16px]">
            please choose one!
          </p>
          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="mt-[20px] sm:mt-[40px] px-[45px] sm:px-[70px] py-1 bg-secondary text-white font-Montagu text-[20px] sm:text-[23px] rounded hover:bg-primary duration-0.3"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
