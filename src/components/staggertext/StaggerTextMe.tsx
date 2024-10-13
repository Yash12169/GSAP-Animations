"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function StaggerTextMe() {
    const headerRef = useRef<HTMLHeadingElement | null>(null)
    useEffect(()=>{

        if(headerRef.current){
            const letters = headerRef.current.querySelectorAll("p");
            gsap.fromTo(letters,{y: 900},{
                y: 0,
                stagger: 0.2,
                duration: 2,
                delay: 0.75,
                ease: "power4.inOut",
                onComplete: ()=>{

                    gsap.to(letters,{
                        y: -900,
                        stagger: 0.2,
                        duration: 2,
                        delay: 0.75,
                        ease: "power4.inOut"
                    })
                }
            })
        }

    },[])
  return (
    <div className="bg-black h-screen w-screen">
      <div ref={headerRef} className="text-green-500 overflow-hidden relative flex text-[32vw] justify-center align-center">
        <p>r</p>
        <p>e</p>
        <p>v</p>
        <p>o</p>
        <p>c</p>
      </div>
    </div>
  );
}
