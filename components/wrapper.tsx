import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  bg?: string;
  py?: string;
  mt?: string;
  position?: string;
}

const Wrapper = ({ children, bg, py, mt, position }: WrapperProps) => {
  return (
    <section className={`w-full ${bg || "bg-white1"} ${position || ""}`}>
      <div
        className={`mx-auto max-w-[1280px] w-[90%] ${
          py || "py-[60px] md:py-[100px]"
        } ${mt}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
