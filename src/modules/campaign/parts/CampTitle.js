import React from "react";

const CampTitle = ({ children, className = " mb-1" }) => {
  return (
    <h2 className={`text-text1 font-semibold ${className}`}>{children}</h2>
  );
};

export default CampTitle;
