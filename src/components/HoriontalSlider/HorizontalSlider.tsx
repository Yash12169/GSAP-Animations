"use client";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
export default function HorizontalSlider() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const horizontalSlider = gsap.to(childRef.current, {
      width: "100%",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        anticipatePin: 1,
        scrub: 0.5,
        markers: true,
      },
    });

    return () => {
      horizontalSlider.kill();
    };
  }, []);
  return (
    <div
      className="bg-white w-screen flex justify-center items-center"
      ref={parentRef}
    >
      <div className="h-screen w-[0vw]  bg-black overflow-hidden" ref={childRef}>
        <div className="z-5 mix-blend-difference absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-center">
          <p className="z-10 text-[3rem] w-[80vw] text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            quae, illo neque odit enim deserunt omnis cum? Nemo voluptatem
            totam, doloribus sint autem quo nobis ullam facilis, eos praesentium
            harum.
          </p>
        </div>
      </div>
    </div>
  );
}
