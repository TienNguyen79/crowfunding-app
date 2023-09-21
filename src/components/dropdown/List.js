import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <div>
      {show && (
        <div className="absolute top-full left-0 w-full bg-white shadow-sm rounded-xl text-text3 mt-2 z-20 overflow-y-scroll max-h-[180px] scroll-hidden">
          {children}
        </div>
      )}
    </div>
  );
};

export default List;
