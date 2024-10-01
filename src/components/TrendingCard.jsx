import React, { useState } from "react";
import ModalComp from "./ModalComp";

function TrendingCard({ number, graphicLink }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div>
        <div
          style={{
            backgroundImage: `url(${graphicLink})`,
          }}
          className="border-2 border-white h-52 w-44 p-3 rounded-lg bg-gray-900 border-opacity-15 shadow-sm  opacity-65 "
          onClick={handleIsOpen}
        >
          <div className="relative top-12 right-3 z-10 text-3xl">{number}</div>
        </div>
        <div>
          {isOpen && <ModalComp isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </>
  );
}

export default TrendingCard;
