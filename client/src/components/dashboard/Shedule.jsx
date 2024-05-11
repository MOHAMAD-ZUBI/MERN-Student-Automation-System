/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SectionTitle from "../repeated/SectionTitle";
import TimeLine from "../repeated/TimeLine";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import api from "../../utils/Request.js";
import useAuth from "../../hooks/useAuth.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shedule = ({ courses }) => {
  if (courses) {
    courses = courses.slice().sort((a, b) => {
      // Extracting the time strings from each object
      const timeA = a.time;
      const timeB = b.time;

      // Splitting the time strings into hours and minutes
      const [hoursA, minutesA] = timeA.split(":").map(Number);
      const [hoursB, minutesB] = timeB.split(":").map(Number);

      // Comparing hours first
      if (hoursA !== hoursB) {
        return hoursA - hoursB;
      }

      // If hours are the same, compare minutes
      return minutesA - minutesB;
    });
  }

  const [currentDate, setCurrentDate] = useState(new Date());

  // Get current day and month
  const currentDay = currentDate.toLocaleString("en-US", { weekday: "long" });
  const currentMonth = currentDate.toLocaleString("en-US", { month: "long" });
  const firstThreeLetters = currentDay.slice(0, 3);

  const colors = ["FDFFE0", "E0EBFF", "FFE6E6", "E6FFEF"];
  const colors2 = ["F4FBA3", "87A4DA", "E88287", "9DF6BB"];

  return (
    <div className="schedule">
      <SectionTitle content="Today’s Schedule" extras="mb-5" />
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="p-[15px] bg-[#F5F5F5A1] rounded flex justify-start items-start sm:items-center shadow-3xl mb-[45px] gap-[10px]"
      >
        <div className=" w-[25%] flex justify-center items-center gap-5 flex-col basis-2/5 sm:basis-auto">
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="day min-w-[100px] w-full border border-white pt-[10px] sm:pt-[15px] pb-[20px] sm:pb-[30px] px-[10px] lg:px-[50px] bg-white rounded shadow-3xl"
          >
            <h4 className="font-Montagu font-normal text-[13px] sm:text-[25px] leading-none text-center text-[#595959] mb-2 sm:mb-5">
              {currentMonth}
            </h4>
            <span className="block font-josefin font-normal text-[30px] sm:text-[35px] text-secondary text-center leading-none w-full mb-2 sm:mb-5">
              {currentDate.getDate()}
            </span>
            <h4 className="font-Montagu font-normal text-[13px] sm:text-[25px] leading-none text-center text-[#595959] ">
              {currentDay}
            </h4>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lessons w-full border border-white pt-[15px] pb-[30px] px-[15px] bg-white rounded shadow-3xl"
          >
            <h4 className="font-Montagu font-normal text-[13px] sm:text-[25px] leading-none text-center text-primary">
              Lessons
            </h4>
            {courses ? (
              courses.map((course, index) => {
                console.log(firstThreeLetters);
                if (course.day == firstThreeLetters) {
                  return (
                    <span
                      key={course._id}
                      className="block font-normal text-[8px] sm:text-[22px] text-secondary text-center leading-none w-full py-2 sm:py-5 border-b border-[#F5F5F5]"
                    >
                      {course.courseCode + " " + course.courseName}
                    </span>
                  );
                }
              })
            ) : (
              <></>
            )}
          </motion.div>
        </div>
        <div className="timlines w-[75%] flex flex-col items-center justify-start gap-[15px] sm:gap-[30px] basis-3/5 sm:basis-auto">
          <motion.h3
            variants={fadeIn("left", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-Montagu font-normal text-[10px] sm:text-[35px] text-[#595959] leading-none text-left w-full"
          >
            Time Line
          </motion.h3>
          <div className="grid grid-cols-2 items-center justify-center gap-1 sm:gap-4 sm:basis-1/2 w-full">
            {courses ? (
              courses.map((course, index) => {
                // console.log(firstThreeLetters);
                if (course.day == firstThreeLetters) {
                  return (
                    <Link
                      key={course._id}
                      to={{
                        pathname: "/course",
                        search: `?courseId=${course._id}`,
                      }}
                    >
                      <TimeLine
                        time={course.time}
                        module={course.courseCode + " " + course.courseName}
                        color1={`bg-[#${colors[index % 4]}]`}
                        color2={`bg-[#${colors2[index % 4]}]`}
                        delay="0.5"
                      />
                    </Link>
                  );
                } else {
                  index--;
                }
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Shedule;
