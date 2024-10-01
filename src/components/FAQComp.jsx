import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export const FAQComp = () => {
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
            <h1 className="text-white text-2xl">What is netflix ? </h1>
          </div>
          <div className="p-2 text-4xl pr-7 py-5" onClick={handleIsOpen}>
            <AiOutlinePlus />
          </div>
        </div>

        {isOpen ? (
          <div
            className="text-2xl text-white  mt-1 px-10 py-3"
            style={{ backgroundColor: "rgb(45,45,45)" }}
          >
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
