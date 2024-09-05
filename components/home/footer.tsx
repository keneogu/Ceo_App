import React from "react";
import Wrapper from "../wrapper";
import FooterList from "./footer-list";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { MdFacebook } from "react-icons/md";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-grey5 text-sm">
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Image src={logo} alt="logo image" width={150}/>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2 text-navyBlue_75">Quick links</h3>
            <Link href="#">Get Started</Link>
            <Link href="#">Login</Link>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2 text-navyBlue_75">Legal</h3>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms and Condition</Link>
            <Link href="#">Disclaimer</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2 text-navyBlue_75">Connect with us</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="flex items-center gap-2">
                LinkedIn
                <FaLinkedin size={15} className="text-grey70"/>
              </Link>
              <Link href="#" className="flex items-center gap-2">
                X(Twitter)
                <FaXTwitter size={15} className="text-grey70"/>
              </Link>
              <Link href="#" className="flex items-center gap-2">
                Instagram
                <FaInstagram size={15} className="text-grey70"/>
              </Link>
              <Link href="#" className="flex items-center gap-2">
                Facebook
                <MdFacebook size={15} className="text-grey70"/>
              </Link>
            </div>
          </FooterList>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
