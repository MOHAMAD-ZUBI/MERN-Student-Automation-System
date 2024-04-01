import Search from '../../public/Search';

const HeaderMessages = () => {
  return (
    <div className="header-messages absolute top-[100%] right-[5%] z-50 w-[460px] duration-0.3 bg-primary py-[20px] px-4 hidden flex-col items-center justify-start gap-5">
      <h3 className="font-Montagu text-[35px] text-white">Messages</h3>
      <div className="w-full flex justify-between items-center gap-4">
        <div className="basis-1/3 cursor-pointer flex items-center justify-between py-1 pl-[10px] pr-[8px] rounded bg-white">
          <p className=" font-Montagu text-[20px] text-primary">Newest</p>
        </div>
        <div className="messages-search basis-2/3 h-[38px] relative cursor-pointer">
          <input
            type="text"
            name="messages-search"
            id="messages-search"
            placeholder="search"
            className="absolute h-full w-full top-0 left-0 rounded bg-white pl-[15px] pr-[35px] outline-none border-none text-[20px] text-primary"
          />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 w-[30px] h-[25px]">
            <Search wth="100%" hth="100%" fill="#595959" />
          </div>
        </div>
      </div>
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
          <p className="basis-1/5 font-Montagu text-white text-[14px] text-left">
            12.01.2023
          </p>
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
          <p className="basis-1/5 font-Montagu text-white text-[14px] text-left">
            12.01.2023
          </p>
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
          <p className="basis-1/5 font-Montagu text-white text-[14px] text-left">
            12.01.2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMessages;
