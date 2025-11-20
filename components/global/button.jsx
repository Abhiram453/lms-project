import React from "react";

const Button = ({ children, onClick, type = "button", disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        w-full py-3 mt-2
        bg-blue-600 text-white
        font-semibold 
        rounded-lg 
        shadow-md
        hover:bg-blue-700 
        transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
};

export default Button;
