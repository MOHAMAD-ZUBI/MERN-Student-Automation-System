import SectionTitle from '../repeated/SectionTitle';
import TimeLine from '../repeated/TimeLine';
import { motion } from 'framer-motion';
import { fadeIn } from '../../motion/motion';

const Shedule = () => {
  return (
    <div className="schedule">
      <SectionTitle content="Today’s Schedule" extras="mb-5" />
      <motion.div
        variants={fadeIn('right', 'tween', 0.3, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="p-[15px] bg-[#F5F5F5A1] rounded flex justify-start items-start sm:items-center shadow-3xl mb-[45px] gap-[10px]"
      >
        <div className=" w-[25%] flex justify-center items-center gap-5 flex-col basis-2/5 sm:basis-auto">
          <motion.div
            variants={fadeIn('up', 'tween', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="day min-w-[100px] w-full border border-white pt-[10px] sm:pt-[15px] pb-[20px] sm:pb-[30px] px-[10px] lg:px-[50px] bg-white rounded shadow-3xl"
          >
            <h4 className=" font-Montagu font-normal text-[13px] sm:text-[25px] leading-none text-center text-[#595959] mb-2 sm:mb-5">
              March
            </h4>
            <span className="block font-josefin font-normal text-[30px] sm:text-[35px] text-secondary text-center leading-none w-full mb-2 sm:mb-5">
              25
            </span>
            <h4 className="font-Montagu font-normal text-[13px] sm:text-[25px] leading-none text-center text-[#595959] ">
              Monday
            </h4>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lessons w-full border border-white pt-[15px] pb-[30px] px-[15px] bg-white rounded shadow-3xl"
          >
            <h4 className=" font-Montagu font-normal text-[13px] sm:text-[25px] leading-none text-center text-primary">
              Lessons
            </h4>
            <span className="block font-normal text-[8px] sm:text-[22px] text-secondary text-center leading-none w-full py-2 sm:py-5 border-b border-[#F5F5F5]">
              MAT209 Mathematics
            </span>
            <span className="block font-normal text-[8px] sm:text-[22px] text-secondary text-center leading-none w-full py-2 sm:py-5 border-b border-[#F5F5F5]">
              PHY209 Physics
            </span>
            <span className="block font-normal text-[8px] sm:text-[22px] text-secondary text-center leading-none w-full pt-2 sm:pt-5">
              PRG209 Programming
            </span>
          </motion.div>
        </div>
        <div className="timlines w-[75%] flex flex-col items-center justify-start gap-[15px] sm:gap-[30px] basis-3/5 sm:basis-auto">
          <motion.h3
            variants={fadeIn('left', 'tween', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-Montagu font-normal text-[10px] sm:text-[35px] text-[#595959] leading-none text-left w-full"
          >
            Time Line
          </motion.h3>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-1 sm:gap-[35px]">
            <div className="flex flex-col items-center justify-center gap-1 sm:gap-4 sm:basis-1/2 w-full">
              <TimeLine
                time="10:00"
                module="MAT209 Mathematics"
                color1="bg-[#FFE6E6]"
                color2="bg-[#E88287]"
                delay="0.5"
              />
              <TimeLine
                time="11:00"
                module="MAT209 Mathematics"
                color1="bg-[#E6FFEF]"
                color2="bg-[#9DF6BB]"
                delay="0.55"
              />
              <TimeLine
                time="12:00"
                module="MAT209 Mathematics"
                color1="bg-[#E0EBFF]"
                color2="bg-[#87A4DA]"
                delay="0.6"
              />
              <TimeLine
                time="13:00"
                module="MAT209 Mathematics"
                color1="bg-[#FDFFE0]"
                color2="bg-[#F4FBA3]"
                delay="0.65"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1 sm:gap-4 sm:basis-1/2 w-full">
              <TimeLine
                time="09:00"
                module="MAT209 Mathematics"
                color1="bg-[#E6FFEF]"
                color2="bg-[#9DF6BB]"
                delay="0.5"
              />
              <TimeLine
                time="08:00"
                module="MAT209 Mathematics"
                color1="bg-[#FDFFE0]"
                color2="bg-[#F4FBA3]"
                delay="0.55"
              />
              <TimeLine
                time="10:00"
                module="MAT209 Mathematics"
                color1="bg-[#E0EBFF]"
                color2="bg-[#87A4DA]"
                delay="0.6"
              />
              <TimeLine
                time="14:00"
                module="MAT209 Mathematics"
                color1="bg-[#FFE6E6]"
                color2="bg-[#E88287]"
                delay="0.65"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Shedule;
