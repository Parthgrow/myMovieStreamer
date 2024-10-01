import React from "react";

export const backgroundLayout = ({ children }) => {
  return (
    <>
      <div className="bg-black opacity-50">{children}</div>
    </>
  );
};
