import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
import SectionTitle from "./repeated/SectionTitle";
import ArrowDown from "../../public/ArrowDown";
import Group from "./repeated/Group";

const ProjectGroups = () => {
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
              <div className="cursor-pointer flex items-center justify-between gap-1 py-1 pl-[10px] pr-[8px] rounded bg-white">
                <p className=" font-Montagu text-[10px] ml:text-[16px] mxl:text-[20px] text-secondary">
                  Add New Group
                </p>
                <span className="flex items-center text-[10px] ml:text-[14px] text-secondary font-bold leading-none">
                  +
                </span>
              </div>
              <div className="filter cursor-pointer flex items-center justify-between gap-1 py-1 pl-[10px] pr-[8px] rounded bg-white">
                <p className=" font-Montagu text-[10px] ml:text-[16px] mxl:text-[20px] text-secondary">
                  Filter
                </p>
                <ArrowDown wth="10" hth="6" fill="#C8272E" />
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col justify-start items-center gap-3 py-5 px-3">
            <div className="w-full flex flex-col ml:flex-row flex-wrap gap-3 items-start justify-center ml:justify-around">
              <Group
                delay="0.3"
                name="Group Name"
                color1="from-[#FFE6E6]"
                color2="bg-[#9DF6BBB3]"
              />
              <Group
                delay="0.35"
                name="Group Name"
                color1="from-[#E0EBFF]"
                color2="bg-[#87A4DA]"
              />
              <Group
                delay="0.4"
                name="Group Name"
                color1="from-[#E6FFEF]"
                color2="bg-[#9DF6BBB3]"
              />
              <Group
                delay="0.45"
                name="Group Name"
                color1="from-[#FDFFE0]"
                color2="bg-[#F4FBA3]"
              />
              <Group
                delay="0.5"
                name="Group Name"
                color1="from-[#E0EBFF]"
                color2="bg-[#87A4DA]"
              />
              <Group
                delay="0.55"
                name="Group Name"
                color1="from-[#FFE6E6]"
                color2="bg-[#9DF6BBB3]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectGroups;
