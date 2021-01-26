import { motion } from "framer-motion"

export const BasicAnimate = () => (
  <motion.div
    animate={{ scale: 2 }}
    transition={{ duration: 0.5 }}
  />
)