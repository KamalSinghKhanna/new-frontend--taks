
const Works = () => {
  return (
    <div className="mt-36 px-4 lg:px-32" id="work">
      <div className="flex flex-col gap-2 pb-10 sm:pb-20">
        <span className="text-[#1F2937] text-center font-Satoshi text-[40px] sm:text-5xl font-bold leading-normal tracking-tight">
          How it works
        </span>
        <span className="text-[#4B5563] text-center font-Satoshi text-base sm:text-xl font-medium leading-normal">
          Premium designs, unlimited requests, super fast delivery, for one flat
          monthly fee.
        </span>
      </div>
      <div className="flex items-center flex-col sm:flex-row">
        <div className="flex flex-col items-center ">
          <img
            src="/1.svg"
            alt="one"
            className="w-36 h-32 relative top-7 sm:top-16"
          />
          <span className="text-[#1F2937] text-center font-Satoshi text-2xl md:text-3xl lg:text-4xl relative z-10 font-extrabold leading-normal tracking-tight">
            Subscribe
          </span>
          <p className="text-[#6B7280] text-center font-Satoshi text-base lg:text-lg font-medium leading-normal tracking-tight">
            Subscribe to a plan & you’ll get an instant access to your private
            Slack channel.
          </p>
        </div>
        <div className="">
          <img src="/rightArrow.svg" alt="rightArrow" className="w-52 h-32" />
        </div>
        <div className="flex flex-col items-center ">
          <img
            src="/2.svg"
            alt="two"
            className="w-32 h-28 lg:w-36 lg:h-32 relative top-7 sm:top-16"
          />
          <span className="text-[#1F2937] text-center font-Satoshi text-2xl md:text-3xl lg:text-4xl relative z-10 font-extrabold leading-normal tracking-tight">
            Request
          </span>
          <p className="text-[#6B7280] text-center font-Satoshi text-base lg:text-lg font-medium leading-normal tracking-tight">
            Submit any number of requests. We&apos;ll work through them, one at
            a time, ensuring consistent updates every 24-48 hours
          </p>
        </div>
        <div className="">
          <img src="/rightArrow.svg" alt="rightArrow" className="w-52 h-32" />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/3.svg"
            alt="three"
            className="w-36 h-32 relative top-7 sm:top-16"
          />
          <span className="text-[#1F2937] text-center font-Satoshi text-2xl md:text-3xl lg:text-4xl relative z-10 font-extrabold leading-normal tracking-tight">
            Revise
          </span>
          <p className="text-[#6B7280] text-center font-Satoshi text-base lg:text-lg font-medium leading-normal tracking-tight">
            Need changes? We guarantee unlimited revisions until you&apos;re
            200% satisfied.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works