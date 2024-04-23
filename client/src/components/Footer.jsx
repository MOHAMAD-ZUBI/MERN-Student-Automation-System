import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between flex-col bg-primary w-full h-auto lg:h-[300px] mb-[66px] sm:mb-0 px-[20px] lg:px-[190px] pt-[30px] lg:pt-[60px] pb-[40px] lg:pb-[50px]">
      <div className=" scale-75">
        <div className="flex flex-row items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-[20px] lg:gap-0 lg:basis-3/4">
          <div className="flex items-center justify-start lg:justify-between flex-col gap-4 lg:gap-6">
            <img
              className="w-[50px] h-[40px] lg:w-[76px] lg:h-[58px]"
              src="./logo.png"
              alt="logo"
            />
            <Link
              to="/"
              className="text-white hover:text-secondary text-[20px] lg:text-[32px] font-Montagu font-normal leading-none duration-0.3"
            >
              e-Campus
            </Link>
          </div>
          <div className="flex items-center justify-start lg:justify-between flex-col gap-4 lg:gap-6">
            <h3 className="text-white text-[18px] lg:text-[32px] font-Montagu font-normal leading-none">
              About Us
            </h3>
            <div className="flex justify-center items-center flex-col">
              <Link
                to="/"
                className="text-white hover:text-secondary text-[16px] lg:text-[23px] font-normal duration-0.3"
              >
                Who Are we?
              </Link>
              <Link
                to="/"
                className="text-white hover:text-secondary text-[16px] lg:text-[23px] font-normal duration-0.3"
              >
                What Is e-Campus?
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-start lg:justify-between flex-col gap-4 lg:gap-6">
            <h3 className="text-white text-[18px] lg:text-[32px] font-Montagu font-normal leading-none">
              Contact Us
            </h3>
            <div className="flex justify-center items-center flex-col">
              <a
                href="/"
                className="text-white hover:text-secondary text-[16px] lg:text-[23px] font-normal duration-0.3"
              >
                info@karabuk.com
              </a>
              <a
                href="/"
                className="text-white hover:text-secondary text-[16px] lg:text-[23px] font-normal duration-0.3"
              >
                +9076492572092
              </a>
            </div>
          </div>
          <div className="flex items-center justify-start lg:justify-between flex-col gap-4 lg:gap-6">
            <h3 className="text-white text-[18px] lg:text-[32px] font-Montagu font-normal leading-none">
              Social Media
            </h3>
            <div className="flex justify-center items-center flex-col">
              <a
                href="https://www.facebook.com/"
                className="text-white hover:text-secondary text-[16px] lg:text-[23px] font-normal duration-0.3"
              >
                facebook
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-white hover:text-secondary text-[16px] lg:text-[23px] font-normal duration-0.3"
              >
                instagram
              </a>
            </div>
          </div>
        </div>

        <div className="copy-rights">
          <p className="text-white text-[12px] lg:text-[18px] font-normal leading-6 lg:leading-9 text-center mt-8">
            Copyright © KBÜ <br></br> KBÜ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
