import React from "react";
import { motion } from "framer-motion";
import GangCard from "./GangCard";
// rafce

const AllGang = () => {
  return (
    <div>
      <section class="text-gray-400 bg-c2">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <GangCard directionLeft={true} />
            <GangCard directionLeft={true} />
            <GangCard directionLeft={true} />
            <GangCard directionLeft={true} />
            <GangCard directionLeft={false} />
            <GangCard directionLeft={false} />
            <GangCard directionLeft={false} />
            <GangCard directionLeft={false} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllGang;
