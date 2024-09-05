"use client";

import React, { useState } from "react";
import { frequentQuestions } from "@/utils/constants";
import Wrapper from "../wrapper";

const FrequentQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper bg="bg-[#F9F9F9]">
      <h3 className="text-red100 font-biryani text-center pb-4">
        FREQUENTLY ASKED QUESTIONS
      </h3>
      <div className="space-y-4 ">
        {Object.keys(frequentQuestions).map((question, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white1 rounded-md shadow-sm"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleOpen(index)}
            >
              <h2 className="text-lg font-semibold">{question}</h2>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-gray-100">
                {frequentQuestions[question].map((answer: any, i: any) => (
                  <p key={i} className="text-gray-700">
                    {answer}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default FrequentQuestions;
