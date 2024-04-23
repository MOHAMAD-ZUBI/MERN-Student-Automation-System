import ArrowDown from "../../public/ArrowDown";
import Search from "../../public/Search";

const HeaderNotifications = () => {
  const toggleFilter = () => {
    const filters = document.querySelector(".filters");
    if (filters.classList.contains("block")) {
      filters.classList.remove("block");
      filters.classList.add("hidden");
    } else if (filters.classList.contains("hidden")) {
      filters.classList.remove("hidden");
      filters.classList.add("block");
    }
  };
  return (
    <div className="header-notifications hidden absolute top-[66%] right-[10%] z-50 w-[460px] duration-0.3 bg-primary py-[20px] px-4 flex-col items-center justify-start gap-5 scale-90">
      <h3 className="font-Montagu text-[35px] text-white text-center">
        Notifications
      </h3>
      <div className="w-full flex justify-between items-center gap-4">
        <div className="basis-1/3 cursor-pointer flex items-center justify-center py-1 pl-[10px] pr-[8px] rounded bg-white">
          <p className=" font-Montagu text-[20px] text-primary">Recent</p>
        </div>
        <div className="basis-1/3 cursor-pointer flex items-center justify-center py-1 pl-[10px] pr-[8px] rounded bg-white">
          <p className=" font-Montagu text-[20px] text-primary">Old</p>
        </div>
        <div className="basis-1/3 cursor-pointer flex items-center justify-center py-1 pl-[10px] pr-[8px] rounded bg-white">
          <p className=" font-Montagu text-[20px] text-primary">Show all</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-4">
        <div className="notif-search basis-2/3 h-[38px] relative cursor-pointer">
          <input
            type="text"
            name="notif-search"
            id="notif-search"
            placeholder="search"
            className="absolute h-full w-full top-0 left-0 rounded bg-white pl-[15px] pr-[35px] outline-none border-none text-[20px] text-primary"
          />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 w-[30px] h-[25px]">
            <Search wth="100%" hth="100%" fill="#595959" />
          </div>
        </div>
        <div className="basis-1/3 relative">
          <div
            onClick={toggleFilter}
            className="cursor-pointer flex items-center justify-center gap-2 py-1 pl-[10px] pr-[8px] rounded bg-white"
          >
            <p className=" font-Montagu text-[20px] text-primary">Filter</p>
            <ArrowDown wth="17" hth="22" fill="#1F3D75" />
          </div>
          <div className="absolute filters hidden top-full -right-2 bg-primary w-[200px] h-fit py-4 px-2">
            <div className="time-filter">
              <p className="font-Montagu text-white text-[15px] mb-2">Filter</p>
              <div className="flex flex-col items-start justify-start gap-2 pl-2 mb-2">
                <div className="w-full flex items-center justify-start gap-1">
                  <input
                    type="checkbox"
                    name="today"
                    id=""
                    className="w-[12px] h-[12px] cursor-pointer"
                  />
                  <label
                    htmlFor="today"
                    className="font-Montagu text-white text-[10px]"
                  >
                    Today
                  </label>
                </div>
                <div className="w-full flex items-center justify-start gap-1">
                  <input
                    type="checkbox"
                    name="Yesterday"
                    id=""
                    className="w-[12px] h-[12px] cursor-pointer"
                  />
                  <label
                    htmlFor="Yesterday"
                    className="font-Montagu text-white text-[10px]"
                  >
                    Yesterday
                  </label>
                </div>
                <div className="w-full flex items-center justify-start gap-1">
                  <input
                    type="checkbox"
                    name="week"
                    id=""
                    className="w-[12px] h-[12px] cursor-pointer"
                  />
                  <label
                    htmlFor="week"
                    className="font-Montagu text-white text-[10px]"
                  >
                    Past 7 Days
                  </label>
                </div>
                <div className="w-full flex items-center justify-start gap-1">
                  <input
                    type="checkbox"
                    name="month"
                    id=""
                    className="w-[12px] h-[12px] cursor-pointer"
                  />
                  <label
                    htmlFor="month"
                    className="font-Montagu text-white text-[10px]"
                  >
                    This Month
                  </label>
                </div>
                <div className="w-full flex items-center justify-start gap-1">
                  <input
                    type="checkbox"
                    name="four-mounths"
                    id=""
                    className="w-[12px] h-[12px] cursor-pointer"
                  />
                  <label
                    htmlFor="four-mounths"
                    className="font-Montagu text-white text-[10px]"
                  >
                    Past 4 months
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  value="unselect"
                  className="py-1 px-2 bg-white rounded text-primary hover:text-secondary duration-0.3 font-Montagu text-[12px]"
                >
                  unselect
                </button>
                <button
                  type="button"
                  value="select-all"
                  className="py-1 px-2 bg-white rounded text-primary hover:text-secondary duration-0.3 font-Montagu text-[12px]"
                >
                  Select all
                </button>
              </div>
            </div>
            <div className="from-filter mt-2">
              <p className="font-Montagu text-white text-[15px] mb-2">From</p>
              <div className="flex flex-col items-start justify-start gap-2 pl-2 mb-2">
                <div className="w-full flex items-center justify-start gap-1">
                  <input
                    type="checkbox"
                    name="Lecturers"
                    id=""
                    className="w-[12px] h-[12px] cursor-pointer"
                  />
                  <label
                    htmlFor="Lecturers"
                    className="font-Montagu text-white text-[10px]"
                  >
                    Lecturers
                  </label>
                </div>
                <div className="w-full flex items-center justify-start gap-1">
                  <input
                    type="checkbox"
                    name="Students"
                    id=""
                    className="w-[12px] h-[12px] cursor-pointer"
                  />
                  <label
                    htmlFor="Students"
                    className="font-Montagu text-white text-[10px]"
                  >
                    Students
                  </label>
                </div>
                <div className="w-full flex items-center justify-start gap-1">
                  <input
                    type="checkbox"
                    name="Administrations"
                    id=""
                    className="w-[12px] h-[12px] cursor-pointer"
                  />
                  <label
                    htmlFor="Administrations"
                    className="font-Montagu text-white text-[10px]"
                  >
                    Administrations
                  </label>
                </div>
                <div className="w-full flex items-center justify-start gap-1">
                  <input
                    type="checkbox"
                    name="Everyone"
                    id=""
                    className="w-[12px] h-[12px] cursor-pointer"
                  />
                  <label
                    htmlFor="Everyone"
                    className="font-Montagu text-white text-[10px]"
                  >
                    Everyone
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  value="reset"
                  className="py-1 px-2 bg-white rounded text-primary hover:text-secondary duration-0.3 font-Montagu text-[12px]"
                >
                  Reset all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notif-box w-full border-t border-white flex flex-col items-center justify-start gap-3 py-3">
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

export default HeaderNotifications;
