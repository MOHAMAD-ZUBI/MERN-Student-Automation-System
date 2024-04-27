/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SectionTitle from "../repeated/SectionTitle";
import CurrentCourse from "../repeated/CurrentCourse";

const CurrentCourses = ({ courses }) => {
  const colors = ["FDFFE0", "E0EBFF", "FFE6E6", "E6FFEF"];

  return (
    <div className="Courses mb-[150px]">
      <SectionTitle content="My Current Courses" extras="mb-5" />
      <div className="current-courses flex flex-row justify-start items-center gap-[20px] max-w-full flex-wrap ">
        {courses ? (
          courses.map((course, index) => {
            return (
              <div key={index}>
                <CurrentCourse
                  color={`from-[#${colors[index % 4]}] to-white`}
                  code={course.courseCode}
                  module={course.courseName}
                  teacher={
                    course.lecturer.position + " " + course.lecturer.name
                  }
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
  );
};

export default CurrentCourses;
