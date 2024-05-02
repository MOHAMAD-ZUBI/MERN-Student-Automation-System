/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

import SectionTitle from "../repeated/SectionTitle";
import CurrentCourse from "../repeated/CurrentCourse";
import { useEffect, useState } from "react";
import api from "../../utils/Request";
import useAuth from "../../hooks/useAuth";

const Courses = () => {
  const admin = sessionStorage.getItem("admin");
  const { token } = useAuth();
  const [currentCourses, setCurrentCourses] = useState(null);
  const [pastCourses, setPastCourses] = useState(null);

  const colors = ["FDFFE0", "E0EBFF", "FFE6E6", "E6FFEF"];

  useEffect(() => {
    const fetchCurrentCourses = async () => {
      const currentCourses = await api.get("/course/list/mine?filter=current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCurrentCourses(currentCourses.data);
    };
    const fetchPastCourses = async () => {
      const pastCourses = await api.get("/course/list/mine?filter=past", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPastCourses(pastCourses.data);
    };

    fetchCurrentCourses();
    fetchPastCourses();
  }, [token]);

  return (
    <div className="requests pt-[30px] min-h-screen overflow-hidden">
      <div className="container overflow-hidden scale-95">
        <SectionTitle content="Courses" extras="mb-[45px]" />
        <div className=" mb-[50px]">
          <div className="current-courses-title w-full py-2 px-4 rounded flex items-center justify-start bg-[#d2d2d229] mb-[45px]">
            <h3 className="text-[20px] text-secondary font-Montagu text-left">
              Current Courses
            </h3>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1220: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper h-[200px] sm:h-[250px] overflow-visible"
          >
            {currentCourses ? (
              currentCourses.map((course, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to="/course">
                      <CurrentCourse
                        color={`from-[#${colors[index % 4]}] to-white`}
                        code={course.courseCode}
                        module={course.courseName}
                        teacher={
                          course.lecturer[0].firstName +
                          " " +
                          course.lecturer[0].lastName
                        }
                        delay="0"
                      />
                    </Link>
                  </SwiperSlide>
                );
              })
            ) : (
              <></>
            )}
          </Swiper>
        </div>
        <div className=" mb-[50px]">
          <div className="current-courses-title w-full py-2 px-4 rounded flex items-center justify-start bg-[#d2d2d229] mb-[45px]">
            <h3 className="text-[20px] text-secondary font-Montagu text-left">
              Past Courses
            </h3>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1220: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper h-[200px] sm:h-[250px] overflow-visible"
          >
            {pastCourses ? (
              pastCourses.map((course, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to="/course">
                      <CurrentCourse
                        color={`from-[#${colors[index % 4]}] to-white`}
                        code={course.courseCode}
                        module={course.courseName}
                        teacher={
                          course.lecturer[0].firstName +
                          " " +
                          course.lecturer[0].lastName
                        }
                        delay="0"
                      />
                    </Link>
                  </SwiperSlide>
                );
              })
            ) : (
              <></>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Courses;
