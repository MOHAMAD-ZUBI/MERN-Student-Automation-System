/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import { Link, useLocation } from "react-router-dom";
import SectionTitle from "../repeated/SectionTitle";
import ArrowDown from "../../../public/ArrowDown";
import Search from "../../../public/Search";
import { useEffect, useState } from "react";
import api from "../../utils/Request";
import useAuth from "../../hooks/useAuth";

const Course = () => {
  const location = useLocation();
  const courseId = new URLSearchParams(location.search).get("courseId");

  const { token } = useAuth();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await api.get(`/course/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourse(course.data);
    };

    fetchCourse();
  });

  return (
    <div className="course  pt-[30px] min-h-screen overflow-hidden">
      <div className="container overflow-hidden">
        <SectionTitle content="PRG209 Programming" extras="mb-[45px]" />
        <motion.p
          variants={fadeIn("left", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="block w-full sm:w-2/3 text-secondary text-[12px] ml:text-[18px] text-left font-Montagu leading-normal mb-6"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-start gap-0 mb-12"
        >
          <img
            src="./profile-pic.png"
            alt="profile img"
            className="w-[50px] ml:w-[100px]"
          />
          <div className="flex items-start justify-between flex-col gap-0 w-[240px] py-[5px] px-[10px] bg-primary rounded-l-none rounded-r text-left">
            <p className="w-full text-left text-white text-[14px] ml:text-[22px]">
              Dr. Sam Felix
            </p>
            <Link
              to="/profile"
              className="text-white underline cursor-pointer text-left font-Montagu text-[9px] ml:text-[14px] hover:text-secondary duration-0.3"
            >
              View Profile
            </Link>
          </div>
        </motion.div>
        <motion.h3
          variants={fadeIn("left", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-Montagu font-normal text-[15px] sm:text-[20px] text-primary leading-none drop-shadow-4xl mb-4"
        >
          Notes & Related Links
        </motion.h3>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="active-requests w-full basis-1/2 sm:min-h-[362px] bg-neutral-100 bg-opacity-[0.16] rounded border border-neutral-100 border-opacity-[0.32] shadow-4xl mb-[50px]"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.35, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex items-center justify-between gap-1 py-2 px-3 bg-neutral-300 bg-opacity-20 rounded border border-neutral-100 border-opacity-30 shadow-4xl"
          >
            <h3 className="basis-1/5 sm:basis-1/4 font-mukta text-[10px] sm:text-[16px] mxl:text-[20px] text-left text-secondary leading-none">
              Category name
            </h3>
            <div className="search basis-2/5 sm:basis-2/4 h-[23px] ml:h-[30px] mxl:h-[38px] relative cursor-pointer">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
                className="absolute h-full w-full top-0 left-0 rounded bg-[#D9D9D9] px-[5px] ml:px-[10px] mxl:px-[15px] outline-none border-none text-[10px] ml:text-[16px] mxl:text-[20px] text-white"
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-[10px] ml:w-[20px] mxl:w-[30px] h-[12px] ml:h-[20px] mxl:h-[25px]">
                <Search wth="100%" hth="100%" fill="#595959" />
              </div>
            </div>
            <div className="basis-2/5 sm:basis-1/4 flex items-center justify-end gap-1">
              <div className="filter cursor-pointer flex items-center justify-center py-1 px-[10px] rounded bg-white">
                <p className=" font-Montagu text-[10px] ml:text-[16px] mxl:text-[20px] text-secondary">
                  Sort By
                </p>
              </div>
              <div className="filter cursor-pointer flex items-center justify-between gap-1 py-1 pl-[10px] pr-[8px] rounded bg-white">
                <p className=" font-Montagu text-[10px] ml:text-[16px] mxl:text-[20px] text-secondary">
                  Filter
                </p>
                <ArrowDown wth="10" hth="6" fill="#C8272E" />
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col justify-between items-center gap-10 py-5 px-3">
            <div className="w-full flex flex-col ml:flex-row flex-wrap gap-2 items-start justify-center ml:justify-start">
              <motion.div
                variants={fadeIn("up", "tween", 0.35, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full py-[5px] px-[12px] ml:w-[45%] ml:min-h-[88px] flex items-center justify-between gap-5 bg-white shadow-4xl border border-white border-opacity-[0.36]"
              >
                <img src="./pdf.png" alt="pdf" className="w-[55px]" />
                <div className=" flex-1 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-mukta text-primary text-[15px]">
                      Week 3 Exercises.pdf{" "}
                    </p>
                    <span className="font-mukta text-primary text-[15px]">
                      ...
                    </span>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <p className="font-mukta text-primary text-[10px]">
                      1 / 12 / 2023
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "tween", 0.4, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full py-[5px] px-[12px] ml:w-[45%] ml:min-h-[88px] flex items-center justify-between gap-5 bg-white shadow-4xl border border-white border-opacity-[0.36]"
              >
                <img src="./pptx.png" alt="pdf" className="w-[55px]" />
                <div className=" flex-1 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-mukta text-primary text-[15px]">
                      Week 3 Exercises.pdf{" "}
                    </p>
                    <span className="font-mukta text-primary text-[15px]">
                      ...
                    </span>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <p className="font-mukta text-primary text-[10px]">
                      1 / 12 / 2023
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "tween", 0.45, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full py-[5px] px-[12px] ml:w-[45%] ml:min-h-[88px] flex items-center justify-between gap-5 bg-white shadow-4xl border border-white border-opacity-[0.36]"
              >
                <img src="./xls.png" alt="pdf" className="w-[55px]" />
                <div className=" flex-1 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-mukta text-primary text-[15px]">
                      Week 3 Exercises.pdf{" "}
                    </p>
                    <span className="font-mukta text-primary text-[15px]">
                      ...
                    </span>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <p className="font-mukta text-primary text-[10px]">
                      1 / 12 / 2023
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "tween", 0.5, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full py-[5px] px-[12px] ml:w-[45%] ml:min-h-[88px] flex items-center justify-between gap-5 bg-white shadow-4xl border border-white border-opacity-[0.36]"
              >
                <img src="./docx.png" alt="pdf" className="w-[55px]" />
                <div className=" flex-1 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-mukta text-primary text-[15px]">
                      Week 3 Exercises.pdf{" "}
                    </p>
                    <span className="font-mukta text-primary text-[15px]">
                      ...
                    </span>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <p className="font-mukta text-primary text-[10px]">
                      1 / 12 / 2023
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="pagination flex justify-center items-center gap-1 text-[#939393]">
              <span className="rounded border border-[#93939370] py-1 px-2 cursor-pointer">
                <p className=" font-mukta text-[10px] mxl:text-[16px] text-center text-[#939393] font-bold">
                  1
                </p>
              </span>
              <span className="rounded border border-[#93939370] py-1 px-2 cursor-pointer">
                <p className=" font-mukta text-[10px] mxl:text-[16px] text-center text-[#939393] font-bold">
                  2
                </p>
              </span>
              ..
              <span className="rounded border border-[#93939370] py-1 px-2 cursor-pointer">
                <p className=" font-mukta text-[10px] mxl:text-[16px] text-center text-[#939393] font-bold">
                  4
                </p>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Course;
