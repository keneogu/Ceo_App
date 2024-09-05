import { featuresCardData } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import Wrapper from "../wrapper";

const Features = () => {
  return (
    <Wrapper>
      <h3 className="text-red100 font-biryani text-center pb-4">FEATURES</h3>
      <div className="w-full">
        {featuresCardData.map((item, index) => (
          <div
            key={index}
            className={`w-full flex justify-between items-start gap-10 flex-col mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:flex-row py-6 my-12`}
          >
            <div className="hidden md:w-1/2 lg:w-3/5 md:flex items-center justify-center gap-4 p-4 border rounded">
              <Image
                src={item.image}
                alt={`Image ${index}`}
                className="max-w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 lg:w-2/5 flex-col items-center justify-center">
              <h4 className="font-archivo text-4xl md:text-2xl pb-4 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#02081A] via-[#072267] to-[#45BDEA]">{item.title}</h4>
              <p className="font-biryani pb-2 text-sm md:text-lg">{item.description}</p>
              <p className="text-sm md:text-lg">{item.subtext}</p>
            </div>
            <div className="w-full flex items-center justify-start p-4 sm:hidden">
              <Image
                src={item.mobileImg}
                alt={`Mobile Image ${index}`}
                width={200}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Features;
