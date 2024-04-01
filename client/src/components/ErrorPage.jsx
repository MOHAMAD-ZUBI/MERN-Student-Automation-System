const ErrorPage = () => {
  return (
    <div className="w-full h-[572px] flex flex-col items-center justify-center">
      <h1 className="font-mukta font-black text-center text-secondary text-[45px]">
        404
      </h1>
      <h3 className="font-Montagu text-center text-primary text-[22px]">
        Page not found!
      </h3>
      <a
        href="/"
        className="block py-1 px-4 rounded mt-4 border border-secondary bg-secondary hover:bg-transparent duration-0.3 font-Montagu text-center text-white hover:text-secondary text-[18px]"
      >
        Return Home
      </a>
    </div>
  );
};

export default ErrorPage;
