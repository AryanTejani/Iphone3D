import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTimeline = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(boxRef.current, { x: 100, duration: 1 }) // Move right
      .to(boxRef.current, { y: 100, duration: 1 }) // Move down
      .to(boxRef.current, { x: 0, duration: 1 }) // Move left
      .to(boxRef.current, { y: 0, duration: 1 }); // Move up
  }, []);

  return (
    <div
      ref={boxRef}
      className="bg-blue-500 h-[100px] w-[100px] flex items-center justify-center text-white font-bold"
    >
      GSAP Timeline
    </div>
  );
};

export default GsapTimeline;
