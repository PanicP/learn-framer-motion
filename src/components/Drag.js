import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Drag = () => {
  const constraintsRef = useRef(null);

  return <div className="drag">
    <motion.div className="drag-area" ref={constraintsRef} />
    <motion.div drag dragConstraints={constraintsRef} />
  </div>
}
