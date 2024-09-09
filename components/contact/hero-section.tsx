import React from "react";
import Wrapper from "../wrapper";
import { Button } from "../button";

const HeroSection = () => {
  return (
    <>
      <Wrapper bg="bg-hero-bg bg-cover bg-center" mt="mt-[60px]">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center md:w-2/4">
            <h2 className="text-red100 text-2xl font-archivo font-bold pb-6">
              Contact Us
            </h2>
            <p className="text-grey70 font-semibold pb-14">
              Do you have any questions for us or suggestions you’ll like us to
              hear? - Contact us, our team would love to hear from you
            </p>
            <Button>Contact us</Button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default HeroSection;
