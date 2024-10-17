"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { transform } from "next/dist/build/swc";
export default function NavMenu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const menuBar1 = "M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z ";
  const menuBar2 = "M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z ";
  const menuBar3 = "M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z ";
  const finalPath =
    "M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z";
  const [openMenu, setOpenMenu] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const handleAnimation = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (openMenu) {
      gsap.to(pathRef.current, {
        attr: { d: finalPath },
        duration: 1,
      });
    }
    if (!openMenu) {
      gsap.to(pathRef.current, {
        attr: { d: menuBar1 + menuBar2 + menuBar3 },
        duration: 1,
      });
    }
  }, [openMenu]);

  useEffect(() => {
    const menu = menuRef.current;

    const tl = gsap.timeline();

    if (openMenu && textRef.current) {
      tl.to(menu, {
        height: "100vh",
        width: "100vw",
        duration: 1,
      });
      tl.to(textRef.current.querySelectorAll("div"),{
        x:150,
        opacity:1,
        duration: 1,
        stagger:0.3,
      })
    }
    if (!openMenu && textRef.current) {
        tl.to(textRef.current.querySelectorAll("div"),{
            x:300,
            opacity:0,
            duration: 1,
            stagger:0.3,
          })
      tl.to(menu, {
        height: "0vh",
        width: "0vw",
        duration: 1,
      });
    }
  }, [openMenu]);

  return (
    <nav className="flex justify-between p-[3rem] fixed top-0 left-0 w-screen ">
      <div className="text-white text-[1.5rem]">Yash Jewalkar</div>
      <div
        ref={menuRef}
        className="w-[0vw] flex justify-center items-center flex-col text-[3rem] text-white gap-[1rem] h-[0vh] absolute bg-white top-0 right-0 backdrop:blur-[60px] bg-opacity-[0.4]"
      >
        <div className="text-center opacity-0" ref={textRef}>
          <div>About</div>
          <div>Home</div>
          <div>Contact</div>
          <div>Services</div>
        </div>
      </div>
      <div onClick={handleAnimation} className="z-[1000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
          fill="white"
        >
          <path ref={pathRef} d={menuBar1 + menuBar2 + menuBar3}></path>
        </svg>
      </div>
    </nav>
  );
}
