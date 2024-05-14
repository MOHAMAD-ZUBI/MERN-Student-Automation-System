/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import Delete from "../../../public/Delete";
import Edit from "../../../public/Edit";
import api from "../../utils/Request";
import { useState } from "react";
import EditGroupModal from "../academician/seniorGroups/EditGroupModal";

const Group = ({ group, delay, name, color1, color2 }) => {
  const [IsEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  const deleteGroup = async (id) => {
    await api.delete(`/senior/${id}`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    window.location.reload();
  };

  return (
    <motion.div
      variants={fadeIn("up", "tween", delay, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`project h-[80px] ml:h-[100px] mxl:h-[140px] flex flex-row items-center justify-center w-full ml:w-[48%] rounded gap-[10px] ml:gap-[15px] mxl:gap-[20px] shadow-3xl bg-gradient-to-b ${color1}`}
    >
      <span
        className={`block w-[50px] ml:w-[70px] mxl:w-[96px] h-full rounded ${color2}`}
      />
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col justify-center items-start basis-2/3 gap-1 mxl:gap-2">
          <span className="text-primary font-Montagu font-normal text-[16px] sm:text-[22px] mxl:text-[28px] text-left leading-none">
            {name}
          </span>
          <Link
            to={{
              pathname: "/project-group",
              search: `?group._id=${group._id}`,
            }}
            className="font-Montagu text-[12px] sm:text-[18px] mxl:text-[22px] text-primary hover:text-secondary duration-0.3"
          >
            View Details
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center basis-1/3 gap-1">
          <span
            className="flex items-center justify-between gap-1 text-[12px] sm:text-[16px] mxl:text-[18px] text-primary font-Montagu cursor-pointer hover:text-green-500 duration-100"
            onClick={() => openEditModal()}
          >
            <span className="w-[16px] h-[16px] mxl:w-[20px] mxl:h-[20px]">
              <Edit wth="100%" hth="100%" fill="#595959" />
            </span>
            Edit
          </span>
          <EditGroupModal
            onClose={closeEditModal}
            isOpen={IsEditModalOpen}
            group={group}
          />
          <span
            className="flex items-center justify-between gap-1 text-[12px] sm:text-[16px] mxl:text-[18px] text-primary font-Montagu cursor-pointer hover:text-red-500 duration-100"
            onClick={() => {
              deleteGroup(group._id);
            }}
          >
            <span className="w-[12px] h-[12px] mxl:w-[16px] mxl:h-[16px] ">
              <Delete wth="100%" hth="100%" fill="#595959" />
            </span>
            Delete
          </span>
        </div>
      </div>
    </motion.div>
  );
};

Group.propTypes = {
  delay: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};

export default Group;
