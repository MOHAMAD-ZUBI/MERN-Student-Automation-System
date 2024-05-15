/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import SectionTitle from "../../repeated/SectionTitle";
import ArrowDown from "../../../../public/ArrowDown";
import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import { useEffect, useState } from "react";
import api from "../../../utils/Request";
import useAuth from "../../../hooks/useAuth";
import NewRequestModal from "./NewRequestModal";
import PastRequestModal from "./PastRequestModal";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
const DoctorRequests = () => {
  const admin = sessionStorage.getItem("admin");
  const { token } = useAuth();

  const [currentPastRequestId, setCurrentPastRequestId] = useState(null);

  // current
  const [currentRequests, setCurrentRequests] = useState(null);
  const [isNewRequestModalOpen, setIsNewRequestModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTotalPage, setTotalCurrentPage] = useState(1);
  const [currentTypeFilter, setCurrentTypeFilter] = useState("");

  // past
  const [pastRequests, setPastRequests] = useState(null);
  const [isPastRequestModalOpen, setIsPastRequestModalOpen] = useState(false);
  const [pastPage, setPastPage] = useState(1);
  const [pastTotalPage, setTotalPastPage] = useState(1);
  const [pastTypeFilter, setPastTypeFilter] = useState("");

  const filterItems = [
    {
      key: "",
      label: "All",
    },
    {
      key: "internship",
      label: "Internship",
    },
    {
      key: "gradeObjection",
      label: "Grade Objection",
    },
    {
      key: "recommendationLetter",
      label: "Recommendation Letter",
    },
  ];

  const handleCurrentType = (key) => {
    setCurrentTypeFilter(key);
  };
  const handlePastType = (key) => {
    setPastTypeFilter(key);
  };
  const openNewRequestModal = (id) => {
    setIsNewRequestModalOpen(true);
    setCurrentPastRequestId(id);
  };

  const closeNewRequestModal = () => {
    setIsNewRequestModalOpen(false);
  };

  const openPastRequestModal = (id) => {
    setIsPastRequestModalOpen(true);
    setCurrentPastRequestId(id);
  };

  const closePastRequestModal = () => {
    setIsPastRequestModalOpen(false);
  };

  const handleCurrentPageIncrease = (index) => {
    setCurrentPage(index);
    console.log(index);
  };
  const handlePastPageIncrease = (index) => {
    setPastPage(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newRes, pastRes] = await Promise.all([
          api.get(
            `/request/lecturer?status=unreplied&page=${currentPage}&type=${currentTypeFilter}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          ),
          api.get(
            `/request/lecturer?status=replied&page=${pastPage}&type=${pastTypeFilter}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          ),
        ]);
        setCurrentRequests(newRes.data.studentRequests);
        setPastRequests(pastRes.data.studentRequests);
        setTotalCurrentPage(newRes.data.totalPages);
        setTotalPastPage(pastRes.data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token, currentPage, pastPage, currentTypeFilter, pastTypeFilter]);

  return (
    <div className="requests pt-[30px] min-h-screen overflow-hidden">
      <div className="container">
        <SectionTitle content="Requests" extras="mb-[45px]" />
        {/* Modal */}
        <div className="w-full">
          <div className="mx-auto text-center flex bg-black flex-col justify-center"></div>
        </div>

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
              <div className=" absolute top-2 right-3 cursor-pointer flex items-center justify-between gap-1 py-1 pl-[14px] pr-[10px] ">
                <Dropdown>
                  <DropdownTrigger>
                    <Button>
                      Type <ArrowDown wth="10" hth="6" fill="#C8272E" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Dynamic Actions"
                    items={filterItems}
                  >
                    {(item) => (
                      <DropdownItem
                        onClick={() => handleCurrentType(item.key)}
                        key={item.key}
                        color={item.key === "delete" ? "danger" : "default"}
                        className={item.key === "delete" ? "text-danger" : ""}
                      >
                        {item.label}
                      </DropdownItem>
                    )}
                  </DropdownMenu>
                </Dropdown>
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
                      Sender
                    </h3>
                  </div>
                  <div className="py-3 px-1 flex flex-col justify-start items-center gap-1">
                    {currentRequests?.map((request) => (
                      <div
                        key={request._id}
                        className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center"
                      >
                        <p className="text-white text-center capitalize text-[8px] mxl:text-[18px] font-Montagu">
                          {request.sender.firstName} {request.sender.lastName}
                        </p>
                      </div>
                    ))}
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
                    {currentRequests?.map((request) => (
                      <div
                        key={request._id}
                        className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center"
                      >
                        <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                          {request.type}
                        </p>
                      </div>
                    ))}
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
                    {currentRequests?.map((request) => (
                      <div
                        key={request._id}
                        className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center"
                      >
                        <button
                          onClick={() => openNewRequestModal(request._id)}
                          className="text-lg font-bold text-white"
                        >
                          Show Details
                        </button>
                        {isNewRequestModalOpen &&
                          request._id === currentPastRequestId && (
                            <NewRequestModal
                              newRequest={request}
                              isOpen={isNewRequestModalOpen}
                              onClose={closeNewRequestModal}
                            />
                          )}
                        {!isNewRequestModalOpen ||
                          request._id !== currentPastRequestId}
                      </div>
                    ))}
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
                {Array.from({ length: currentTotalPage }).map((_, index) => (
                  <span
                    key={index}
                    className="rounded border border-[#93939370] py-1 px-2 cursor-pointer"
                    onClick={() => {
                      handleCurrentPageIncrease(index + 1);
                    }}
                  >
                    <p className="font-mukta text-[10px] mxl:text-[16px] text-center text-[#939393] font-bold">
                      {index + 1}
                    </p>
                  </span>
                ))}
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
              <div className="filter absolute top-2 right-3 cursor-pointer flex items-center justify-between gap-1 py-1 pl-[14px] pr-[10px]">
                <Dropdown>
                  <DropdownTrigger>
                    <Button>
                      Type <ArrowDown wth="10" hth="6" fill="#C8272E" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Dynamic Actions"
                    items={filterItems}
                  >
                    {(item) => (
                      <DropdownItem
                        onClick={() => handlePastType(item.key)}
                        key={item.key}
                        color={item.key === "delete" ? "danger" : "default"}
                        className={item.key === "delete" ? "text-danger" : ""}
                      >
                        {item.label}
                      </DropdownItem>
                    )}
                  </DropdownMenu>
                </Dropdown>
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
                      Sender
                    </h3>
                  </div>
                  <div className="py-3 px-1 flex flex-col justify-start items-center gap-1">
                    {pastRequests?.map((request) => (
                      <div
                        key={request._id}
                        className="w-full rounded bg-[#E88287] py-1 flex items-center justify-center px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center"
                      >
                        <p className="text-white text-center capitalize text-[8px] mxl:text-[18px] font-Montagu">
                          {request.sender.firstName} {request.sender.lastName}
                        </p>
                      </div>
                    ))}
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
                    {pastRequests?.map((request) => (
                      <div
                        key={request._id}
                        className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center"
                      >
                        <p className="text-primary text-center text-[8px] mxl:text-[18px] font-Montagu">
                          {request.type}
                        </p>
                      </div>
                    ))}
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
                    {pastRequests?.map((request) => (
                      <div
                        key={request._id}
                        className="w-full rounded bg-[#9DF6BB] py-2 px-2 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center"
                      >
                        <p className="text-primary text-center capitalize text-[8px] mxl:text-[18px] font-Montagu">
                          {request.status}
                        </p>
                      </div>
                    ))}
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
                    {pastRequests?.map((request) => (
                      <div
                        key={request._id}
                        className="w-full rounded bg-[#87A4DA] py-2 px-3 h-[30px] mxl:h-[50px] mxl:flex mxl:items-center mxl:justify-center"
                      >
                        <button
                          onClick={() => openPastRequestModal(request._id)}
                          className="text-lg font-bold text-white"
                        >
                          Show Details
                        </button>
                        {isPastRequestModalOpen &&
                          request._id === currentPastRequestId && (
                            <PastRequestModal
                              newRequest={request}
                              isOpen={isPastRequestModalOpen}
                              onClose={closePastRequestModal}
                            />
                          )}
                        {!isPastRequestModalOpen ||
                          request._id !== currentPastRequestId}
                      </div>
                    ))}
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
                {Array.from({ length: pastTotalPage }).map((_, index) => (
                  <span
                    key={index}
                    className="rounded border border-[#93939370] py-1 px-2 cursor-pointer"
                    onClick={() => {
                      handlePastPageIncrease(index + 1);
                    }}
                  >
                    <p className="font-mukta text-[10px] mxl:text-[16px] text-center text-[#939393] font-bold">
                      {index + 1}
                    </p>
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DoctorRequests;
