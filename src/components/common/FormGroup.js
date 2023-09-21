import React from "react";

const FormGroup = ({ children, className }) => {
  return (
    <div className={`flex flex-col gap-y-3 mb-4 lg:mb-5 ${className}`}>
      {children}
    </div>
  );
};

export default FormGroup;
