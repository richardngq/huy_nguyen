'use client'
import { FC } from "react";
import { motion } from "framer-motion";

type TypeTransition = {
  children?: any
}

const Transition: FC<TypeTransition> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: `easeInOut`, duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
export default Transition;
