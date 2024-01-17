
import { features } from '../assets/data';
import Works from './Works';
export const Features = () => {
  return (
   <div className="mt-36  lg:px-32" id="work">
      <div className="flex flex-col gap-2 px-4 pb-10 sm:pb-20">
        <span className="text-[#1F2937] text-center font-Satoshi text-[40px] sm:text-5xl font-bold leading-normal tracking-tight">
          How it works
        </span>
        <span className="text-[#4B5563] text-center font-Satoshi text-base sm:text-xl font-medium leading-normal">
          Empowering your vision, one project at a time. Here&apos;s how our
          tailored web development process unfolds:
        </span>
      </div>
      {features.map((item, index) => (
        <div
          key={index}
          className="sm:px-10 sticky top-10 py-3 sm:py-10  w-[80%] m-auto"
        >
          <Works
            item={item}
          />
        </div>
      ))}
    </div>
  );
}
