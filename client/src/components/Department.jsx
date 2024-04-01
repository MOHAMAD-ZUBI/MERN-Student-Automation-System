import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { motion } from 'framer-motion';
import { fadeIn } from '../motion/motion';

import Book from '../../public/Book';
import Graduate from '../../public/Graduate';
import Case from '../../public/Case';
import ArrowUp from '../../public/ArrowUp';
import Work from '../../public/Work';
import Plus from '../../public/Plus';
import Badge from '../../public/Badge';

const Department = () => {
  const toggleCourses = (e) => {
    const parentCoursesContainer =
      e.target.closest('.courses-head').nextSibling;

    if (parentCoursesContainer) {
      parentCoursesContainer.classList.toggle('hidden');
    }
  };

  return (
    <div className="departement min-h-screen overflow-hidden">
      <div className="hero-section flex items-center justify-between">
        <motion.h1
          variants={fadeIn('right', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hero-title basis-1/3 font-Montagu text-primary text-[17px] sm:text-[35px] mxl:text-[65px] leading-6 sm:leading-10 mxl:leading-[84px] px-6"
        >
          Computer <br /> Engineering
        </motion.h1>
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="hero-swiper basis-2/3"
        >
          <SwiperSlide>
            <img
              src="./hero-img.png"
              alt="hero-img"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./hero-img.png"
              alt="hero-img"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./hero-img.png"
              alt="hero-img"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./hero-img.png"
              alt="hero-img"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./hero-img.png"
              alt="hero-img"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex items-center justify-between px-6 sm:px-8 mxl:px-10 py-2 sm:py-4 mxl:py-6 bg-primary mb-6">
        <motion.div
          variants={fadeIn('up', 'tween', 0.35, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-1"
        >
          <div className="flex items-center justify-center p-0 w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] mxl:w-[78px] mxl:h-[78px]">
            <Graduate wth="100%" hth="100%" fill="white" />
          </div>
          <p className="font-mukta text-[10px] sm:text-[20px] mxl:text-[30px] text-white text-center">
            Instructors
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-1"
        >
          <div className="flex items-center justify-center p-0 w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] mxl:w-[78px] mxl:h-[78px]">
            <Case wth="100%" hth="100%" fill="white" />
          </div>
          <p className="font-mukta text-[10px] sm:text-[20px] mxl:text-[30px] text-white text-center">
            Secretary
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.45, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-1"
        >
          <div className="flex items-center justify-center p-0 w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] mxl:w-[78px] mxl:h-[78px]">
            <Book wth="100%" hth="100%" fill="white" />
          </div>
          <p className="font-mukta text-[10px] sm:text-[20px] mxl:text-[30px] text-white text-center">
            Courses
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-1"
        >
          <div className="flex items-center justify-center p-0 w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] mxl:w-[78px] mxl:h-[78px]">
            <Plus wth="100%" hth="100%" fill="white" />
          </div>
          <p className="font-mukta text-[10px] sm:text-[20px] mxl:text-[30px] text-white text-center">
            Erasmus
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.55, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-1"
        >
          <div className="flex items-center justify-center p-0 w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] mxl:w-[78px] mxl:h-[78px]">
            <Badge wth="100%" hth="100%" fill="white" />
          </div>
          <p className="font-mukta text-[10px] sm:text-[20px] mxl:text-[30px] text-white text-center">
            Internship
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.6, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-1"
        >
          <div className="flex items-center justify-center p-0 w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] mxl:w-[78px] mxl:h-[78px]">
            <Work wth="100%" hth="100%" fill="white" />
          </div>
          <p className="font-mukta text-[10px] sm:text-[20px] mxl:text-[30px] text-white text-center">
            Workplace Training
          </p>
        </motion.div>
      </div>
      <div className="Instructors mb-[50px]">
        <motion.h3
          variants={fadeIn('left', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full text-center font-Montagu text-primary text-[25px] sm:text-[35px] mxl:text-[55px] mb-5"
        >
          Instructors
        </motion.h3>
        <div className="w-full flex items-center justify-center">
          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
          >
            <img
              src="./profile2.png"
              alt="profile"
              className="w-[100px] sm:w-[200px] mxl:w-[347px]"
            />
            <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
              Prof. ilhami
            </p>
            <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
              Head of the department
            </p>
          </motion.div>
        </div>
        <div className="container">
          <div className="grid grid-cols-3 gap-2">
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
            >
              <img
                src="./profile3.png"
                alt="profile"
                className="w-[100px] sm:w-[200px] mxl:w-[347px]"
              />
              <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                Dr. Lilly
              </p>
              <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
                Assis. Head of the department
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
            >
              <img
                src="./profile2.png"
                alt="profile"
                className="w-[100px] sm:w-[200px] mxl:w-[347px]"
              />
              <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                Prof. ilhami
              </p>
              <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
                Assis. Head of the department
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
            >
              <img
                src="./profile2.png"
                alt="profile"
                className="w-[100px] sm:w-[200px] mxl:w-[347px]"
              />
              <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                Prof. ilhami
              </p>
              <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
                Assis. Head of the department
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
            >
              <img
                src="./profile3.png"
                alt="profile"
                className="w-[100px] sm:w-[200px] mxl:w-[347px]"
              />
              <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                Dr. Lilly
              </p>
              <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
                Assis. Head of the department
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
            >
              <img
                src="./profile2.png"
                alt="profile"
                className="w-[100px] sm:w-[200px] mxl:w-[347px]"
              />
              <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                Prof. ilhami
              </p>
              <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
                Assis. Head of the department
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
            >
              <img
                src="./profile3.png"
                alt="profile"
                className="w-[100px] sm:w-[200px] mxl:w-[347px]"
              />
              <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                Dr. Sara
              </p>
              <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
                Assis. Head of the department
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
            >
              <img
                src="./profile3.png"
                alt="profile"
                className="w-[100px] sm:w-[200px] mxl:w-[347px]"
              />
              <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                Dr. Lilly
              </p>
              <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
                Assis. Head of the department
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
            >
              <img
                src="./profile2.png"
                alt="profile"
                className="w-[100px] sm:w-[200px] mxl:w-[347px]"
              />
              <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                Prof. ilhami
              </p>
              <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
                Assis. Head of the department
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
            >
              <img
                src="./profile3.png"
                alt="profile"
                className="w-[100px] sm:w-[200px] mxl:w-[347px]"
              />
              <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                Dr. Sara
              </p>
              <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
                Assis. Head of the department
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="secretary  mb-[50px] bg-primary py-10 shadow-3xl">
        <motion.h3
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full text-center font-Montagu text-white text-[25px] sm:text-[35px] mxl:text-[55px] mb-5"
        >
          Secretary
        </motion.h3>
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-[6px] mb-[25px]"
        >
          <img
            src="./profile2.png"
            alt="profile"
            className="w-[100px] sm:w-[200px] mxl:w-[347px]"
          />
          <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-white text-center">
            Alex
          </p>
          <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-white text-center">
            Secretary of the department
          </p>
        </motion.div>
      </div>
      <span className="block mb-[50px] w-[300px] sm:w-[700px] mxl:w-[1200px] h-[1px] bg-[#E6E6E6] mx-auto"></span>
      <div className="departement mb-[50px]">
        <motion.h3
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full text-center font-Montagu text-primary text-[25px] sm:text-[35px] mxl:text-[55px] mb-5"
        >
          Department Courses
        </motion.h3>
        <div className="departement-courses">
          <motion.div
            variants={fadeIn('up', 'tween', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="first-year-courses mb-3"
          >
            <div className="courses-head flex items-center justify-between rounded bg-[#FFE6E6] mb-3">
              <h2 className="pl-7 font-mukta text-primary text-[20px] sm:text-[35px] mxl:text-[55px]">
                First Year
              </h2>
              <div
                className="px-1 sm:px-4 mxl:px-6 rounded flex items-center justify-center bg-[#E88287] w-[20px] sm:w-[45px] mxl:w-[68px] h-[40px] sm:h-[60px] mxl:h-[80px] cursor-pointer"
                onClick={toggleCourses}
              >
                <ArrowUp wth="100%" hth="100%" fill="#FFE6E6" />
              </div>
            </div>
            <div className="container courses-container overflow-hidden duration-0.3">
              <div className="content relative flex items-center justify-between mb-6">
                <div className="fall basis-1/2 flex flex-col items-center justify-between gap-[25px]">
                  <h3 className="font-Montagu text-[15px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                    Fall Semester
                  </h3>
                  <div className="fall-courses w-full px-2 sm:px-4 mxl:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[18px] gap-y-[12px]">
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="block w-[1px] h-[300px] mxl:h-[500px] bg-[#E6E6E6]"></span>
                <div className="Spring basis-1/2  flex flex-col items-center justify-between gap-[25px]">
                  <h3 className="font-Montagu text-[15px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                    Spring Semester
                  </h3>
                  <div className="spring-courses w-full px-2 sm:px-4 mxl:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[18px] gap-y-[12px]">
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="second-year-courses mb-3"
          >
            <div className="courses-head flex items-center justify-between rounded bg-[#E6FFEF] mb-3">
              <h2 className="pl-7 font-mukta text-primary text-[20px] sm:text-[35px] mxl:text-[55px]">
                Second Year
              </h2>
              <div
                className="px-1 sm:px-4 mxl:px-6 rounded flex items-center justify-center bg-[#9DF6BB] w-[20px] sm:w-[45px] mxl:w-[68px] h-[40px] sm:h-[60px] mxl:h-[80px] cursor-pointer"
                onClick={toggleCourses}
              >
                <ArrowUp wth="100%" hth="100%" fill="#FFE6E6" />
              </div>
            </div>
            <div className="container courses-container overflow-hidden duration-0.3 hidden">
              <div className="content relative flex items-center justify-between mb-6">
                <div className="fall basis-1/2 flex flex-col items-center justify-between gap-[25px]">
                  <h3 className="font-Montagu text-[15px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                    Fall Semester
                  </h3>
                  <div className="fall-courses w-full px-2 sm:px-4 mxl:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[18px] gap-y-[12px]">
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="block w-[1px] h-[300px] mxl:h-[500px] bg-[#E6E6E6]"></span>
                <div className="Spring basis-1/2  flex flex-col items-center justify-between gap-[25px]">
                  <h3 className="font-Montagu text-[15px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                    Spring Semester
                  </h3>
                  <div className="spring-courses w-full px-2 sm:px-4 mxl:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[18px] gap-y-[12px]">
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.7, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="third-year-courses mb-3"
          >
            <div className="courses-head flex items-center justify-between rounded bg-[#E0EBFF] mb-3">
              <h2 className="pl-7 font-mukta text-primary text-[20px] sm:text-[35px] mxl:text-[55px]">
                Third Year
              </h2>
              <div
                className="px-1 sm:px-4 mxl:px-6 rounded flex items-center justify-center bg-[#87A4DA] w-[20px] sm:w-[45px] mxl:w-[68px] h-[40px] sm:h-[60px] mxl:h-[80px] cursor-pointer"
                onClick={toggleCourses}
              >
                <ArrowUp wth="100%" hth="100%" fill="#FFE6E6" />
              </div>
            </div>
            <div className="container courses-container overflow-hidden duration-0.3 hidden">
              <div className="content relative flex items-center justify-between mb-6">
                <div className="fall basis-1/2 flex flex-col items-center justify-between gap-[25px]">
                  <h3 className="font-Montagu text-[15px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                    Fall Semester
                  </h3>
                  <div className="fall-courses w-full px-2 sm:px-4 mxl:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[18px] gap-y-[12px]">
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="block w-[1px] h-[300px] mxl:h-[500px] bg-[#E6E6E6]"></span>
                <div className="Spring basis-1/2  flex flex-col items-center justify-between gap-[25px]">
                  <h3 className="font-Montagu text-[15px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                    Spring Semester
                  </h3>
                  <div className="spring-courses w-full px-2 sm:px-4 mxl:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[18px] gap-y-[12px]">
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.7, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="fourth-year-courses mb-3"
          >
            <div className="courses-head flex items-center justify-between rounded bg-[#FDFFE0] mb-3">
              <h2 className="pl-7 font-mukta text-primary text-[20px] sm:text-[35px] mxl:text-[55px]">
                Fourth Year
              </h2>
              <div
                className="px-1 sm:px-4 mxl:px-6 rounded flex items-center justify-center bg-[#F4FBA3] w-[20px] sm:w-[45px] mxl:w-[68px] h-[40px] sm:h-[60px] mxl:h-[80px] cursor-pointer"
                onClick={toggleCourses}
              >
                <ArrowUp wth="100%" hth="100%" fill="#FFE6E6" />
              </div>
            </div>
            <div className="container courses-container overflow-hidden duration-0.3 hidden">
              <div className="content relative flex items-center justify-between mb-6">
                <div className="fall basis-1/2 flex flex-col items-center justify-between gap-[25px]">
                  <h3 className="font-Montagu text-[15px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                    Fall Semester
                  </h3>
                  <div className="fall-courses w-full px-2 sm:px-4 mxl:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[18px] gap-y-[12px]">
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="block w-[1px] h-[300px] mxl:h-[500px] bg-[#E6E6E6]"></span>
                <div className="Spring basis-1/2  flex flex-col items-center justify-between gap-[25px]">
                  <h3 className="font-Montagu text-[15px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
                    Spring Semester
                  </h3>
                  <div className="spring-courses w-full px-2 sm:px-4 mxl:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[18px] gap-y-[12px]">
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                      <div className="department-course w-full flex items-center justify-center h-[80px] sm:h-[150px] mxl:h-[240px] px-1 sm:px-2 mxl:px-4 rounded bg-gradient-to-b from-[#FFE6E6] shadow-3xl  duration-0.3 hover:-translate-y-1 cursor-pointer">
                        <p className="text-center font-mukta text-[10px] sm:text-[18px] mxl:text-[25px] text-primary">
                          <span className="text-secondary">MAT209</span> <br />
                          Mathematics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <span className="block mb-[50px] w-[300px] sm:w-[700px] mxl:w-[1200px] h-[1px] bg-[#E6E6E6] mx-auto"></span>
      <div className="erasmus mb-[50px]">
        <motion.h3
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full text-center font-Montagu text-primary text-[25px] sm:text-[35px] mxl:text-[55px] mb-5"
        >
          Erasmus +
        </motion.h3>
        <div className=" bg-primary py-4 sm:py-6 mxl:py-8 flex flex-col items-center justify-between gap-4 sm:gap-6 mxl:gap-8 shadow-3xl">
          <motion.p
            variants={fadeIn('right', 'tween', 0.4, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-Montagu text-white text-[12px] sm:text-[20px] mxl:text-[35px] text-left px-[50px]"
          >
            What is Erasmus+ program?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 'tween', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-[6px]"
          >
            <img
              src="./profile2.png"
              alt="profile"
              className="w-[100px] sm:w-[200px] mxl:w-[347px]"
            />
            <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-white text-center">
              Alex
            </p>
            <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-white text-center">
              Erasmus Program Coordinator
            </p>
          </motion.div>
        </div>
      </div>
      <span className="block mb-[50px] w-[300px] sm:w-[700px] mxl:w-[1200px] h-[1px] bg-[#E6E6E6] mx-auto"></span>
      <div className="internship mb-[50px]">
        <motion.h3
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full text-center font-Montagu text-primary text-[25px] sm:text-[35px] mxl:text-[55px] mb-5"
        >
          Internship
        </motion.h3>
        <div className=" bg-white py-4 sm:py-6 mxl:py-8 flex flex-col items-center justify-between gap-4 sm:gap-6 mxl:gap-8 ">
          <motion.p
            variants={fadeIn('right', 'tween', 0.4, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-Montagu text-primary text-[12px] sm:text-[20px] mxl:text-[35px] text-left px-[50px]"
          >
            What is Internship?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 'tween', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-[6px]"
          >
            <img
              src="./profile2.png"
              alt="profile"
              className="w-[100px] sm:w-[200px] mxl:w-[347px]"
            />
            <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-primary text-center">
              Alex
            </p>
            <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-primary text-center">
              Workplace Training
            </p>
          </motion.div>
        </div>
      </div>
      <span className="block mb-[50px] w-[300px] sm:w-[700px] mxl:w-[1200px] h-[1px] bg-[#E6E6E6] mx-auto"></span>
      <div className="workplace mb-[50px]">
        <motion.h3
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full text-center font-Montagu text-primary text-[25px] sm:text-[35px] mxl:text-[55px] mb-5"
        >
          Workplace Training
        </motion.h3>
        <div className=" bg-primary py-4 sm:py-6 mxl:py-8 flex flex-col items-center justify-between gap-4 sm:gap-6 mxl:gap-8 shadow-3xl">
          <motion.p
            variants={fadeIn('right', 'tween', 0.4, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-Montagu text-white text-[12px] sm:text-[20px] mxl:text-[35px] text-left px-[50px]"
          >
            What is Workplace Training?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 'tween', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-[6px]"
          >
            <img
              src="./profile2.png"
              alt="profile"
              className="w-[100px] sm:w-[200px] mxl:w-[347px]"
            />
            <p className="name font-Montagu text-[10px] sm:text-[25px] mxl:text-[45px] text-white text-center">
              Alex
            </p>
            <p className="name font-mukta text-[10px] sm:text-[20px] mxl:text-[35px] text-white text-center">
              Workplace Coordinator
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Department;
