"use client";
import { gsap } from "gsap";
import { useEffect, useState, useRef } from "react";
export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);
  const cursor3Ref = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursor2 = cursor2Ref.current;
    const cursor3 = cursor3Ref.current;
    // const ease = "back.inOut"
    // const ease = "back.in"
    // const ease = "circ.in"
    // const ease = "expo.in"
    const ease = "none";
    // const ease = "steps(12)"
    if (cursor) {
      const follow = (event: MouseEvent) => {
         
        gsap.to(cursor3,{
          x:event.clientX,
          y:event.clientY,
          duration: 0.3,
          ease: ease
        })
        gsap.to(cursor2,{
          x:event.clientX,
          y:event.clientY,
          duration: 0.6,
          ease: ease
        })
        gsap.to(cursor,{
          x:event.clientX,
          y:event.clientY,
          duration: 0.9,
          ease: ease
        })

      };
      document.addEventListener("mousemove", follow);
    }
  }, []);

  return (
    <div ref = {parentRef} className="flex">
      <div
        ref={cursorRef}
        style={{boxShadow:"0 0 15px red" }}
        className="fixed bg-red-500 bg-opacity-[0.3]   h-[30px] w-[30px] rounded-full top-0 left-0 z-[1000]  mix-blend-difference"
      ></div>
      <div
        ref={cursor2Ref}
        style={{boxShadow:"0 0 15px green" }}
        className="fixed bg-green-500 bg-opacity-[0.3] h-[25px] w-[25px] rounded-full top-0 left-0 z-[2000]  "
      ></div>
      <div
        ref={cursor3Ref}
        style={{boxShadow:"0 0 15px blue"  }}
        className="fixed bg-blue-500 bg-opacity-[0.3] h-[20px] w-[20px] rounded-full top-0 left-0 z-[3000] "
      ></div>
    </div>
  );
}
