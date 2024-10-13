"use client";
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase)
CustomEase.create(
    "hop",
    "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1"
);
export default function OverlayMe() {
    const heroRef = useRef<HTMLHeadingElement | null>(null)
    const overlayRef = useRef<HTMLHeadingElement | null>(null)

    useEffect(()=>{

        if(heroRef.current){
            gsap.to(heroRef.current,{
                clipPath: "polygon(0 100%, 100% 100%,100% 0%, 0% 0%)",
                duration: 2,
                ease: "hop",
                onStart: ()=>{
                    gsap.to(heroRef.current,{
                        transform: "translate(-50%, -50%) scale(1)",
                        duration: 2.25,
                        ease: "power3.inOut",
                        delay: 0.25,
                    });
                }
            })
        }

    },[])
  return (
    <div>
        <div className='w-screen h-screen bg-lime-700 z-[1] absolute top-[50%] left-[50%] will-change-transform' ref={heroRef}>

        </div>
    </div>
  )
}
