import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DragonCarousel: React.FC = () => {
  const images = [
    "caraxes.jpg",
    "meleys.jpg",
    "seasmoke.jpg",
    "silverwing.jpg",
    "sunfyre.jpg",
    "syrax.jpg",
    "vermax.jpg",
    "vermithor.jpg",
    "vhagar.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="py-8 bg-slate-100">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={`/cards/${image}`}
              alt={image.replace(".jpg", "")}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DragonCarousel;
