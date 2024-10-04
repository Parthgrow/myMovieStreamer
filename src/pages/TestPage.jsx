import React from "react";
import { trendingMovies } from "./HomePage";
import { TrendingSlider } from "../components/TrendingSlider";
import TrendingCard from "../components/TrendingCard";
import TrendingCardSlider from "../components/TrendingCardSlider";
import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

function TestPage() {
  const { movies, setMovies } = useContext(MoviesContext);
  console.log(movies);
  return (
    <div className="min-h-screen  bg-black py-40">
      <div className="border-2 border-white text-white">
        <TrendingCardSlider trendingMovies={movies} />
      </div>
    </div>
  );
}

export default TestPage;
