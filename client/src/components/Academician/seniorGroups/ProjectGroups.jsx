/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import SectionTitle from "../../repeated/SectionTitle";
import ArrowDown from "../../../../public/ArrowDown";
import Group from "../../repeated/Group";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import api from "../../../utils/Request";
import AddGroupModal from "./AddGroupModal";

const ProjectGroups = () => {
  const admin = sessionStorage.getItem("admin");
  const { token } = useAuth();
  const [groups, setGroups] = useState(null);
  const [IsAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const colors = ["FDFFE0", "E0EBFF", "FFE6E6", "E6FFEF"];
  const colors2 = ["F4FBA3", "87A4DA", "E88287", "9DF6BB"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/senior/lecturer/list`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setGroups(response.data.seniorGroups);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="ProjectGroups  pt-[30px] min-h-screen overflow-hidden scale-95">
      <div className="container overflow-hidden">
        <SectionTitle content="Senior Project Groups" extras="mb-[45px]" />
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
            className="relative flex items-center justify-center gap-1 py-2 px-3 bg-neutral-300 bg-opacity-20 rounded border border-neutral-100 border-opacity-30 shadow-4xl"
          >
            <div className="flex items-center justify-center gap-1 ml:gap-4 mxl:gap-8">
              <div
                className="cursor-pointer flex items-center justify-between gap-1 py-1 pl-[10px] pr-[8px] rounded bg-white"
                onClick={() => openAddModal()}
              >
                <p className=" font-Montagu text-[10px] ml:text-[16px] mxl:text-[20px] text-secondary">
                  Add New Group
                </p>
                <span className="flex items-center text-[10px] ml:text-[14px] text-secondary font-bold leading-none">
                  +
                </span>

                <AddGroupModal
                  onClose={closeAddModal}
                  isOpen={IsAddModalOpen}
                />
              </div>
              {/* <div className="filter cursor-pointer flex items-center justify-between gap-1 py-1 pl-[10px] pr-[8px] rounded bg-white">
                <p className=" font-Montagu text-[10px] ml:text-[16px] mxl:text-[20px] text-secondary">
                  Filter
                </p>
                <ArrowDown wth="10" hth="6" fill="#C8272E" />
              </div> */}
            </div>
          </motion.div>
          <div className="flex flex-col justify-start items-center gap-3 py-5 px-3">
            <div className="w-full flex flex-col ml:flex-row flex-wrap gap-3 items-start justify-center ml:justify-around">
              {groups ? (
                groups.map((group, index) => {
                  return (
                    <Group
                      group={group}
                      key={index}
                      delay="0.3"
                      name={group.title}
                      color1={`bg-[#${colors[index % 4]}]`}
                      color2={`bg-[#${colors2[index % 4]}]`}
                    />
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

export default ProjectGroups;
