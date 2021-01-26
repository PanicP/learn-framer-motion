import { motion } from "framer-motion";

export const BasicAnimate = () => (
  <div className="basic-animate">
    <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} />
  </div>
);
