import React from "react";

const IconsButton = ({ reactIcon }) => {
  return (
    <button className="border-2 border-gray rounded-lg p-4 hover:bg-gray">
      {reactIcon}
    </button>
  );
};

export default IconsButton;
