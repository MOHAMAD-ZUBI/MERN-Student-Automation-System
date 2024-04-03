import SectionTitle from '../repeated/SectionTitle';
import CurrentCourse from '../repeated/CurrentCourse';

const CurrentCourses = () => {
  return (
    <div className="Courses mb-[150px]">
      <SectionTitle content="My Current Courses" extras="mb-5" />
      <div className="current-courses flex flex-row justify-start items-center gap-[20px] max-w-full flex-wrap ">
        <CurrentCourse
          color="from-[#FFE6E6] to-white"
          code="MAT209"
          module="Mathematics"
          teacher="Dr. Alex Sam"
          delay="0.5"
        />
        <CurrentCourse
          color="from-[#E6FFEF] to-white"
          code="MAT209"
          module="Mathematics"
          teacher="Dr. Alex Sam"
          delay="0.55"
        />
        <CurrentCourse
          color="from-[#E0EBFF] to-white"
          code="MAT209"
          module="Mathematics"
          teacher="Dr. Alex Sam"
          delay="0.6"
        />
        <CurrentCourse
          color="from-[#FDFFE0] to-white"
          code="MAT209"
          module="Mathematics"
          teacher="Dr. Alex Sam"
          delay="0.65"
        />
        <CurrentCourse
          color="from-[#FFE6E6] to-white"
          code="MAT209"
          module="Mathematics"
          teacher="Dr. Alex Sam"
          delay="0.7"
        />
        <CurrentCourse
          color="from-[#E6FFEF] to-white"
          code="MAT209"
          module="Mathematics"
          teacher="Dr. Alex Sam"
          delay="0.75"
        />
      </div>
    </div>
  );
};

export default CurrentCourses;
