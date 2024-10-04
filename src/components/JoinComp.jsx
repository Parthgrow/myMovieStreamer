import React from "react";

function JoinComp({ heading, text }) {
  return (
    <>
      <div>
        <div
          className=" text-white border-2 border-black h-56 w-72 rounded-3xl shadow-lg text-wrap py-2 px-4"
          style={{
            background: "linear-gradient(rgb(2, 10, 50),rgb(30,21,39))",
            // backgroundColor: "rgb(30,21,39)",
          }}
        >
          <h1 className="text-2xl">{heading} </h1>
          <p className="text-base text-gray-300 mt-4">{text}</p>
        </div>
      </div>
    </>
  );
}

export default JoinComp;
