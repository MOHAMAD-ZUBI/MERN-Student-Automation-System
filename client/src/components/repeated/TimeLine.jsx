import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeIn } from '../../motion/motion';

const TimeLine = ({ time, module, color1, color2, delay }) => {
  return (
    <motion.div
      variants={fadeIn('left', 'tween', delay, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`timeline h-[26px] sm:h-[55px] flex flex-row items-center justify-start w-full rounded gap-[10px] ${color1}`}
    >
      <span className={`block w-[11px] sm:w-[32px] h-full rounded ${color2}`} />
      <div className="flex flex-col justify-center items-start  w-full">
        <span className="text-primary font-mukta font-normal text-[9px] sm:text-[20px] text-left leading-none">
          {time}
        </span>
        <span className="block font-normal text-[8px] sm:text-[20px] text-secondary text-left leading-none w-full ">
          {module}
        </span>
      </div>
    </motion.div>
  );
};

TimeLine.propTypes = {
  time: PropTypes.string.isRequired,
  module: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
};

export default TimeLine;
