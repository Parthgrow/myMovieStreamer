import React from "react";
import { useState } from "react";
import TrendingCard from "./TrendingCard";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

export const TrendingSlider = ({ trendingMovies }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastMovie = currentPage * itemsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;

  const currentMovies = trendingMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const handleNextPage = () => {
    if (currentPage === 1) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 2) {
      setCurrentPage(1);
    }
  };
  return (
    <>
      <div
        className=" flex  justify-center gap-14 my-5
      "
      >
        {currentPage === 2 && (
          <div
            className="  h-24 rounded-md bg-gray-900 hover:bg-gray-500 hover:opacity-75 w-8 items-center py-8 my-14"
            onClick={handleNextPage}
          >
            <BiChevronLeft className="text-3xl font-bold" />
          </div>
        )}
        {currentMovies.map((movie) => {
          return (
            <TrendingCard
              key={movie.number}
              name={movie.number}
              graphicLink={movie.graphicLink}
            />
          );
        })}
        {currentPage === 1 && (
          <div
            className="  h-24 rounded-md bg-gray-900 hover:bg-gray-500 hover:opacity-75 w-8 items-center py-8 my-14"
            onClick={handleNextPage}
          >
            <BiChevronRight className="text-3xl font-bold" />
          </div>
        )}
      </div>
    </>
  );
};
