import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DragonCarousel: React.FC = () => {
  const images: string[] = [
    "/cards/caraxes.jpg",
    "/cards/meleys.jpg",
    "/cards/seasmoke.jpg",
    "/cards/silverwing.jpg",
    "/cards/sunfyre.jpg",
    "/cards/syrax.jpg",
    "/cards/vermax.jpg",
    "/cards/vermithor.jpg",
    "/cards/vhagar.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-slate-100 mt-12">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-12">
            <div className="relative w-full">
              <img
                src={image}
                alt={image.replace("cards/", "").replace(".jpg", "")}
                className="w-full h-auto rounded-lg" // Asegura que la imagen mantenga sus proporciones originales
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DragonCarousel;
