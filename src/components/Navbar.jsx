import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="sm:flex items-center justify-between sm:px-8 md:px-12 lg:px-24 pt-6 hidden">
        <span className="text-[#374151] font-Satoshi tracking-wider font-bold text-2xl">
          &lt; Chill Devs /&gt;
        </span>
        <div className="flex items-center sm:gap-7 lg:gap-12">
          <a
            href="#work"
            className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            Pricing
          </a>
          <a
            href="#Faq"
            className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
          >
            FAQ
          </a>
        </div>
        <a href="#contact">
          <button className="flex items-center justify-center py-2.5 px-6 md:py-3 md:px-8  border border-[#4B5563] rounded-lg shadow-lg font-Satoshi text-lg font-bold tracking-wide text-[#4B5563] hover:bg-[#4B5563] hover:text-white transition-colors ease-in-out duration-300">
            Contact us
          </button>
        </a>
      </div>
      {/* mobile version */}
      <div className="flex items-center justify-between px-8 pt-4 sm:hidden pb-5">
        <span className="text-[#374151] font-Satoshi tracking-wider font-bold text-xl">
          &lt;Chill Devs/&gt;
        </span>
        <img
          src="./menu.svg"
          alt="menubar"
          className="w-7 h-7 relative z-20 cursor-pointer transform hover:scale-110 transition-transform duration-100"
          onClick={handleToggle}
        />
        {showMenu && (
          <div className="absolute inset-0 h-screen bg-white pt-20 transition-all duration-500 z-10">
            <div className="flex flex-col items-center  gap-7">
              <a
                href="#work"
                className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                onClick={() => setShowMenu(!showMenu)}
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                onClick={() => setShowMenu(!showMenu)}
              >
                Pricing
              </a>
              <a
                href="#Faq"
                className="text-[#374151] font-Satoshi text-lg font-medium tracking-wide dropdown-item"
                onClick={() => setShowMenu(!showMenu)}
              >
                FAQ
              </a>
              <a href="#contact" onClick={() => setShowMenu(!showMenu)}>
                <button className="flex items-center justify-center py-2.5 px-6 md:py-3 md:px-8  border border-[#4B5563] rounded-lg shadow-lg font-Satoshi text-lg font-bold tracking-wide text-[#4B5563] hover:bg-[#4B5563] hover:text-white transition-colors ease-in-out duration-1000">
                  Contact us
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
