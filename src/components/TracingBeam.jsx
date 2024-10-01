import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "../lib/utils";

export const TracingBeam = ({ children, className, isActive }) => {
  const ref = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [lineY, setLineY] = useState(0);
  const [targetY, setTargetY] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setSvgHeight(ref.current.offsetHeight);
      console.log("svgHeight:", svgHeight);
    }
  }, [children]);

  useEffect(() => {
    setTargetY(isActive ? svgHeight / 2 : 0);
    console.log("targetY:", targetY);
  }, [isActive, svgHeight]);

  const animatedLineY = useSpring(lineY, {
    to: targetY,
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
    >
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          animate={{
            opacity: isActive ? 1 : 0.5,
            scale: isActive ? 1.2 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center"
        >
          <motion.div className="h-2 w-2 rounded-full bg-emerald-500" />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
        >
          <motion.path
            d={`M 1 0 V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 0.5,
            }}
          />
          <motion.path
            d={`M 1 0 L 1 ${animatedLineY} L 10 ${animatedLineY}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1="0"
              y2={svgHeight}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div>{children}</div>
    </motion.div>
  );
};
