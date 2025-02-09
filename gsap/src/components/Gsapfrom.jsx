import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const GsapFrom = () => {
  const boxRef = useRef(null); // Create a ref

  useGSAP(() => {
    gsap.from(boxRef.current, {
      rotation: 360,
      x: 250,
      duration: 1, // Add duration to control animation speed
      repeat: -1, // Infinite loop
      yoyo: true, // Works with repeat
    });
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div
      ref={boxRef}
      className="bg-blue-500 h-[100px] w-[100px] flex items-center justify-center text-white font-bold"
    >
      GSAP From
    </div>
  );
};

export default GsapFrom;
