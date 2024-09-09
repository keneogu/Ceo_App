import React from "react";
import Wrapper from "../wrapper";
import Image from "next/image";
import ContactImg from "@/assets/contact-img.png";

const MessageSec = () => {
  return (
    <>
      <Wrapper>
        <div className="flex w-full">
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              {/* Name Section */}
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">
                  Name:
                </label>
                <div className="flex space-x-4 w-full">
                  <input
                    type="text"
                    className="p-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="p-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">
                  Phone:
                </label>
                <input
                  type="tel"
                  className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div className="flex items-start space-x-4">
                <label className="text-sm font-medium text-gray-700 mt-2">
                  Message:
                </label>
                <textarea
                  rows={4}
                  className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Write your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="hidden md:flex md:w-1/2">
            <div className="relative overflow-hidden w-full">
              <Image
                src={ContactImg}
                alt="Contact Image"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default MessageSec;
