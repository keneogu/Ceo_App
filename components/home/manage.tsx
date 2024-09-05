import React from "react";
import { Button } from "../button";
import Image from "next/image";
import Grouped from "@/assets/grouped.png";
import Wrapper from "../wrapper";

const Manage = () => {
  return (
    <>
      <Wrapper position="relative">
        <div className="flex w-full h-full absolute top-0 left-0">
          {/* Blue section taking 70% width */}
          <div className="w-[80%] bg-navyBlue100"></div>

          {/* Other colors section taking 30% width collectively */}
          <div className="flex w-[20%]">
            <div className="w-[33.33%] bg-red100"></div>
            <div className="w-[33.33%] bg-red_75"></div>
            <div className="w-[33.33%] bg-red_50"></div>
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row gap-12 py-6 px-8 text-white w-full items-center justify-center z-10">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl mb-4">
              Manage Your Business Effortlessly with CEOApp
            </h2>
            <p className="text-sm mb-6">
              TheCEOApp gives business owners instant graphic designs, an
              instant website , tracking of inventory, sales and debtor data,
              receipts, invoices, quotations and more business growth tools.
            </p>

            <Button bg="bg-transparent" additionalStyles="border-2 border-white1 hover:bg-white hover:text-navyBlue100">Get Started free</Button>
          </div>

          <div className="">
            <Image src={Grouped} width={1500} height={1500} alt="manage pics" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Manage;
