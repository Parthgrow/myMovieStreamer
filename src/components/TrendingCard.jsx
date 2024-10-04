import React, { useState } from "react";
import ModalComp from "./ModalComp";

function TrendingCard({ movie }) {
  const [isOpen, setIsOpen] = useState(false);
  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  const handleIsOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="border-2 border-white h-52 w-44  rounded-lg bg-gray-900 border-opacity-15 shadow-sm  opacity-65 ">
        <div
          style={{
            backgroundImage: `url(${baseImageUrl}${movie.backdrop_path})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "50%",
          }}
          onClick={handleIsOpen}
        ></div>
        <div className="text-center text-sm mt-10">
          <h1>{movie.original_title}</h1>
        </div>
      </div>
      <div>
        {/* {isOpen && <ModalComp isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      </div>
    </>
  );
}

export default TrendingCard;
