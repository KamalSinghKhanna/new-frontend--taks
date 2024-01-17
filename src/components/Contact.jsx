

const Contact = () => {
  return (
    <div
      className="mt-48 sm:mt-60 flex flex-col items-center justify-center px-8 sm:px-0"
      id="contact"
    >
      <span className="text-[#101828] text-center font-Satoshi text-3xl sm:text-4xl md:text-5xl font-extrabold leading-normal tracking-tighter">
        Seamless Collaboration
      </span>
      <span className="sm:mt-2 text-[#101828] text-center font-Satoshi text-3xl sm:text-4xl md:text-5xl font-extrabold leading-normal tracking-tighter">
        No catches, Simple.
      </span>
      <span className="text-[#667085] text-center font-Satoshi text-base sm:text-lg font-normal sm:font-medium leading-normal mt-3">
        share your project details, timelines, expectations, and, most
        importantly, your vision with us. No unnecessary formalities required.
      </span>
      <button className="flex items-center justify-center w-52 h-14 bg-[#1F2937] rounded-lg shadow-lg font-Satoshi text-base sm:text-xl font-bold tracking-wide text-[#F9FAFB] mt-8 hover:bg-[#F9FAFB] hover:border border-[#4B5563]  hover:text-[#4B5563] transition-colors ease-in-out duration-300">
        Contact us
      </button>
    </div>
  );
}

export default Contact