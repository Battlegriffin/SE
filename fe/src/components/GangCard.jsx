import React from "react";
import { motion } from "framer-motion";

const GangCard = ({ directionLeft }) => {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      class="lg:w-1/4 md:w-1/2 p-4 w-full border border-gray-100"
    >
      <a class="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          class="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </a>
      <div class="mt-4">
        <h3 class="text-white text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 class="text-white title-font text-lg font-medium">The Catalyzer</h2>
        <p class="mt-1 text-white">$16.00</p>
      </div>
    </motion.div>
  );
};

export default GangCard;
