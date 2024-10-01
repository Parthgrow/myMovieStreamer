import React from "react";
import { AiOutlineX } from "react-icons/ai";

// Things to study :
// => Redux tool kit
// => Mongo DB
// => User authentication
// => Complete the undual assignment

function ModalComp({ isOpen, setIsOpen }) {
  const handleIsOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <div className="border-2 border-black/30 bg-white/10 backdrop-blur-3xl z-10 rounded-sm h-2/3  w-1/2 fixed top-28 left-96 flex p-4  ">
        <div className=" w-full">first div</div>
        <div className="">
          <AiOutlineX onClick={handleIsOpen} />
        </div>
      </div>
    </>
  );
}

export default ModalComp;
