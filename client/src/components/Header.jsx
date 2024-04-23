import { useState, useEffect } from "react";
import Bell from "../../public/Bell";
import Envlope from "../../public/Envlope";
import House from "../../public/House";
import Logout from "../../public/Logout";
import BurgerMenu from "../../public/BurgerMenu";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import HeaderMessages from "./HeaderMessages";
import HeaderNotifications from "./HeaderNotifications";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMessages = () => {
    const messagesBox = document.querySelector(".header-messages");
    if (windowWidth >= 768 && messagesBox.classList.contains("hidden")) {
      messagesBox.classList.remove("hidden");
      messagesBox.classList.add("flex");
    } else {
      messagesBox.classList.remove("flex");
      messagesBox.classList.add("hidden");
    }
  };

  const hideMessages = () => {
    const messagesBox = document.querySelector(".header-messages");
    if (windowWidth < 768 && messagesBox.classList.contains("flex")) {
      messagesBox.classList.remove("flex");
      messagesBox.classList.add("hidden");
    }
  };

  const toggleNotif = () => {
    const messagesBox = document.querySelector(".header-notifications");
    if (windowWidth >= 768 && messagesBox.classList.contains("hidden")) {
      messagesBox.classList.remove("hidden");
      messagesBox.classList.add("flex");
    } else {
      messagesBox.classList.remove("flex");
      messagesBox.classList.add("hidden");
    }
  };

  const hideNotif = () => {
    const messagesBox = document.querySelector(".header-notifications");
    if (windowWidth < 768 && messagesBox.classList.contains("flex")) {
      messagesBox.classList.remove("flex");
      messagesBox.classList.add("hidden");
    }
  };

  useEffect(() => {
    hideMessages();
    hideNotif();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  function toggleMenu() {
    const menu = document.querySelector(".menu");

    if (menu.classList.contains("-left-full")) {
      menu.classList.remove("-left-full");
      menu.classList.add("left-0");
    } else if (menu.classList.contains("left-0")) {
      menu.classList.remove("left-0");
      menu.classList.add("-left-full");
    }
  }

  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    sessionStorage.removeItem("admin");
  };

  return (
    <>
      <header className="relative bg-primary w-full h-[50px] lg:h-[75px] flex justify-between items-center px-[25px] lg:px-[40px] py-[22px] text-white shadow-5xl">
        <div
          className="menu-btn cursor-pointer flex items-center justify-start lg:basis-1/4 scale-90"
          onClick={toggleMenu}
        >
          <div className="flex justify-center items-center cursor-pointer">
            <BurgerMenu />
          </div>
        </div>
        <div className="logo flex items-center justify-center basis-full sm:basis-auto lg:basis-2/4 scale-90">
          <a
            href="/"
            className=" text-white hover:text-secondary duration-300 text-[20px] sm:text-[38px] font-Montagu font-medium"
          >
            e-Campus
          </a>
        </div>
        <div className="header-links hidden sm:flex justify-end items-center flex-row gap-4 lg:gap-6 lg:basis-1/4 scale-90">
          <div
            className="w-8 h-8 flex justify-center items-center cursor-pointer"
            onClick={toggleNotif}
          >
            <Bell />
          </div>
          <div
            className="w-8 h-8 flex justify-center items-center cursor-pointer"
            onClick={toggleMessages}
          >
            <Envlope />
          </div>
          <div className="w-8 h-8 flex justify-center items-center cursor-pointer">
            <Link to="/">
              <House />
            </Link>
          </div>
          <div className="w-8 h-8 flex justify-center items-center cursor-pointer">
            <Link to="login" onClick={handleLogout}>
              <Logout />
            </Link>
          </div>
        </div>
        <HeaderMessages />
        <HeaderNotifications />
      </header>
      <Menu></Menu>
    </>
  );
};

export default Header;
