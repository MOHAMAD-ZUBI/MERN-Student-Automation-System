/* eslint-disable no-unused-vars */
// import React from "react";
import CurrentCourses from "./dashboard/CurrentCourses";
import Shedule from "./dashboard/Shedule";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
import useAuth from "../hooks/useAuth";
// Import the useAuth hook

const Dashboard = () => {
  const admin = sessionStorage.getItem("admin");
  const { token } = useAuth(); // Use the useAuth hook to access token and logout function
  // console.log("Token in the dashboard: ", token);

  return (
    <div className="dashboard relative">
      <motion.h2
        variants={fadeIn("up", "tween", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-primary font-Montagu text-[20px] sm:text-[40px] font-normal text-center my-[24px] leading-none drop-shadow-4xl"
      >
        Welcome <span className="text-secondary">{admin}</span>!
      </motion.h2>

      <div className="container">
        <Shedule /> {/* Pass token as prop to Shedule component */}
        <CurrentCourses />{" "}
        {/* Pass token as prop to CurrentCourses component */}
      </div>
    </div>
  );
};

export default Dashboard;
