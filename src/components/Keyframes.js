import * as React from "react";
import { motion } from "framer-motion";

export const Keyframes = () => (
  <div className="keyframes">
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 360, 360, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        loop: Infinity,
        repeatDelay: 0,
      }}
    />
  </div>
);
