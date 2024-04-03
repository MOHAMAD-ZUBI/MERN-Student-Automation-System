import CurrentCourses from './dashboard/CurrentCourses';
import Shedule from './dashboard/Shedule';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion/motion';

const Dashboard = () => {
  const admin = sessionStorage.getItem('admin');
  return (
    <div className="dashboard relative">
      <motion.h2
        variants={fadeIn('up', 'tween', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-primary font-Montagu text-[20px] sm:text-[40px] font-normal text-center my-[24px] leading-none drop-shadow-4xl"
      >
        Welcome <span className="text-secondary">{admin}</span>!
      </motion.h2>
      <div className="container">
        <Shedule></Shedule>
        <CurrentCourses></CurrentCourses>
      </div>
    </div>
  );
};

export default Dashboard;
