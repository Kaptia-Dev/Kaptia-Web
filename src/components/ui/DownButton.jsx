"use client";
import { motion } from "motion/react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

const DownButton = ({}) => {
  return (
    <motion.button
      className="rounded-full bg-kaptia-secondary-blue flex items-center justify-center absolute bottom-10 p-6 shadow cursor-pointer group hover:bg-kaptia-yellow transition-colors duration-300 z-10"
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      onClick={() =>
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      <ArrowDownIcon className="text-kaptia-yellow h-12 w-12 group-hover:text-kaptia-primary-blue transition-colors duration-300" />
    </motion.button>
  );
};

export default DownButton;
