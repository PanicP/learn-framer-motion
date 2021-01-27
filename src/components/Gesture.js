import * as React from "react";
import { motion } from "framer-motion";

export const Gesture = () => (
  <div className="gesture">
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />;
  </div>
);
