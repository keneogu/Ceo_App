import React from "react";
import { Button } from "./button";
import { IoCheckmark } from "react-icons/io5";

type PricingCardType = {
  icon?: React.ReactNode;
  title?: string;
  price?: string;
  btnText?: string;
  items: string[];
  onButtonClick?: () => void;
  bgColor?: string;
};

const PricingCard = ({
  icon,
  title,
  price,
  btnText,
  onButtonClick,
  bgColor,
  items,
}: PricingCardType) => {
  return (
    <div
      className={`border-t-4 ${
        bgColor === "bg-red25" ? "border-t-red100" : "border-t-navyBlue100"
      } ${bgColor} rounded-lg w-full flex flex-col justify-between p-6`}
    >
      <div className="flex flex-col items-start pb-6">
        <div
          className={`${
            bgColor === "bg-red25" ? "text-red100" : "text-navyBlue100"
          } text-5xl mb-4`}
        >
          {icon}
        </div>
        <h2
          className={`text-2xl font-archivo font-extrabold mb-4 ${
            bgColor === "bg-red25" ? "text-red100" : "text-navyBlue100"
          } text-center`}
        >
          {title}
        </h2>
        <div className="mb-4 text-gray-700">
          {items.map((item, index) => (
            <div key={index} className="mb-2">
              <p className="flex gap-2 items-center text-sm font-biryani font-medium">
                <span>
                  <IoCheckmark />
                </span>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center mb-6">
          <p
            className={`text-xl lg:text-4xl font-semibold ${
              bgColor === "bg-red25"
                ? "text-red100"
                : "text-navyBlue100"
            }`}
          >
            &#8358;{price}/month
          </p>
          <Button
            children={btnText}
            onClick={onButtonClick}
            bg={bgColor === "bg-red25" ? "bg-red100" : "bg-navyBlue100"}
          />
      </div>
    </div>
  );
};

export default PricingCard;
