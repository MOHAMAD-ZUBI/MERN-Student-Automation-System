import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';

import SectionTitle from '../components/repeated/SectionTitle';
import CurrentCourse from '../components/repeated/CurrentCourse';

const Courses = () => {
  return (
    <div className="requests pt-[30px] min-h-screen overflow-hidden">
      <div className="container overflow-hidden">
        <SectionTitle content="Courses" extras="mb-[45px]" />
        <div className=" mb-[50px]">
          <div className="current-courses-title w-full py-2 px-4 rounded flex items-center justify-start bg-[#d2d2d229] mb-[45px]">
            <h3 className="text-[20px] text-secondary font-Montagu text-left">
              Current Courses
            </h3>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1220: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper h-[200px] sm:h-[250px] overflow-visible"
          >
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#FFE6E6] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#E6FFEF] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#E0EBFF] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#FDFFE0] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#FFE6E6] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#E6FFEF] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" mb-[50px]">
          <div className="current-courses-title w-full py-2 px-4 rounded flex items-center justify-start bg-[#d2d2d229] mb-[45px]">
            <h3 className="text-[20px] text-secondary font-Montagu text-left">
              Past Courses
            </h3>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1220: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper h-[200px] sm:h-[250px] overflow-visible"
          >
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#FFE6E6] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#E6FFEF] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#E0EBFF] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#FDFFE0] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#FFE6E6] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/course">
                <CurrentCourse
                  color="from-[#E6FFEF] to-white"
                  code="MAT209"
                  module="Mathematics"
                  teacher="Dr. Alex Sam"
                  delay="0"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Courses;
