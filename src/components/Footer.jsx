
const Footer = () => {
  return (
    <div className="mt-24 flex flex-col px-8 md:px-12 lg:px-24 gap-3 pb-8">
      <span className="text-[#374151] font-Satoshi tracking-wider font-bold text-2xl">
        &lt;Chill Devs/&gt;
      </span>
      <span className="text-[#9CA3AF] font-Satoshi text-lg font-medium leading-normal tracking-tight">
        Develop amazing digital experiences that <br /> create more happy in the
        world.
      </span>
      <div className="flex sm:items-center justify-between mt-5 flex-col-reverse sm:flex-row gap-8 sm:gap-0">
        <span className="text-[#98A2B3] font-sans text-base font-normal leading-6">
          © 2077 Untitled UI. All rights reserved.
        </span>
        <div className="flex gap-6">
          <img
            src="./twitter.svg"
            alt="twitter"
            className="w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-100"
          />
          <img
            src="./linkedin.svg"
            alt="linkedin"
            className="w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-100"
          />
          <img
            src="./facebook.svg"
            alt="facebook"
            className="w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-100"
          />
          <img
            src="./github.svg"
            alt="github"
            className="w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-100"
          />
          <img
            src="./reddit.svg"
            alt="reddit"
            className="w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-100"
          />
          <img
            src="./dribble.svg"
            alt="dribble"
            className="w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer