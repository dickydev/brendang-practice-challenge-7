import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  src?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, src }) => {
  return (
    <button
      className="bg-amber-500 text-white m-1"
      onClick={() => alert("SUCCESS SEND SOMETHING")}
    >
      <img src={src} alt="" />
      {children}
    </button>
  );
};
