"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const navLinks = [
    { title: "Features", path: "/features" },
    { title: "Pricing", path: "/pricing" },
    { title: "About The CeoApp", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="h-[80px] bg-white1 top-0 left-0 right-0 z-[1000]">
      <div className="relative flex gap-8 max-w-[1280px] mx-auto justify-between items-center py-5 w-[90%]">
        <Link href="/" className="mr-6">
          <Image src={logo} alt="logo" width={140} height={140} layout="responsive"/>
        </Link>
        <nav className="hidden md:flex self-center gap-6 lg:gap-12">
          {navLinks.map((item) => (
            <Link href={item.path} key={item.title}>
              <div className="flex items-center text-sm lg:text-base flex-col lg:gap-4 text-navyBlue100 font-biryani font-semibold">
                <p className={`${item.path === pathname ? "font-bold" : ""}`}>
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex font-archivo">
          <Button href="#" bg="bg-red100" fontSize="text-sm lg:text-lg" px="px-2 lg:px-4">
            Get Started
          </Button>
        </div>
        <button onClick={toggleMenu} className="flex md:hidden">
          <AiOutlineMenu fontSize={"1.7rem"} color="#000000" />
        </button>
        {isOpen && (
          <nav className="absolute top-20 right-0 flex flex-col gap-10 text-navyBlue100 font-semibold px-12 py-5">
            {navLinks.map((item) => (
              <Link
                href={item.path}
                key={item.title}
                className={`${item.path === pathname ? "font-bold" : ""}`}
              >
                {item.title}
              </Link>
            ))}
            <Link href="#">Get Started</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
