import React, { useEffect, useRef } from "react";
import { projects } from "../../data/projectCarousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";

const ProjectDesplay = () => {
  const comp = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(comp);
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: comp.current,
        start: "top 30%",
        // end: 'top 50%',
        // markers: true
      },
    });

    t1.from(q([".text1", ".text2", ".projectCard"]), {
      y: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      markers: true,
      //   scrub: true,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section
      id="Work"
      ref={comp}
      className="w-full project px-96 py-20 bg-secondary"
    >
      <div>
        <h1 className="text-6xl text1 font-roboto font-bold tracking-tighter text-zinc-900">
          Selected Projects & Case Studies Bringing Ideas to Life Through Code &
          Design
        </h1>
        <p className="font-inter text2 tracking-tighter text-zinc-700 font-semibold w-1/3 leading-none mt-7 font-xl ">
          Crafting Engaging Interfaces with Precision and Performance
        </p>
      </div>
      <div className="mt-5 w-full">
        <Carousel>
          <CarouselContent className="flex flex-1 justify-start w-full">
            {projects.map((val, ind) => (
              <CarouselItem className="basis-1/3 ">
                <ProjectCard val={val} ind={ind} />
              </CarouselItem>
              // <CarouselItem className="pl-4">...</CarouselItem>
              // <CarouselItem className="pl-4">...</CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectDesplay;
