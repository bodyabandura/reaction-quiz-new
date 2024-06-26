import React, { FC } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface LogosSliderInterface {
  items1: any;
  items2: any;
  items3: any;
}

export const LogosSlider: FC<LogosSliderInterface> = ({
  items1,
  items2,
  items3,
}) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 800,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {items1.map((item: any, index: any) => (
          <div key={index} className="p-2">
            <Image
              src={item.img}
              alt={item.label}
              width={80}
              height={80}
              className="w-[80px] h-[80px] items-center justify-center flex border rounded object-contain p-2"
            />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {items2.map((item: any, index: any) => (
          <div key={index} className="p-2">
            <Image
              src={item.img}
              alt={item.label}
              width={80}
              height={80}
              className="w-[80px] h-[80px] items-center justify-center flex border rounded object-contain p-2"
            />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {items3.map((item: any, index: any) => (
          <div key={index} className="p-2">
            <Image
              src={item.img}
              alt={item.label}
              width={80}
              height={80}
              className="w-[80px] h-[80px] items-center justify-center flex border rounded object-contain p-2"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
