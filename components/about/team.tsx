import React from "react";
import Wrapper from "../wrapper";
import Image from "next/image";
import { teamStaff } from "@/utils/constants";

const Team = () => {
  return (
    <div>
      <Wrapper py="py-8">
        <h3 className="text-red100 font-biryani text-center pb-12">OUR TEAM</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {teamStaff.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-4 w-full md:w-1/4 lg:w-1/5 xl:w-1/6"
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-3">
                <Image
                  src={item.image}
                  alt="staff Image"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <h3 className="pb-2 font-archivo font-bold">{item.name}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Team;
