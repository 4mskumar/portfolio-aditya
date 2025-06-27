import gsap from "gsap";
import React, { useEffect } from "react";
import { Link } from "react-scroll";

const Hero = () => {

  useEffect(() => {
    const q = gsap.utils.selector('.hero')
    gsap.from(q(['.title', '.rightComp', '.leftComp']), {
      y: 100,
      opacity: 0,
      stagger: 0.4,
      duration: 1,
      ease: 'power2.inOut',
    })
  }, [])

    return (
    <section id="Home" className="px-96 hero -mt-10 bg-secondary w-full min-h-screen">
      <div>
        <h1 className="text-[21rem] title text-center font-bold text-black font-inter tracking-tighter ">
          Hi there
        </h1>
      </div>
      <div className="flex justify-between relative -mt-36 items-center">
        <div className="flex leftComp w-1/3 mt-20 h-[50rem] flex-col gap-3">
          <div className=" h-full flex flex-col gap-2">
            <p className="text-5xl font-semibold font-inter text-black tracking-tight">
              Creative design -{" "}
            </p>
            <p className="text-5xl font-semibold font-inter text-black tracking-tight">
              Front End Developer
            </p>
            <p className="text-5xl font-semibold font-inter text-orange-600 tracking-tight">
              Aditya Kr
            </p>
            <div className="flex gap-5 items-center mt-10">
              <Link to="Work" smooth={true} delay={100} offset={-50} spy={true} activeClass="active" duration={1000} className="text-xl font-roboto px-7 py-2 hover:bg-black/80 duration-300 transition-all cursor-pointer bg-black text-white tracking-tight rounded-full border">
                View projects
              </Link>
              <a className="text-xl font-roboto px-7 py-2 rounded-full border-[1px] border-black cursor-pointer">
                About me
              </a>
            </div>
          </div>
          <div className="flex justify-end w-2/3 leading-none font-inter text-left">
            <p>
              Today, I lead a team of talented designers, specialising in brand
              identity and UI design. My superpower? Quick learning and
              innovative thinking, bringing order to complexity and infusing
              creativity into every project.
            </p>
          </div>
        </div>
        <div className="w-[23rem] rightComp absolute top-0 right-0 h-[40rem] scale-125">
          <div className="w-full h-2/3 bg-zinc-950 flex justify-center items-center">
            <img src="/images/concert 1.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex justify-between items-start gap-10 mt-20">
            <p className="leading-none w-1/2 font-inter text-[0.7rem] text-left">As a graphic design leader, i'm driven by change and desire. Experiment with long exposures to capture mesmerizing light trails from vehicles.</p>
            <div className="font-semibold w-full tracking-tight font-inter text-2xl">
              <p>Creative direction</p>
              <p>Creative direction</p>
              <p>Creative direction</p>
              <p>Creative direction</p>
              <p>Creative direction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
