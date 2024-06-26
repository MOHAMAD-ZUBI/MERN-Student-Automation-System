/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import { Link, useLocation } from "react-router-dom";
import SectionTitle from "../../repeated/SectionTitle";
import ArrowDown from "../../../../public/ArrowDown";
import Search from "../../../../public/Search";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import api from "../../../utils/Request";
import { FaRegTrashCan } from "react-icons/fa6";
import UploadFileModal from "./UploadFileModal";

const DoctorCourse = () => {
  const location = useLocation();
  const courseId = new URLSearchParams(location.search).get("courseId");

  const { token } = useAuth();
  const [course, setCourse] = useState(null);
  const [courseNotes, setCourseNotes] = useState(null);
  const [notesPage, setNotesPage] = useState(1);
  const [notesTotalPage, setNotesTotalPage] = useState(1);
  const [reportTitle, setReportTitle] = useState("");
  const [IsUploadModalOpen, setIsUploadModalOpen] = useState(false);

  function getFileExtension(filename) {
    // Use a regular expression to match the file extension
    const match = /\.([0-9a-z]+)$/i.exec(filename);

    // If a match is found, return the extension (group 1)
    if (match) {
      return match[1];
    } else {
      // If no match is found, return an empty string or handle the error as appropriate
      return ""; // or throw an error, or handle it differently
    }
  }

  function formatDate(createdAt) {
    const date = new Date(createdAt);
    const month = date.getMonth() + 1; // Months are zero-based, so we add 1
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  const handlePageIncrease = (index) => {
    setNotesPage(index);
  };
  const handleTitleChange = (title) => {
    setReportTitle(title);
  };

  const openUploadModal = (id) => {
    setIsUploadModalOpen(true);
    // setCurrentPastRequestId(id);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  };

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await api.get(`/course/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourse(course.data);
    };

    const fetchCourseNotes = async () => {
      const courseNotes = await api.get(
        `/course/notes/${courseId}?page=${notesPage}&title=${reportTitle}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCourseNotes(courseNotes.data);
      setNotesTotalPage(courseNotes.data.totalPages);
    };

    fetchCourse();
    fetchCourseNotes();
  }, [courseId, notesPage, reportTitle, token]);

  const deleteNote = async (id) => {
    await api.delete(`/course/notes/remove/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
  };

  return (
    <div className="course  pt-[30px] min-h-screen overflow-hidden">
      <div className="container overflow-hidden">
        <SectionTitle
          content={`${course?.courseCode} ${course?.courseName}`}
          extras="mb-[45px]"
        />
        {/* <motion.p
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
        </motion.p> */}
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-start gap-0 mb-12"
        >
          <img
            src={
              course?.lecturer[0]?.sex == "male"
                ? "./profile2.png"
                : "./profile.png"
            }
            alt="profile img"
            className="w-[50px] ml:w-[100px] mr-4"
          />
          <div className="flex items-start justify-between flex-col  w-[240px] py-[5px] px-[10px] bg-primary  rounded-lg text-left">
            <p className="w-full text-left text-white text-[14px] ml:text-[22px] capitalize">
              {`Dr. ${course?.lecturer[0]?.firstName} ${course?.lecturer[0]?.lastName}`}
            </p>
            <Link
              // TODO: Add the profile link
              to={{
                pathname: "/academician",
                search: `?userId=${course?.lecturer[0]?._id}`,
              }}
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
              Notes & Related Files
            </h3>
            <div className="search basis-2/5 sm:basis-2/4 h-[23px] ml:h-[30px] mxl:h-[38px] relative cursor-pointer">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
                className="absolute h-full w-full top-0 left-0 rounded bg-[#D9D9D9] px-[5px] ml:px-[10px] mxl:px-[15px] outline-none border-none text-[10px] ml:text-[16px] mxl:text-[20px] text-white"
                onChange={(e) => handleTitleChange(e.target.value)}
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-[10px] ml:w-[20px] mxl:w-[30px] h-[12px] ml:h-[20px] mxl:h-[25px]">
                <Search wth="100%" hth="100%" fill="#595959" />
              </div>
            </div>
            <div className="basis-2/5 sm:basis-1/4 flex items-center justify-end gap-1">
              <div className="filter cursor-pointer flex items-center justify-center py-1 px-[10px] rounded bg-white">
                <p
                  className=" font-Montagu text-[10px] ml:text-[16px] mxl:text-[20px] text-secondary"
                  onClick={() => openUploadModal(course?._id)}
                >
                  Add File +
                </p>
                <UploadFileModal
                  courseId={course?._id}
                  isOpen={IsUploadModalOpen}
                  onClose={closeUploadModal}
                />
              </div>
              {/* <div className="filter cursor-pointer flex items-center justify-center py-1 px-[10px] rounded bg-white">
                <p className=" font-Montagu text-[10px] ml:text-[16px] mxl:text-[20px] text-secondary">
                  Sort By
                </p>
              </div>
              <div className="filter cursor-pointer flex items-center justify-between gap-1 py-1 pl-[10px] pr-[8px] rounded bg-white">
                <p className=" font-Montagu text-[10px] ml:text-[16px] mxl:text-[20px] text-secondary">
                  Filter
                </p>
                <ArrowDown wth="10" hth="6" fill="#C8272E" />
              </div> */}
            </div>
          </motion.div>
          <div className="flex flex-col justify-between items-center gap-10 py-5 px-3">
            <div className="w-full flex flex-col ml:flex-row flex-wrap gap-2 items-start justify-center ml:justify-start">
              {courseNotes ? (
                courseNotes?.notes?.map((note, index) => {
                  return (
                    <motion.div
                      key={index}
                      variants={fadeIn("up", "tween", 0.35, 1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="w-full py-[5px] px-[12px] ml:w-[45%] ml:min-h-[88px] flex items-center justify-between gap-5 bg-white shadow-4xl border border-white border-opacity-[0.36]"
                    >
                      <a
                        href={`http://localhost:3060/${note.file}`}
                        target="_blank"
                      >
                        <img
                          src={`./${getFileExtension(note?.file)}.png`}
                          alt="pdf"
                          className="w-[55px]"
                        />
                      </a>
                      <div className=" flex-1 flex flex-col items-center justify-center gap-2">
                        <div className="flex items-center justify-between w-full">
                          <p className="font-mukta text-primary text-[15px]">
                            {note.title}
                          </p>
                          <button
                            onClick={() => {
                              deleteNote(note._id);
                            }}
                          >
                            <span className="font-mukta text-primary text-[15px] sm:text-[20px] mxl:text-[22px] tracking-widest">
                              <FaRegTrashCan />
                            </span>
                          </button>
                        </div>
                        <div className="flex items-center justify-start w-full">
                          <p className="font-mukta text-primary text-[10px]">
                            {formatDate(note.createdAt)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
            <div className="pagination flex justify-center items-center gap-1 text-[#939393]">
              {Array.from({ length: notesTotalPage }).map((_, index) => (
                <span
                  key={index}
                  className="rounded border border-[#93939370] py-1 px-2 cursor-pointer"
                  onClick={() => {
                    handlePageIncrease(index + 1);
                  }}
                >
                  <p className="font-mukta text-[10px] mxl:text-[16px] text-center text-[#939393] font-bold">
                    {index + 1}
                  </p>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorCourse;
