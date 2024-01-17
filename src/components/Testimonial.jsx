import {testimonial} from "../assets/data"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
const Testimonial = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="swiper-container"
    >
      {testimonial?.map((data) => (
        <SwiperSlide
          key={data.companyLogo}
          // className="pt-44 sm:pt-56 px-6 sm:px-12 md:px-20 lg:px-36 flex flex-col items-center gap-10"
          className="swiper-slide-1"
        >
          <div className="flex flex-col items-center px-4 sm:px-28 pb-5">
            <img src={data.companyLogo} alt="companyLogo" />
            <span className="text-[#1F2937] text-center font-Satoshi text-sm sm:text-3xl md:text-4xl sm:font-bold leading-4 sm:leading-[50px] tracking-tight">
              {data.statement}
            </span>
            <div className="flex flex-col items-center gap-4">
              <img src="./Avatar.svg" alt="avatar" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-[#101828] text-center font-Satoshi text-lg font-medium leading-7 tracking-tight">
                  {data.person}
                </span>
                <span className="text-[#667085] text-center font-Satoshi text-base font-normal leading-6 tracking-tight">
                  {data.role}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Testimonial