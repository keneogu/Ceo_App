import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  bg?: string;
  color?: string;
  py?: string;
  px?: string;
  w?: string;
  border?: string;
  href?: string;
  btnText?: string;
  gap?: string;
  icon?: any;
  type?: "submit" | "button" | "reset";
  fontSize?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  bg,
  color,
  py,
  px,
  w,
  border,
  href,
  type,
  onClick,
  fontSize,
  ...props
}: ButtonProps) => {
  return (
    <>
      {type === "submit" || type === "button" || type === "reset" ? (
        <button
          type={type}
          onClick={onClick}
          className={`${bg || "bg-red100"} ${py || "py-2"} ${
            px || "px-4"
          } rounded-md ${fontSize || "text-lg"} ${border || 'border-0'} ${color || "text-white1"} ${
            w || "w-full"
          } font-semibold`}
          {...props}
        >
          {children}
        </button>
      ) : (
        <Link
          href={href || "/"}
          className={`${bg || "bg-red100"} ${py || "py-2"} ${
            px || "px-8"
          } rounded-md font-medium ${fontSize || "text-lg"}  ${
            color || "text-white1"
          }  font-semibold `}
        >
          {children}
        </Link>
      )}
    </>
  );
};
