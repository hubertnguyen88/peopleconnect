import { memo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center rounded-full py-3 px-4 text-base ${
        disabled
          ? "bg-black text-white"
          : "bg-blue-600 text-white hover:bg-[#4CE9B8] hover:text-black"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default memo(Button);
