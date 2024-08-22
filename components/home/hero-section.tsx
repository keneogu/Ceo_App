import React from "react";
import Wrapper from "../wrapper";
import { Button } from "../button";
import Image from "next/image";
import dashboardLap from "@/assets/dashboard-lap.png";

const HeroSection = () => {
  return (
    <>
    <Wrapper py="py-[20px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-24 mt-[50px] md:mt-[50px]">
        <div className="md:w-1/2 pt-10">
          <h1 className="font-archivo text-center md:text-start text-[42px] md:text-3xl xl:text-6xl max-w-[600px] font-bold mb-6 leading-tight">
            <span className="text-red100">Grow</span> your business with{" "}
            <span className="text-red100">Ease</span>
          </h1>
          <p className="font-biryani text-sm md:text-xs lg:text-base text-center md:text-start my-8 max-w-[500px]">
            TheCEOApp gives business owners instant graphic designs, an instant
            website, tracking of inventory, sales and debtor data, receipts,
            invoices, quotations and more business growth tools.
          </p>

          <div className="flex flex-col gap-6 md:flex-row">
            <Button
              type="submit"
              fontSize="md:text-xs"
            >
              Create a free account
            </Button>
            <Button type="submit" color="text-navyBlue100" bg="blue" border="border-2 border-navyBlue100">
              Login
            </Button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 mt-8 md:mt-0 pt-10">
          <Image
            src={dashboardLap}
            alt="hero"
            width={1500}
            height={1500}
            quality={100}
          />
        </div>
      </div>
    </Wrapper>
    <div className="w-full flex flex-nowrap overflow-hidden items-center justify-center space-x-12 py-2 lg:py-4 text-grey50 font-biryani font-semibold bg-navyBlue100 mt-12 -skew-y-3">
      {/* Paragraph Elements */}
      <p className="text-center">Services</p>
      {/* Circle */}
      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>

      <p className="text-center">Ecommerce</p>
      {/* Circle */}
      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>

      <p className="text-center">Business</p>
      {/* Circle */}
      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>

      <p className="text-center">StartUps</p>
      {/* Circle */}
      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>

      <p className="text-center">Details</p>
    </div>
    </>
  );
};

export default HeroSection;
