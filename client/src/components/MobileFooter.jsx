import Bell from '../../public/Bell';
import House from '../../public/House';
import Envlope from '../../public/Envlope';

const MobileFooter = () => {
  return (
    <div className="mobile-footer fixed bottom-0 left-0 bg-primary w-full py-4 px-[50px] max-h-[67px] flex sm:hidden justify-between items-center flex-row gap-6 z-50">
      <a
        href=""
        className="cursor-pointer flex justify-center items-center flex-col gap-2 "
      >
        <div className="w-[20px] h-[22px]">
          <Bell></Bell>
        </div>
        <p className=" font-mukta font-normal text-[10px] text-white leading-none ">
          Notifications
        </p>
      </a>
      <a
        href="/"
        className="cursor-pointer flex justify-center items-center flex-col gap-2 "
      >
        <div className="w-[20px] h-[22px]">
          <House></House>
        </div>
        <p className=" font-mukta font-normal text-[10px] text-white leading-none ">
          Home
        </p>
      </a>
      <a
        href=""
        className="cursor-pointer flex justify-center items-center flex-col gap-2 "
      >
        <div className="w-[20px] h-[22px]">
          <Envlope></Envlope>
        </div>
        <p className=" font-mukta font-normal text-[10px] text-white leading-none ">
          Messages
        </p>
      </a>
    </div>
  );
};

export default MobileFooter;
