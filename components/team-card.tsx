import Image from "next/image";
import React from "react";

type TeamCardProps = {
  name?: string;
  description?: string;
  img?: string;
};

const TeamCard = ({ name, description, img }: TeamCardProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 w-full md:w-1/4 lg:w-1/6">
        <div className="relative w-40 h-40 rounded-full overflow-hidden mb-3">
          {img && (
            <Image
              src={img}
              alt={`${name}'s image`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          )}
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="pb-2 font-archivo font-bold">{name}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
