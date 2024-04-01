import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeIn } from '../../motion/motion';

const SectionTitle = ({ content, extras }) => {
  return (
    <motion.h3
      variants={fadeIn('left', 'tween', 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`section-title font-Montagu font-normal text-[25px] sm:text-[38px] text-primary leading-none drop-shadow-4xl ${extras}`}
    >
      {content}
    </motion.h3>
  );
};

SectionTitle.propTypes = {
  content: PropTypes.string.isRequired,
  extras: PropTypes.string.isRequired,
};
export default SectionTitle;
