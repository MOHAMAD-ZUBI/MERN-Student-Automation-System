/* eslint-disable no-unused-vars */
import Search from "../../public/Search";

const HeaderMessages = () => {
  return (
    <div className="ai-bot absolute bottom-[120%] right-[50%] z-50 w-[460px] duration-0.3 bg-primary py-[20px] px-4 hidden flex-col items-center justify-start ">
      <h3 className="font-Montagu text-[35px] text-white">AI Bot</h3>
      <p className="font-Montagu  text-white">Chose a topic</p>

      <div className="messages-box w-full border-t border-white flex flex-col items-center justify-start gap-3 py-3">
        <div className="w-full flex justify-between items-center gap-2 rounded py-1 px-2 hover:bg-secondary cursor-pointer duration-0.3">
          <img
            src="./profile.png"
            alt="profile"
            className="w-[85px] basis-1/5"
          />
          <div className="flex flex-col items-start justify-between gap-1 basis-3/5">
            <p className="font-Montagu text-white text-[20px] text-left">
              Nesreen Bouta
            </p>
            <p className="font-Montagu text-white text-[14px] text-left">
              Lorem ipsum dolor sit
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-2 rounded py-1 px-2 hover:bg-secondary cursor-pointer duration-0.3">
          <img
            src="./profile.png"
            alt="profile"
            className="w-[85px] basis-1/5"
          />
          <div className="flex flex-col items-start justify-between gap-1 basis-3/5">
            <p className="font-Montagu text-white text-[20px] text-left">
              Nesreen Bouta
            </p>
            <p className="font-Montagu text-white text-[14px] text-left">
              Lorem ipsum dolor sit
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-2 rounded py-1 px-2 hover:bg-secondary cursor-pointer duration-0.3">
          <img
            src="./profile.png"
            alt="profile"
            className="w-[85px] basis-1/5"
          />
          <div className="flex flex-col items-start justify-between gap-1 basis-3/5">
            <p className="font-Montagu text-white text-[20px] text-left">
              Nesreen Bouta
            </p>
            <p className="font-Montagu text-white text-[14px] text-left">
              Lorem ipsum dolor sit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMessages;
