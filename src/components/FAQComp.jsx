import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export const FAQComp = ({ heading, text }) => {
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
      <div className=" text-white flex flex-col  w-[94%] bg-black">
        <div
          className="flex justify-between"
          style={{ backgroundColor: "rgb(45,45,45)" }}
        >
          <div className=" px-10 py-5 ">
            <h1 className="text-white text-2xl"> {heading} </h1>
          </div>
          <div
            className="p-2 text-4xl pr-7 py-5 cursor-pointer"
            onClick={handleIsOpen}
          >
            <AiOutlinePlus />
          </div>
        </div>

        {isOpen ? (
          <div
            className="text-2xl text-white  mt-1 px-10 py-3"
            style={{ backgroundColor: "rgb(45,45,45)" }}
          >
            <p>{text}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
