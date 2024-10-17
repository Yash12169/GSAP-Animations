"use client"
import { useEffect, useRef } from "react"
import {gsap } from 'gsap'
export default function SvgMe() {
    const path = "M 50 200 Q 300 200 1900 200";
    const pathRef = useRef(null)
    const svgRef = useRef<SVGSVGElement>(null);
    useEffect(()=>{ 
        const svgElement = svgRef.current;
       if(svgElement){
        const handleMoveMouse=(event:MouseEvent)=>{
            gsap.to(pathRef.current,{
                duration: 0.2,
                ease: "power3.out",
                attr:{d: `M 50 200 Q ${event.clientX} ${event.clientY} 1900 200`},
            })
        }
        const handleMouseLeave =()=>{
            gsap.to(pathRef.current,{
                attr:{d:path},
                duration: 1.5,
                ease: "elastic.out(1,0.2)",
                
            })
        }
        svgRef.current.addEventListener("mouseleave",handleMouseLeave);
        svgRef.current.addEventListener("mousemove",handleMoveMouse);
        return () => {
            svgElement.removeEventListener("mousemove",handleMoveMouse);
            svgElement.removeEventListener("mouseleave", handleMouseLeave);
        }
       }
    },[])
  return (
    <div className="flex bg-black w-screen h-screen">
        <svg ref={svgRef}  width={"800"} className="h-[40vh] relative  w-screen flex justify-center items-center">
            <path ref={pathRef} d={path} stroke="white" fill="transparent"/>
        </svg>
    </div>
  )
}
