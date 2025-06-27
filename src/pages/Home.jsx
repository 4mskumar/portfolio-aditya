import React from "react";
import Index from "../components/NavBar/Index";
import Hero from "../components/HeroComp/Hero";
import MockupGallery from "../components/About/MockupGallery";
import ProjectDesplay from "../components/About/ProjectDesplay";
import Contact from "../components/About/Contact";
import FooterComp from "../components/Footer/FooterComp";
import { Link } from "react-scroll";
import { Globe } from "../components/magicui/globe";
import { SmoothCursor } from "../components/ui/smooth-cursor";

const Home = () => {
  return (
    <div> 
      <Index />

      {/* <Globe /> */}
      <SmoothCursor />
      <Link
        to="Home"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      >
        <Hero />
      </Link>
      <Link
        to="About"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      >
        <MockupGallery />
      </Link>
      {/* <Link
        to="Work"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      > */}
        <ProjectDesplay />
      {/* </Link> */}
      <Link
        to="Contact"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      >
        <Contact />
      </Link>
      <FooterComp />
    </div>
  );
};

export default Home;
