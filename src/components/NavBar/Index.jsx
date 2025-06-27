import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Index = () => {
  const [ind, setInd] = useState(0);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      setBlur(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 py-4 flex justify-between px-96 items-center transition-all duration-300 ${
        blur ? "bg-white/30 backdrop-blur-[6px]" : ""
      }`}
    >
      <div className="flex items-center gap-16">
        {["Home", "About", "Work", "Contact"].map((item, index) => (
          <Link
            to={item}
            smooth={true}
            delay={100}
            offset={-50}
            spy={true}
            activeClass="active"
            duration={1000}
          >
            <a
              key={index}
              href={`/${item.toLowerCase()}`}
              onClick={() => setInd(index)}
              // onMouseLeave={() => setInd(0)}
              className={`text-zinc-800 font-inter text-md font-light tracking-tighter hover:text-primary transition-all duration-300 ease-in-out ${
                index === ind ? "text-primary font-semibold" : ""
              }`}
            >
              {item}
            </a>
          </Link>
        ))}
      </div>
      <div>
        <a
          href="/"
          className="text-zinc-800 font-roboto text-4xl font-bold tracking-tighter"
        >
          adi
        </a>
      </div>
    </div>
  );
};

export default Index;
