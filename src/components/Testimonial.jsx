
const Testimonial = () => {
  return (
    <div className="pt-44 sm:pt-56 px-6 sm:px-12 md:px-20 lg:px-36 flex flex-col items-center gap-10">
      <img src="./companyLogo.svg" alt="companyLogo" />
      <span className="text-[#1F2937] text-center font-Satoshi text-2xl sm:text-3xl md:text-4xl font-bold leading-9 sm:leading-[50px] tracking-tight">
        We’ve been with unicraft to kick start every new project and can’t
        imagine working without it.
      </span>
      <div className="flex flex-col items-center gap-4">
        <img src="./Avatar.svg" alt="avatar" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#101828] text-center font-Satoshi text-lg font-medium leading-7 tracking-tight">
            Candice Wu
          </span>
          <span className="text-[#667085] text-center font-Satoshi text-base font-normal leading-6 tracking-tight">
            Product Manager, Sisyphus
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial