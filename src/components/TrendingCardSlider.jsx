import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingCard from "./TrendingCard";
function TrendingCardSlider({ trendingMovies }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <>
      <div className="w-[1200px] px-10">
        <Slider {...settings}>
          {trendingMovies.map((movie) => {
            return <TrendingCard key={movie.id} movie={movie} />;
          })}
        </Slider>
      </div>
    </>
  );
}

export default TrendingCardSlider;
