import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";

const CurrentCourse = ({ color, code, teacher, module, delay }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", delay, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`flex flex-col  h-[180px] sm:h-[240px] p-[15px] sm:p-[20px] rounded items-start justify-end gap-1 sm:gap-[8px] bg-gradient-to-b ${color} shadow-3xl cursor-pointer`}
    >
      <p className=" font-mukta font-normal text-[15px] sm:text-[22px] text-[#595959] leading-5 sm:leading-9 uppercase text-left">
        {code}
        <br />
        <span className="text-[#1F3D75] text-wrap">{module}</span>
      </p>
      <p className=" text-[#C8272E] text-[10px] text-wrap sm:text-[18px] font-mukta font-normal leading-none text-left">
        {teacher}
      </p>
    </motion.div>
  );
};

CurrentCourse.propTypes = {
  color: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  module: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
};

export default CurrentCourse;
