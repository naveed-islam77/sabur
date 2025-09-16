'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Newsletter from '../../components/Newsletter';

export default function CressetInsights() {
  const [isOpen, setIsOpen] = useState(false);

  
  function handleNewsletter() {
    setIsOpen(false);
  }

  return (
    <main className=" flex min-h-screen flex-col px-6 w-[1400px] max-w-full m-auto">
      {isOpen && <Newsletter handleNewsletter={handleNewsletter} />}

      <section className="text-right bg-transparency relative py-12 pr-10 text-white flex justify-center items-center font-extralight">
        <div className="absolute inset-0">
          <Image
            src="/rankings-and-awards/Test_Header.jpg"
            alt="background image"
            fill
          />
        </div>

        <div className=" relative z-10 mt-8 pb-8 space-y-8 w-full">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-extralight mt-10"
          >
            Sabur PWM Insights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 z-10 text-xl md:text-3xl"
          >
            Thought Leadership from the top brilliant financial minds across the
            globe¹
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <Link
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
                <p className=" text-white font-bold transition-all group-active:scale-90">
                  LET&apos;S TALK
                </p>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      <div className="text-center font-extralight text-xl md:text-3xl my-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore:{' '}
          <Link className=" text-my_yellow" href={''}>
            Insights
          </Link>{' '}
          |
          <Link className=" text-my_yellow" href={''}>
            In The News
          </Link>{' '}
          |
          <Link className=" text-my_yellow" href={''}>
            Market Updates
          </Link>{' '}
          |{' '}
          <Link className=" text-my_yellow" href={''}>
            Entrepreneurs
          </Link>{' '}
        </motion.div>
      </div>

      <section className="text-right bg-transparency mb-24 relative py-12 pr-10 text-white flex justify-center items-center font-extralight">
        <div className="absolute inset-0">
          <Image
            src="/rankings-and-awards/Test_Header.jpg"
            alt="background image"
            fill
          />
        </div>

        <div className=" relative z-10 mt-8 pb-8 space-y-8 w-full">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-extralight mt-10"
          >
            Receive Weekly Market Updates
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 z-10 text-xl md:text-3xl"
          >
            From Chief Investment Officer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button"
            >
              <p className=" text-white font-bold transition-all group-active:scale-90">
                SING UP FOR MARKET UPDATES
              </p>
            </button>
          </motion.div>
        </div>
      </section>
      {/* to Here */}
    </main>
  );
}
