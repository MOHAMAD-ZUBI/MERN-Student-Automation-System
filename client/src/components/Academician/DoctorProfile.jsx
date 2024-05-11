/* eslint-disable no-unused-vars */
import SectionTitle from "../repeated/SectionTitle";
import Graduate from "../../../public/Graduate";
import TimeLine from "../repeated/TimeLine";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../utils/Request";

const DoctorProfile = () => {
  const admin = sessionStorage.getItem("admin");
  const { token } = useAuth();
  const [academician, setAcademician] = useState(null);
  const [courses, setCourses] = useState(null);

  const [day, setDay] = useState("Mon");

  const colors = ["FDFFE0", "E0EBFF", "FFE6E6", "E6FFEF"];
  const colors2 = ["F4FBA3", "87A4DA", "E88287", "9DF6BB"];

  useEffect(() => {
    const fetchAcademician = async () => {
      const response = await api.get("/auth/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAcademician(response.data);
    };

    const fetchCourses = async () => {
      const courses = await api.get(`/course/list/mine?day=${day}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses(courses.data);
    };

    fetchCourses();
    fetchAcademician();
  }, [token, day]);

  return (
    <div className="profile min-h-screen relative pt-[125px] overflow-hidden">
      <span className="absolute w-full h-[200px] top-0 left-0 bg-gradient-to-b from-gradient1 to-gradient2 z-0"></span>
      <div className="container">
        <div className="profile-info flex justify-star items-center gap-[10px] mb-[30px]">
          <img
            src={
              academician?.user?.sex == "male"
                ? "./profile2.png"
                : "./profile.png"
            }
            alt="profile"
            className="w-[150px] h-[150px]"
          />
          <div className="profile-name">
            <p className="font-normal capitalize font-Montagu text-[20px] text-primary">
              {academician
                ? academician.user.firstName + " " + academician.user.lastName
                : admin}
            </p>
            <span className="profile-number font-mukta font-normal text-[20px] text-secondary">
              {academician?.user?.registerNo}
            </span>
          </div>
        </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="graduation mb-[10px] w-full flex justify-start items-center gap-[10px] rounded-[4px] bg-primary px-[8px] py-1"
        >
          <div className="flex items-center justify-center w-[20px] sm:w-[35px] h-[20px] sm:h-[35px]">
            <Graduate wth="100%" hth="100%" fill="white" />
          </div>
          <p className="font-normal font-Montagu text-[12px] sm:text-[18px] text-white flex-1 text-left sm:text-center">
            {academician?.data?.departmentId.name} - Faculty of Engineering
          </p>
        </motion.div>

        <SectionTitle content="Full Schedule" extras="mb-5" />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="time-table flex items-start justify-center flex-col py-[32px] px-[18px] bg-[#F5F5F573] rounded-[4px] shadow-3xl mb-[50px]"
        >
          <div className="days w-full flex justify-between sm:justify-evenly items-center mb-[30px]">
            <motion.div
              variants={fadeIn("up", "tween", 0.35, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                <button onClick={() => setDay("Mon")}>Mon</button>
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                <button onClick={() => setDay("Tue")}>Tue</button>
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.45, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                <button onClick={() => setDay("Wed")}>Wed</button>
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                <button onClick={() => setDay("Thu")}>Thu</button>
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.55, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                <button onClick={() => setDay("Fri")}>Fri</button>
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.6, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                <button onClick={() => setDay("Sat")}>Sat</button>
              </span>
            </motion.div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start w-full gap-1 sm:gap-[35px]">
            <div className="w-full flex flex-wrap items-center justify-start gap-[15px]">
              {courses ? (
                courses.map((course, index) => {
                  return (
                    <div key={index}>
                      <TimeLine
                        time={course.time}
                        module={course.courseName}
                        color1={`bg-[#${colors[index % 4]}]`}
                        color2={`bg-[#${colors2[index % 4]}]`}
                        delay="0.5"
                      />
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorProfile;
