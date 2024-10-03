import React from "react";
import { trendingMovies } from "./HomePage";
import { TrendingSlider } from "../components/TrendingSlider";
import TrendingCard from "../components/TrendingCard";
import TrendingCardSlider from "../components/TrendingCardSlider";

function TestPage() {
  return (
    <div className="min-h-screen  bg-black py-40">
      <div className="border-2 border-white text-white">
        <TrendingCardSlider trendingMovies={trendingMovies} />
      </div>
    </div>
  );
}

export default TestPage;
