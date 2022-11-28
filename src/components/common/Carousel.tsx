import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import OptImg from "@/components/common/OptImg";

interface CarouselParams {
  imageSrc: string[];
}

export default function Carousel({ imageSrc }: CarouselParams) {
  return (
    <Swiper
      className="relative h-full w-full"
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {imageSrc.map((src, idx) => (
        <SwiperSlide key={idx} className="aspect-square w-full bg-gray-200">
          <div className="h-full w-full overflow-hidden rounded-lg">
            <OptImg alt="gg" src={src}></OptImg>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
