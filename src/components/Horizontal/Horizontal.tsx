"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Horizontal() {
  const sectionRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const pin = gsap.to(
      sectionRef.current,
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: parentRef.current,
          markers:true,
          start: "top top",
          end: "+=100%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={parentRef}>
        <div ref={sectionRef} className="w-[200vw] h-screen flex items-center bg-blue-300">
          <h1 className="w-screen text-center text-[30vw] font-bold">Experiences</h1>
        </div>
      </div>
    </section>
  );
}