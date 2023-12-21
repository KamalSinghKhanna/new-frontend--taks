
import LogoList from "./LogoList"

const Banner = () => {
  const logos = [
    { src: "/img1.svg", alt: "logo" },
    { src: "/img2.svg", alt: "logo" },
    { src: "/img3.svg", alt: "logo" },
    { src: "/img4.svg", alt: "logo" },
    { src: "/img5.svg", alt: "logo" },
    { src: "/img6.svg", alt: "logo" },
    
  ];

  return (
    <div className="flex flex-col lg:px-32 pt-20 sm:pt-24">
      <div className="flex flex-col gap-8 items-center">
        <div className="">
          <div className="px-4 lg:px-16 text-[#1F2937] text-center font-Satoshi text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide">
            Elevate Your Presence with
          </div>
          <div className="px-4 text-[#1F2937] text-center font-Satoshi text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide">
            Seamless Design and Innovation.
          </div>
        </div>
        <p className="text-[#4B5563] text-center font-Satoshi text-base sm:text-xl font-medium leading-normal px-8 sm:px-0">
          From strategic planning to digital presence, we&apos;re your dedicated
          partner in achieving solo success.
        </p>
        <button className="flex items-center justify-center w-52 h-14 bg-[#1F2937] rounded-lg shadow-lg font-Satoshi text-base sm:text-xl font-bold tracking-wide text-[#F9FAFB] hover:bg-[#F9FAFB] hover:border border-[#4B5563]  hover:text-[#4B5563] transition-colors ease-in-out duration-300">
          View Pricing
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-24 gap-6">
        <span className="text-[#9CA3AF] text-center font-Satoshi text-sm sm:text-base font-medium leading-normal tracking-tight">
          Trusted By 250+ Companies
        </span>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group cursor-pointer">
          <LogoList logos={logos} />
          <LogoList logos={logos} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default Banner