import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const GsapTo = () => {
  const boxRef = useRef(null); // Create a ref

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
    });
  }, []); // Empty dependency array ensures it runs once

  return (
    <div ref={boxRef} className="bg-blue-500 h-[100px] w-[100px] flex items-center justify-center text-white font-bold">
      Gsap
    </div>
  );
};

export default GsapTo;
