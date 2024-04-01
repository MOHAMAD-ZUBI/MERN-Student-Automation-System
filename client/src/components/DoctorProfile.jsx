import SectionTitle from '../components/repeated/SectionTitle';
import Graduate from '../../public/Graduate';
import TimeLine from './repeated/TimeLine';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion/motion';

const DoctorProfile = () => {
  return (
    <div className="profile min-h-screen relative pt-[125px] overflow-hidden">
      <span className="absolute w-full h-[200px] top-0 left-0 bg-gradient-to-b from-gradient1 to-gradient2 z-0"></span>
      <div className="container">
        <div className="profile-info flex justify-star items-center gap-[10px] mb-[30px]">
          <img
            src="./profile.png"
            alt="profile"
            className="w-[150px] h-[150px]"
          />
          <div className="profile-name">
            <p className="font-normal font-Montagu text-[20px] text-primary">
              Dr. Ilhami Muharram
            </p>
            <span className="profile-number font-mukta font-normal text-[20px] text-secondary">
              19432400023
            </span>
          </div>
        </div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="graduation mb-[10px] w-full flex justify-start items-center gap-[10px] rounded-[4px] bg-primary px-[8px] py-1"
        >
          <div className="flex items-center justify-center w-[20px] sm:w-[35px] h-[20px] sm:h-[35px]">
            <Graduate wth="100%" hth="100%" fill="white" />
          </div>
          <p className="font-normal font-Montagu text-[12px] sm:text-[18px] text-white flex-1 text-left sm:text-center">
            Computer Engineering - Faculty of Engineering
          </p>
        </motion.div>
        <div className="classes hidden w-full justify-center items-center gap-[20px] mb-[50px]">
          <motion.div
            variants={fadeIn('up', 'tween', 0.4, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="class py-[5px] px-[15px] rounded-[4px] bg-secondary"
          >
            <p className="font-normal font-Montagu text-[12px] sm:text-[18px] text-white">
              Class 4
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="class py-[5px] px-[15px] rounded-[4px] bg-secondary"
          >
            <p className="font-normal font-Montagu text-[12px] sm:text-[18px] text-white">
              ANO 4,00
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.4, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="class py-[5px] px-[15px] rounded-[4px] bg-secondary"
          >
            <p className="font-normal font-Montagu text-[12px] sm:text-[18px] text-white">
              AGNO 4,00
            </p>
          </motion.div>
        </div>
        <SectionTitle content="Full Schedule" extras="mb-5" />
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="time-table flex items-start justify-center flex-col py-[32px] px-[18px] bg-[#F5F5F573] rounded-[4px] shadow-3xl mb-[50px]"
        >
          <div className="days w-full flex justify-between sm:justify-evenly items-center mb-[30px]">
            <motion.div
              variants={fadeIn('up', 'tween', 0.35, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                Mon
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                Tue
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.45, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                Wed
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                Thu
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.55, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="day flex justify-center items-center py-[8px] px-[6px] rounded-[4px] bg-white shadow-3xl min-w-[38px] sm:min-w-[50px] cursor-pointer"
            >
              <span className="font-Montagu text-[10px] sm:text-[16px] text-secondary">
                Fri
              </span>
            </motion.div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start w-full gap-1 sm:gap-[35px]">
            <div className="w-full flex flex-col items-center justify-start gap-[5px]">
              <TimeLine
                time="10:00"
                module="DAC209 Data Communication Group A"
                color1="bg-[#FFE6E6]"
                color2="bg-[#E88287]"
                delay="0.5"
              />
              <TimeLine
                time="11:00"
                module="PHY209 Physics"
                color1="bg-[#E6FFEF]"
                color2="bg-[#9DF6BB]"
                delay="0.55"
              />
              <TimeLine
                time="12:00"
                module="DAC209 Data Communication Group B"
                color1="bg-[#E0EBFF]"
                color2="bg-[#87A4DA]"
                delay="0.6"
              />
            </div>
            <div className="w-full flex flex-col items-center justify-start gap-[5px]">
              <TimeLine
                time="14:00"
                module="Senior Project Group A"
                color1="bg-[#FDFFE0]"
                color2="bg-[#F4FBA3]"
                delay="0.65"
              />
              <TimeLine
                time="08:00"
                module="Senior Project Group B"
                color1="bg-[#E0EBFF]"
                color2="bg-[#87A4DA]"
                delay="0.7"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorProfile;
