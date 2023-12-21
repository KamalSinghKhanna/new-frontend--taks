import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="flex flex-col pt-28">
      <div className="mb-16">
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
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          <SwiperSlide className="swiper-slide">
            <img
              src="/Frame1.png"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="/Frame2.svg"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="/Frame3.svg"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="/Frame4.svg"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="/Frame1.png"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="/Frame3.svg"
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex items-center justify-center">
        <button className=" w-64 h-14  border border-solid border-[#4B5563] rounded-lg shadow-inner-md font-Satoshi text-xl font-bold tracking-wide text-[#4B5563] hover:bg-[#4B5563] hover:text-white transition-colors ease-in-out duration-300">
          View recent work
        </button>
      </div>
    </div>
  );
};

export default Carousel;
