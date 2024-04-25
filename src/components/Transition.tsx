'use client'
import { FC } from "react";
import { motion } from "framer-motion";

type TypeTransition = {
  children?: any
}

const Transition: FC<TypeTransition> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: `easeInOut`, duration: .8 }}
    >
      {children}
    </motion.div>
  );
};
export default Transition;
