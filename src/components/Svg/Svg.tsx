"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Svg() {
  const svgRef = useRef<SVGSVGElement>(null);
  const path = "M 50 500 Q 300 500 1900 500";

  useEffect(() => {
    const svgElement = svgRef.current;
    if (svgElement) {
      const pathElement = svgElement.querySelector("path");

      const handleMouseEnter = (event: MouseEvent) => {
        if (pathElement) {
          gsap.to(pathElement, {
            attr: { d: `M 50 500 Q ${event.clientX} ${event.clientY} 1900 500` },
          });
        }
      };

      svgElement.addEventListener("mousemove", handleMouseEnter);
      return () => {
        svgElement.removeEventListener("mousemove", handleMouseEnter);
      };
    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <svg
        ref={svgRef}
        width={"800"}
        height={"200"}
        className="bg-emerald-700 w-screen h-screen flex justify-center items-center"
      >
        <path d={path} stroke="white" fill="transparent" />
      </svg>
    </div>
  );
}
