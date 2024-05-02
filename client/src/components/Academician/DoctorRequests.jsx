import SectionTitle from "../repeated/SectionTitle";
import ArrowDown from "../../../public/ArrowDown";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";

const DoctorRequests = () => {
  return (
    <div className="requests pt-[30px] min-h-screen overflow-hidden">
      <div className="container">
        <SectionTitle content="Requests" extras="mb-[45px]" />
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start sm:gap-8">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="active-requests w-full basis-1/2 sm:min-h-[362px] mb-5 bg-neutral-100 bg-opacity-[0.16] rounded border border-neutral-100 border-opacity-[0.32] shadow-4xl"
          >
            <motion.div
              variants={fadeIn("up", "tween", 0.35, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="requests-heading relative flex items-center justify-center py-2 px-3 bg-neutral-300 bg-opacity-20 rounded border border-neutral-100 border-opacity-30 shadow-4xl"
            >
              <h3 className="font-Montagu text-[15px] sm:text-[20px] mxl:text-[25px] text-center text-primary leading-normal drop-shadow-4xl">
                Active Requests{" "}
              </h3>
              <div className="filter absolute top-2 right-3 cursor-pointer flex items-center justify-between gap-1 py-1 pl-[14px] pr-[10px] rounded bg-white">
                <p className=" font-Montagu text-[10px] mxl:text-[20px] text-secondary">
                  Filter
                </p>
                <ArrowDown wth="10" hth="6" fill="#C8272E" />
              </div>
            </motion.div>
            <div className="flex flex-col justify-between items-center gap-3 py-5 px-3">
              <div className="w-full flex items-start justify-center gap-1">
                <motion.div
                  variants={fadeIn("up", "tween", 0.4, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="receiver basis-1/3 rounded bg-[#FFE6E6] border border-[#F5F5F5]"
                >
                  <div className="rounded bg-[#E88287] py-1 px-1 h-[44px] flex justify-center items-center">
                    <h3 className="text-white text-center text-[12px] mxl:text-[20px] font-Montagu drop-shadow-4xl">
                      Receiver
                    </h3>
                  </div>
                  <div className="py-3 px-1 flex flex-col justify-start items-center gap-1">
                    <div className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-white text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Prof.Ilhami ORAK
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-white text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Prof.Ilhami ORAK
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-white text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Prof.Ilhami ORAK
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-white text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Prof.Ilhami ORAK
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-white text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Prof.Ilhami ORAK
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", "tween", 0.35, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="r-type basis-1/3 rounded bg-[#E6FFEF] border border-[#F5F5F5]"
                >
                  <div className="rounded bg-[#9DF6BB] py-1 px-1 h-[44px] flex justify-center items-center">
                    <h3 className="text-white text-center text-[12px] mxl:text-[20px] font-Montagu drop-shadow-4xl">
                      Request Type
                    </h3>
                  </div>
                  <div className="py-3 px-1 flex flex-col justify-start items-center gap-1">
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Internship
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Internship
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Internship
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Internship
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Internship
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", "tween", 0.4, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="action basis-1/3 rounded bg-[#E0EBFF] border border-[#F5F5F5]"
                >
                  <div className="rounded bg-[#87A4DA] py-1 px-1 h-[44px] flex justify-center items-center">
                    <h3 className="text-white text-center text-[12px] mxl:text-[20px] font-Montagu drop-shadow-4xl">
                      Action
                    </h3>
                  </div>
                  <div className="py-3 px-1 flex flex-col justify-start items-center gap-1">
                    <div className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-secondary bg-white rounded py-[2px] px-3 w-full text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Show
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-secondary bg-white rounded py-[2px] px-3 w-full text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Show
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-secondary bg-white rounded py-[2px] px-3 w-full text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Show
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-secondary bg-white rounded py-[2px] px-3 w-full text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Show
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-secondary bg-white rounded py-[2px] px-3 w-full text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Show
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                variants={fadeIn("up", "tween", 0.5, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="pagination flex justify-center items-center gap-1 text-[#939393]"
              >
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
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="past-requests sm:min-h-[362px] w-full basis-1/2 bg-neutral-100 bg-opacity-[0.16] rounded border border-neutral-100 border-opacity-[0.32] shadow-4xl mb-[50px]"
          >
            <motion.div
              variants={fadeIn("up", "tween", 0.35, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="requests-heading relative flex items-center justify-center py-2 px-3 bg-neutral-300 bg-opacity-20 rounded border border-neutral-100 border-opacity-30 shadow-4xl"
            >
              <h3 className="font-Montagu text-[15px] sm:text-[20px] mxl:text-[25px] text-center text-primary leading-normal drop-shadow-4xl">
                Past Requests{" "}
              </h3>
              <div className="filter absolute top-2 right-3 cursor-pointer flex items-center justify-between gap-1 py-1 pl-[14px] pr-[10px] rounded bg-white">
                <p className=" font-Montagu text-[10px] mxl:text-[20px] text-secondary">
                  Filter
                </p>
                <ArrowDown wth="10" hth="6" fill="#C8272E" />
              </div>
            </motion.div>
            <div className="flex flex-col justify-between items-center gap-3 py-5 px-3">
              <div className="w-full flex items-start justify-center gap-1">
                <motion.div
                  variants={fadeIn("up", "tween", 0.4, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="receiver basis-1/4 rounded bg-[#FFE6E6] border border-[#F5F5F5]"
                >
                  <div className="rounded bg-[#E88287] py-1 px-1 h-[44px] flex justify-center items-center">
                    <h3 className="text-white text-center text-[12px] mxl:text-[20px] font-Montagu drop-shadow-4xl">
                      Receiver
                    </h3>
                  </div>
                  <div className="py-3 px-1 flex flex-col justify-start items-center gap-1">
                    <div className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-white text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Prof.Ilhami ORAK
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-white text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Prof.Ilhami ORAK
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-white text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Prof.Ilhami ORAK
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-white text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Prof.Ilhami ORAK
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-white text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Prof.Ilhami ORAK
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", "tween", 0.35, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="r-type basis-1/4 rounded bg-[#E6FFEF] border border-[#F5F5F5]"
                >
                  <div className="rounded bg-[#9DF6BB] py-1 px-1 h-[44px] flex justify-center items-center">
                    <h3 className="text-white text-center text-[12px] mxl:text-[20px] font-Montagu drop-shadow-4xl">
                      Request Type
                    </h3>
                  </div>
                  <div className="py-3 px-1 flex flex-col justify-start items-center gap-1">
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Internship
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Internship
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Internship
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Internship
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Internship
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", "tween", 0.35, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="status basis-1/4 rounded bg-[#E6FFEF] border border-[#F5F5F5]"
                >
                  <div className="rounded bg-[#9DF6BB] py-1 px-1 h-[44px] flex justify-center items-center">
                    <h3 className="text-white text-center text-[12px] mxl:text-[20px] font-Montagu drop-shadow-4xl">
                      Status
                    </h3>
                  </div>
                  <div className="py-3 px-1 flex flex-col justify-start items-center gap-1">
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Approved
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Approved
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Approved
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Declined
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Declined
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", "tween", 0.4, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="action basis-1/ rounded bg-[#E0EBFF] border border-[#F5F5F5]"
                >
                  <div className="rounded bg-[#87A4DA] py-1 px-1 h-[44px] flex justify-center items-center">
                    <h3 className="text-white text-center text-[12px] mxl:text-[20px] font-Montagu drop-shadow-4xl">
                      Action
                    </h3>
                  </div>
                  <div className="py-3 px-1 flex flex-col justify-start items-center gap-1">
                    <div className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-secondary bg-white rounded py-[2px] px-3 w-full text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Show
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-secondary bg-white rounded py-[2px] px-3 w-full text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Show
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-secondary bg-white rounded py-[2px] px-3 w-full text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Show
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-secondary bg-white rounded py-[2px] px-3 w-full text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Show
                      </p>
                    </div>
                    <div className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center">
                      <p className="text-secondary bg-white rounded py-[2px] px-3 w-full text-center text-[8px] mxl:text-[18px] font-Montagu">
                        Show
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                variants={fadeIn("up", "tween", 0.5, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="pagination flex justify-center items-center gap-1 text-[#939393]"
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DoctorRequests;
