"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const UpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-kaptia-secondary-blue p-4 shadow-lg cursor-pointer group hover:bg-kaptia-yellow transition-colors duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver arriba"
        >
          <ArrowUpIcon className="h-6 w-6 text-kaptia-yellow group-hover:text-kaptia-primary-blue transition-colors duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default UpButton;
