const Pricing = () => {
  return (
    <div
      className="mt-44 sm:mt-52 md:mt-64 lg:mt-72 px-8 md:px-24 lg:px-28 flex flex-col items-center gap-12"
      id="pricing"
    >
      <div className="flex flex-col items-center gap-3 px-0 lg:px-24">
        <span className="text-[#262E35] text-center font-Satoshi text-4xl sm:text-5xl font-bold leading-normal tracking-tighter">
          Pricing made for collaborative support.
        </span>
        <span className="text-[#6B7280]  text-center font-Satoshi text-lg font-medium leading-normal px-0 sm:px-12 md:px-20 lg:px-36">
          Plain is made for your entire company. Only pay for users that
          actually message customers. Everyone else is free, forever.
        </span>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="flex flex-col py-10 px-6 items-start gap-5  self-stretch rounded-2xl border border-[#E5E7EB] bg-white w-80">
          <div className="flex flex-col gap-2">
            <span className="text-[#191D23] font-Satoshi text-xl font-bold leading-normal tracking-tighter">
              Freebie
            </span>
            <span className="text-[#6B7280] font-Satoshi text-sm font-medium leading-normal tracking-tight">
              Ideal for individuals who need quick access to basic features.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#191D23] font-Satoshi text-6xl font-bold leading-normal tracking-tighter">
              $0
            </span>
            <span className="text-[#4B5563] font-Satoshi text-base font-normal leading-normal ">
              / Month
            </span>
          </div>
          <button className="flex py-2 px-3 mt-1 justify-center items-center gap-2 self-stretch rounded-lg border border-[#4B5563] text-[#4B5563] text-center font-Satoshi text-base font-medium leading-normal hover:bg-[#1F2937] hover:text-white transition-colors ease-in-out duration-300">
            Get Started Now
          </button>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src="./charm_circle-tick.svg" alt="charm_circle-tick" />
              <span className="text-[#1F2937] font-Satoshi text-base font-medium leading-normal tracking-tight">
                20,000+ of PNG & SVG graphics
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="./charm_circle-tick.svg" alt="charm_circle-tick" />
              <span className="text-[#1F2937] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Access to 100 million stock images
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-light.svg"
                alt="charm_circle-tick-light"
              />
              <span className="text-[#9CA3AF] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Upload custom icons and fonts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-light.svg"
                alt="charm_circle-tick-light"
              />
              <span className="text-[#9CA3AF] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Unlimited Sharing
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-light.svg"
                alt="charm_circle-tick-light"
              />
              <span className="text-[#9CA3AF] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Upload graphics & video in up to 4k
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-light.svg"
                alt="charm_circle-tick-light"
              />
              <span className="text-[#9CA3AF] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Unlimited Projects
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-light.svg"
                alt="charm_circle-tick-light"
              />
              <span className="text-[#9CA3AF] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Instant Access to our design system
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-light.svg"
                alt="charm_circle-tick-light"
              />
              <span className="text-[#9CA3AF] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Create teams to collaborate on designs
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-10 px-6 items-start gap-5  self-stretch rounded-xl bg-[#1F2937] w-80">
          <div className="flex flex-col gap-2">
            <span className="text-white font-Satoshi text-xl font-bold leading-normal tracking-tighter">
              Professional
            </span>
            <span className="text-[#F3F4F6] font-Satoshi text-sm font-medium leading-normal tracking-tight">
              Ideal for individuals who who need advanced features and tools for
              client work.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#F9FAFB] font-Satoshi text-6xl font-bold leading-normal tracking-tighter">
              $25
            </span>
            <span className="text-[#F9FAFB] font-Satoshi text-base font-normal leading-normal ">
              / Month
            </span>
          </div>
          <button className="flex py-2 px-3 mt-1 justify-center items-center gap-2 self-stretch rounded-lg bg-[#F9FAFB] text-[#1F2937] text-center font-Satoshi text-base font-medium leading-normal hover:bg-[#1F2937] hover:text-white border transition-colors ease-in-out duration-300">
            Get Started Now
          </button>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-white.svg"
                alt="charm_circle-tick"
              />
              <span className="text-[#F9FAFB] font-Satoshi text-base font-medium leading-normal tracking-tight">
                20,000+ of PNG & SVG graphics
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-white.svg"
                alt="charm_circle-tick"
              />
              <span className="text-[#F9FAFB] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Access to 100 million stock images
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-white.svg"
                alt="charm_circle-tick"
              />
              <span className="text-[#F9FAFB] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Upload custom icons and fonts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-white.svg"
                alt="charm_circle-tick"
              />
              <span className="text-[#F9FAFB] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Unlimited Sharing
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-white.svg"
                alt="charm_circle-tick"
              />
              <span className="text-[#F9FAFB] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Upload graphics & video in up to 4k
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-light.svg"
                alt="charm_circle-tick"
              />
              <span className="text-[#9CA3AF] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Unlimited Projects
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-light.svg"
                alt="charm_circle-tick"
              />
              <span className="text-[#9CA3AF] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Instant Access to our design system
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="./charm_circle-tick-light.svg"
                alt="charm_circle-tick"
              />
              <span className="text-[#9CA3AF] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Create teams to collaborate on designs
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-10 px-6 items-start gap-5  self-stretch rounded-2xl border border-[#E5E7EB] bg-white w-80">
          <div className="flex flex-col gap-2">
            <span className="text-[#191D23] font-Satoshi text-xl font-bold leading-normal tracking-tighter">
              Enterprise
            </span>
            <span className="text-[#6B7280] font-Satoshi text-sm font-medium leading-normal tracking-tight">
              Ideal for businesses who need personalized services and security
              for large teams.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#191D23] font-Satoshi text-6xl font-bold leading-normal tracking-tighter">
              $100
            </span>
            <span className="text-[#4B5563] font-Satoshi text-base font-normal leading-normal ">
              / Month
            </span>
          </div>
          <button className="flex py-2 px-3 mt-1 justify-center items-center gap-2 self-stretch rounded-lg border border-[#4B5563] text-[#4B5563] text-center font-Satoshi text-base font-medium leading-normal hover:bg-[#1F2937] hover:text-white transition-colors ease-in-out duration-300">
            Get Started Now
          </button>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src="./charm_circle-tick.svg" alt="charm_circle-tick" />
              <span className="text-[#1F2937] font-Satoshi text-base font-medium leading-normal tracking-tight">
                20,000+ of PNG & SVG graphics
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="./charm_circle-tick.svg" alt="charm_circle-tick" />
              <span className="text-[#1F2937] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Access to 100 million stock images
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="./charm_circle-tick.svg" alt="charm_circle-tick" />
              <span className="text-[#1F2937] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Upload custom icons and fonts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="./charm_circle-tick.svg" alt="charm_circle-tick" />
              <span className="text-[#1F2937] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Unlimited Sharing
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="./charm_circle-tick.svg" alt="charm_circle-tick" />
              <span className="text-[#1F2937] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Upload graphics & video in up to 4k
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="./charm_circle-tick.svg" alt="charm_circle-tick" />
              <span className="text-[#1F2937] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Unlimited Projects
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="./charm_circle-tick.svg" alt="charm_circle-tick" />
              <span className="text-[#1F2937] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Instant Access to our design system
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="./charm_circle-tick.svg" alt="charm_circle-tick" />
              <span className="text-[#1F2937] font-Satoshi text-base font-medium leading-normal tracking-tight">
                Create teams to collaborate on designs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing