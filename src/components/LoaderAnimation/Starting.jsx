import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

const Starting = ({ onComplete }) => {
  const comp = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(comp); 
      
      const tl = gsap.timeline();

      tl.from(q(".name"), {
        scale: 3,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      })
      .from(q(".loading-line"), {
        width: 0,
        duration: 1,
        ease: 'power2.inOut',
      })
      .to(q(".name"), {
        opacity: 0,
        ease: 'power2.inOut',
      }, '-=0.5')
      .to(q(".loading-line"), {
        width: '200rem',
        duration: 1,
        ease: 'power2.inOut',
      })
      .to(q(".loading-line"), {
        opacity: 0,
      })
      .to([q(".loading-line"), q(".loading-back")], {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.inOut',
      }, '-=0.2')
      .to([q(".rect-top"), q(".rect-bott")], {
        y: (i) => i === 0 ? '-100%' : '100%',
        duration: 1,
        ease: 'power2.inOut',
      });

      tl.eventCallback('onComplete', onComplete);

    }, comp);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <section ref={comp} className="w-full z-[100] overflow-hidden relative h-screen flex flex-col justify-center items-center">
      <div className="rect-top h-1/2 w-full bg-secondary"></div>
      <div className="rect-bott h-1/2 w-full bg-secondary"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-11 flex flex-col justify-center items-center">
        <h1 className="name text-xl tracking-widest font-roboto font-light text-black">ADITYA KUMAR</h1>

        <div className="loading-line w-full origin-left relative h-[1px] bg-black mt-4" style={{ transformOrigin: 'left' }}></div>

        <div className="loading-back absolute bottom-0 left-0 w-full h-[1px] bg-black/60"></div>
      </div>
    </section>
  );
}

export default Starting;
