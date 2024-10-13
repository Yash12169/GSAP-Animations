"use client";
import React, {useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import './Overlay.css'
gsap.registerPlugin(CustomEase)
CustomEase.create(
    "hop",
    "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1"
);

function Hero() {
    const heroRef = useRef<HTMLHeadingElement | null>(null)
    const overlayRef = useRef<HTMLHeadingElement | null>(null);


    useEffect(() => {
      if(heroRef.current && overlayRef.current){
        gsap.to(heroRef.current,{
          clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
          duration: 2,
          ease: "hop",
          onStart: ()=>{
              gsap.to(heroRef.current, {
                  transform: "translate(-50%, -50%)  scale(1)",
                  duration: 2.25,
                  ease: "power3.inOut",
                  delay: 0.25,
              });
              // gsap.to(overlayRef.current, {
              //     clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              //     duration: 2,
              //     delay: 0.5,
              //     ease: "hop",
              // });
          },
      });
      }


    }, []);
    return (
        <div className="container"> 
            <section className="hero absolute top-[50%] left-[50%] w-screen h-screen bg-orange-600 z-[1] will-change-transform" ref={heroRef}>
                {/* <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-black z-[3]" ref={overlayRef}></div> */}
            </section>
        </div>
    );
}

export default Hero;