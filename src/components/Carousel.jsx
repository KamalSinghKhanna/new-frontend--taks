import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarouselImages } from "../assets/data";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="flex flex-col pt-28">
      <div className="flex items-center justify-center">
        <button className=" w-64 h-14  border border-solid border-[#4B5563] rounded-lg shadow-inner-md font-Satoshi text-xl font-bold tracking-wide text-[#4B5563] hover:bg-[#4B5563] hover:text-white transition-colors ease-in-out duration-300">
          View recent work
        </button>
      </div>
      <div className="mt-16">
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
          {CarouselImages?.map((item) => (
            <SwiperSlide key={item.img} className="swiper-slide shadow">
              <div className={`w-full h-full p-1 sm:p-2 ${item.bgColor} bg-opacity-5 rounded-[2rem] shadow`}>
                <img src={item.img} alt={item.alt} className="w-full h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
