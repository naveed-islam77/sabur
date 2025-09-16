import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const Statics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="my-20 w-[1400px] max-w-full m-auto"
    >
      <div className="flex flex-col md:flex-row justify-start text-center mb-10 gap-10 px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center flex-col items-center gap-4"
        >
          <p className="text-4xl md:text-6xl font-light">$375 Mil+</p>
          <hr className="w-10 h-[2px] bg-black" />
          <p className="text-xl md:text-2xl font-light">
            Income and Capital Gains tax savings identified in 2023
            <span className="text-my_dark_blue"> </span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center flex-col items-center gap-4"
        >
          <p className="text-4xl md:text-6xl font-light">2023</p>
          <hr className="w-10 h-[2px] bg-black" />
          <p className="text-xl md:text-2xl font-light">
            Five Star Wealth Manager
            {/* <span className="text-my_dark_blue">¹</span> */}
          </p>
          <p className="text-sm  font-light">
            Rankings developed by Five Star Wealth Mgr’ magazine using
            proprietary algorithm. Awarded 6/01/22 for data as of 1/01/22. Sabur
            PWM paid no application fee to participate.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center flex-col items-center gap-4"
        >
          <p className="text-4xl md:text-6xl font-light">10</p>
          <hr className="w-10 h-[2px] bg-black" />
          <p className="text-xl md:text-2xl font-light">
            Authentic Fiduciary Standards
            <span className="text-my_dark_blue">
              {" "}
              <Link target="_blank" href="/Sabur PWM.pdf">
                {" "}
                ¹
              </Link>
            </span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Statics;
