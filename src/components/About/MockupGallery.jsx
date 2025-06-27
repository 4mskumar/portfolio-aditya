import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

const MockupGallery = () => {

  const comp = useRef()
  const cursorComp = useRef()

  useEffect(() => {
    const q = gsap.utils.selector(comp)
    gsap.registerPlugin(ScrollTrigger)
    const t1 = gsap.timeline({
      scrollTrigger:{
        trigger: q('.gallery'),
        start: 'top 30%',
        end: 'top 50%',
        // scrub: true,
        // markers: true
      }
    })

    t1.from(q(['.rect1', '.rect2', '.rect3', '.rect4', '.rect5', '.rect6', '.rect7']), {
      y: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      // markers: true,
      scrub: true,
      ease: 'power2.inOut',
    })

    const handleMouseHover = () => {
      gsap.to(cursorComp.current, {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.inOut',
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
      })
    }
  }, [])


  return (
    <div id='About' ref={comp} className='w-full  gap-10 min-h-screen px-96 py-20 flex flex-col bg-secondary'>
        <div className='w-full relative gallery h-2/3 flex justify-start gap-5 items-start'>
          <div className='w-1/2 rect1 aspect-square h-full bg-red-600'>
            <img src="/images/p1.jpg" className='w-full h-full object-cover' alt="" />
            <p className='text-md font-semibold text-zinc-800/95 font-roboto tracking-tighter mt-3'>Family style - 2024</p>
          </div>
          <div data-scroll-speed='0.1' data-scroll className='w-1/3 rect2 aspect-square h-2/3 bg-green-600'>
            <img src="/images/p2.jpg" className='w-full h-full object-cover' alt="" />
            <p className='text-md font-semibold text-zinc-800/95 font-roboto tracking-tighter mt-3'>Blended Tech - 2024</p>
          
          </div>
        </div>
        <div className='w-full h-2/3 flex justify-end pl-10 items-start'>
          <div data-scroll-speed='-0.1' data-scroll className='w-1/2 rect3 aspect-square h-full bg-orange-600'>
            <img src="/images/p3.jpg" className='w-full h-full object-cover' alt="" />
            <p className='text-md font-semibold text-zinc-800/95 font-roboto tracking-tighter mt-3'>Ochie Design - 2023</p>
          </div>
          {/* <div className='w-1/3 aspect-square h-2/3 bg-red-600'></div> */}
        </div>
        <div className='w-full h-2/3 flex justify-start gap-5 items-start'>
          <div className='w-[16.5rem] rect4 aspect-square h-[16rem]'>
            <p className='text-md font-semibold text-zinc-800/95 font-roboto tracking-tighter mt-3'>Readyso - 2023</p>
            <img src="/images/p4.jpg" className='w-full h-full object-cover' alt="" />

          </div>
          <div data-scroll-speed='-0.001' data-scroll className='w-[16.5rem] rect5 aspect-square h-[16rem] bg-purple-600'>
            <img src="/images/p5.jpg" className='w-full h-full object-cover' alt="" />
            <p className='text-md font-semibold text-zinc-800/95 font-roboto tracking-tighter mt-3'>Fetcher - 2025</p>

          </div>
          {/* <div className='w-1/3 aspect-square h-2/3 bg-red-600'></div> */}
        </div>
        <div className='w-full h-2/3 flex justify-end gap-5 items-start'>
          <div data-scroll-speed='0.001' data-scroll className='w-[16.5rem] aspect-square rect6 h-[16rem]'>
            <img src="/images/p6.jpg" className='w-full h-full object-cover' alt="" />
            <p className='text-md font-semibold text-zinc-800/95 font-roboto tracking-tighter mt-3'>Fetcher - 2025</p>

          </div>
          <div data-scroll-speed='0.001' data-scroll className='w-[30.5rem] h-[22rem] aspect-square rect6 '>
            <img src="/images/p8.jpg" className='w-full h-full object-cover' alt="" />
            <p className='text-md font-semibold text-zinc-800/95 font-roboto tracking-tighter mt-3'>36studio - 2023</p>

          </div>
          {/* <div className='w-[16.5rem] aspect-square h-[16rem] bg-red-600'></div> */}
          {/* <div className='w-1/3 aspect-square h-2/3 bg-red-600'></div> */}
        </div>
        <div className='w-full h-2/3 flex justify-center gap-5 items-start'>
          <div data-scroll-speed='0.01' data-scroll className='w-1/2 aspect-square h-full rect7 bg-blue-600'>
            <img src="/images/p7.jpg" className='w-full h-full object-cover' alt="" />
            <p className='text-md font-semibold text-zinc-800/95 font-roboto tracking-tighter mt-3'>36studio - 2023</p>
            {/* <img src="/images/p8.jpg" className='w-full h-full object-cover' alt="" /> */}
          </div>
        </div>
        
    </div>
  )
}

export default MockupGallery