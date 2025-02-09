import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const GsapFromTo = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      { x: -100, opacity: 0 }, // Starting state
      { x: 100, opacity: 1, duration: 2, repeat: -1, yoyo: true } // Ending state
    );
  }, [], boxRef); // Pass ref as the scope

  return (
    <div
      ref={boxRef}
      className="bg-blue-500 h-[100px] w-[100px] flex items-center justify-center text-white font-bold"
    >
      GsapFromTo
    </div>
  );
};

export default GsapFromTo;
