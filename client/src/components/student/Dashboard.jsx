/* eslint-disable no-unused-vars */
// import React from "react";
import CurrentCourses from "../dashboard/CurrentCourses";
import Shedule from "../dashboard/Shedule";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import api from "../../utils/Request";
// Import the useAuth hook

const Dashboard = () => {
  const admin = sessionStorage.getItem("admin");
  const { token } = useAuth();
  const [response, setResponse] = useState(null);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/auth/current", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResponse(response.data); // Assuming the data you want is in the response's 'data' field
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCourses = async () => {
      const courses = await api.get(`/course/list/mine?filter=current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses(courses.data);
    };

    fetchCourses();

    fetchData();
  }, [token]);

  // console.log(response);
  console.log(courses);

  return (
    <div className="dashboard relative scale-95">
      <motion.h2
        variants={fadeIn("up", "tween", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-primary font-Montagu text-[20px] sm:text-[40px] font-normal text-center my-[24px] leading-none drop-shadow-4xl"
      >
        Welcome{" "}
        <span className="text-secondary">
          {response ? response.user.firstName : admin}
        </span>
        !
      </motion.h2>

      <div className="container">
        <Shedule courses={courses} />{" "}
        {/* Pass token as prop to Shedule component */}
        <CurrentCourses courses={courses} />{" "}
        {/* Pass token as prop to CurrentCourses component */}
      </div>
    </div>
  );
};

export default Dashboard;
