import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";

const FooterComp = () => {
  return (
    <div className="w-full flex justify-between items-start px-80 py-10">
      <div className="font-roboto flex-col flex text-5xl font-bold tracking-tighter gap-8 justify-between">
        <h1>adityakr4ms@gmail.com</h1>
        <div className="text-lg text-inter text-zinc-800 tracking-tighter flex items-center mt-6 justify-between">
          <p>New Delhi, Inida</p>
          <p>
            Frontend Developer{" "}
            <span className="text-lg cursor-pointer tracking-tighter font-dm text-blue-500">
              #sleekDesigns
            </span>
          </p>
        </div>
        <div className="text-sm text-inter text-zinc-700 tracking-tighter ">
          <p>© 2025 Behance. All rights reserved.</p>
        </div>
      </div>
      <div clas>
        <div className="text-lg font-semibold font-inter tracking-tighter text-zinc-800 flex items-center mt-6 justify-between ">
          <p>
            Say hello <a className="text-lg underline">work with me</a>
          </p>
        </div>
        <div className="flex mt-10 items-end gap-5">
          <a>
            <RiTwitterXFill className="text-4xl text-zinc-700" />
          </a>
          <a>
            <FaLinkedinIn className="text-4xl text-zinc-700" />
          </a>
          <a>
            <SiLeetcode className="text-4xl text-zinc-700" />
          </a>
          <p className="text-lg cursor-pointer font-robot text-zinc-700 tracking-tighter underline">
            <Link
              to="home"
              smooth={true}
              delay={100}
              offset={-50}
              spy={true}
              activeClass="active"
              duration={1000}
            >
              Back to top
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
