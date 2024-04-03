import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Close from '../../public/Close';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion/motion';
import { useAuth } from './Auth';

const Menu = () => {
  //Close the menu
  const closeMenu = () => {
    const menu = document.querySelector('.menu');

    if (menu.classList.contains('-left-full')) {
      menu.classList.remove('-left-full');
      menu.classList.add('left-0');
    } else if (menu.classList.contains('left-0')) {
      menu.classList.remove('left-0');
      menu.classList.add('-left-full');
    }
  };

  // Close the menu when clicking outside the menu
  const handleClickOutsideMenu = (event) => {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('left-0')) {
      if (
        !event.target.closest('.menu') &&
        !event.target.closest('.menu-btn')
      ) {
        console.log('yes');

        menu.classList.remove('left-0');
        menu.classList.add('-left-full');
      }
    }
  };

  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    sessionStorage.removeItem('admin');
  };

  // Add event listeners for clicking outside the menu and unmounting the component
  useEffect(() => {
    document.addEventListener('click', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

  const admin = sessionStorage.getItem('admin');

  return (
    <div className="menu bg-[#1F3D75] flex flex-col justify-start sm:justify-center items-center gap-10 fixed w-full sm:w-[450px] h-screen z-40 pt-[52px] pb-[67px] px-[56px] top-0 -left-full duration-0.3">
      <span
        className="close-menu absolute w-5 top-[22px] left-[25px] sm:left-[40px] cursor-pointer"
        onClick={closeMenu}
      >
        <Close></Close>
      </span>
      <div className="logo flex sm:hidden items-center justify-center">
        <Link
          to="/"
          className=" text-white hover:text-secondary text-[20px] sm:text-[38px] font-Montagu font-medium duration-0.3"
          onClick={closeMenu}
        >
          e-Campus
        </Link>
      </div>
      <ul className="menu-links flex items-start justify-center w-full flex-col gap-5">
        <motion.li
          variants={fadeIn('right', 'tween', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            to="/profile"
            className="text-white hover:text-secondary text-[22px] font-Montagu font-normal duration-0.3"
            onClick={closeMenu}
          >
            Profile
          </Link>
        </motion.li>
        <motion.li
          variants={fadeIn('right', 'tween', 0.15, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            to="/requests"
            className="text-white hover:text-secondary text-[22px] font-Montagu font-normal duration-0.3"
            onClick={closeMenu}
          >
            Requests
          </Link>
        </motion.li>
        <motion.li
          variants={fadeIn('right', 'tween', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            to="/courses"
            className="text-white hover:text-secondary text-[22px] font-Montagu font-normal duration-0.3"
            onClick={closeMenu}
          >
            Courses
          </Link>
        </motion.li>
        <motion.li
          variants={fadeIn('right', 'tween', 0.25, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            to={
              admin === 'student' ? '/project-group' : '/senior-project-groups'
            }
            className="text-white hover:text-secondary text-[22px] font-Montagu font-normal duration-0.3"
            onClick={closeMenu}
          >
            Senior Project Groups
          </Link>
        </motion.li>
        <motion.li
          variants={fadeIn('right', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            to="/department"
            className="text-white hover:text-secondary text-[22px] font-Montagu font-normal duration-0.3"
            onClick={closeMenu}
          >
            Department
          </Link>
        </motion.li>
      </ul>

      <motion.button
        variants={fadeIn('up', 'tween', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="log-out sm:hidden w-[160px] h-[48px] bg-secondary hover:bg-transparent rounded-[3px] border-2 border-secondary text-center text-white text-[22px] font-Montagu font-normal py-[6px] px-[10px] duration-0.3"
      >
        <Link to="/login" onClick={handleLogout}>
          Log Out
        </Link>
      </motion.button>
    </div>
  );
};

export default Menu;
