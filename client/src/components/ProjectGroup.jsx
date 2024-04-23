import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
import { Link } from "react-router-dom";
import SectionTitle from "./repeated/SectionTitle";
import ArrowDown from "../../public/ArrowDown";
import Search from "../../public/Search";

const ProjectGroup = () => {
  return (
    <div className="course  pt-[30px] min-h-screen overflow-hidden scale-95">
      <div className="container overflow-hidden">
        <SectionTitle content="Senior Project Groups" extras="mb-[45px]" />
        <div className="sm:flex justify-between items-center relative">
          <motion.div
            variants={fadeIn("left", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="members w-full flex flex-col items-center sm:items-start justify-start rounded bg-gradient-to-b from-[#FFE6E6] pt-2 sm:pt-6 pb-4 sm:pb-6 px-5 sm:px-8 shadow-3xl mb-6"
          >
            <span className="sm:basis-1/4 flex justify-center items-end gap-1 sm:gap-4 mb-4">
              <img
                src="./members.png"
                alt="members"
                className="w-[25px] sm:w-[40px]"
              />
              <p className="font-Montagu text-secondary text-[12px] sm:text-[20px] leading-none">
                Members
              </p>
            </span>
            <h4 className="sm:basis-1/4 text-left w-full font-Montagu text-[12px] sm:text-[18px] text-primary mb-3">
              1. Nisreen Bouta
            </h4>
            <h4 className="sm:basis-1/4 text-left w-full font-Montagu text-[12px] sm:text-[18px] text-primary mb-3">
              1. Nisreen Bouta
            </h4>
            <h4 className="sm:basis-1/4 text-left w-full font-Montagu text-[12px] sm:text-[18px] text-primary mb-3">
              1. Nisreen Bouta
            </h4>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-start gap-0 mb-12 sm:absolute sm:right-10 my-auto"
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
        </div>
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
              Reports & files
            </h3>
            <div className="search hidden sm:block basis-2/5 sm:basis-2/4 h-[23px] ml:h-[30px] mxl:h-[38px] relative cursor-pointer">
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
            <div className="basis-3/5 sm:basis-1/4 flex items-center justify-end gap-1">
              <div className="cursor-pointer flex items-center justify-between gap-1 py-1 pl-[10px] pr-[8px] rounded bg-white">
                <p className=" font-Montagu text-[10px] ml:text-[16px] mxl:text-[20px] text-secondary">
                  Add Files
                </p>
                <span className="flex items-center text-[10px] ml:text-[14px] text-secondary font-bold leading-none">
                  +
                </span>
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
            <div className="w-full flex flex-col ml:flex-row flex-wrap gap-2 sm:gap-4 items-start justify-center ml:justify-start">
              <motion.div
                variants={fadeIn("up", "tween", 0.35, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full py-[5px] px-[12px] ml:w-[45%] ml:min-h-[88px] flex items-center justify-between gap-5 bg-white shadow-4xl border border-white border-opacity-[0.36]"
              >
                <img
                  src="./pdf.png"
                  alt="pdf"
                  className="w-[55px] sm:w-[70px]"
                />
                <div className=" flex-1 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-mukta text-primary text-[15px] sm:text-[20px] mxl:text-[22px]">
                      Week 3 Exercises.pdf{" "}
                    </p>
                    <span className="font-mukta text-primary text-[15px] sm:text-[20px] mxl:text-[22px] tracking-widest">
                      ...
                    </span>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <p className="font-mukta text-primary text-[10px] sm:text-[14px] mxl:text-[16px]">
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
                <img
                  src="./pptx.png"
                  alt="pdf"
                  className="w-[55px] sm:w-[70px]"
                />
                <div className=" flex-1 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-mukta text-primary text-[15px] sm:text-[20px] mxl:text-[22px]">
                      Week 3 Exercises.pdf{" "}
                    </p>
                    <span className="font-mukta text-primary text-[15px] sm:text-[20px] mxl:text-[22px] tracking-widest">
                      ...
                    </span>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <p className="font-mukta text-primary text-[10px] sm:text-[14px] mxl:text-[16px]">
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
                <img
                  src="./xls.png"
                  alt="pdf"
                  className="w-[55px] sm:w-[70px]"
                />
                <div className=" flex-1 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-mukta text-primary text-[15px] sm:text-[20px] mxl:text-[22px]">
                      Week 3 Exercises.pdf{" "}
                    </p>
                    <span className="font-mukta text-primary text-[15px] sm:text-[20px] mxl:text-[22px] tracking-widest">
                      ...
                    </span>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <p className="font-mukta text-primary text-[10px] sm:text-[14px] mxl:text-[16px]">
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
                <img
                  src="./docx.png"
                  alt="pdf"
                  className="w-[55px] sm:w-[70px]"
                />
                <div className=" flex-1 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-mukta text-primary text-[15px] sm:text-[20px] mxl:text-[22px]">
                      Week 3 Exercises.pdf{" "}
                    </p>
                    <span className="font-mukta text-primary text-[15px] sm:text-[20px] mxl:text-[22px] tracking-widest">
                      ...
                    </span>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <p className="font-mukta text-primary text-[10px] sm:text-[14px] mxl:text-[16px]">
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

export default ProjectGroup;
