'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import Statics from '@/components/Statics';
export default function CressetCatalyst() {
  const text = [
    'How can I join a vetted community of other innovative and successful entrepreneurs?',

    'How can I ensure that my tax situation is optimized when I have my liquidity event?',
    'How can I streamline my personal and professional lives to better manage my time?',
    'What are the proven best practices that can reduce risk and increase personal and business success?',
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText === 3 ? 0 : prevText + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-my_yellow"></h1>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center mt-32"
      >
        <h2 className=" text-my_dark_blue md:text-6xl text-4xl">
          The Intuitive
          <br />
          Family Office
        </h2>
        <p className=" md:text-3xl text-2xl mt-4 mb-8 font-extralight">
          Advanced strategy support for <br /> <span className=''>pre-liquidity </span>
          <AnimatedText
            text={[
              'Executives',
              'Entrepreneurs',
              'Business Owners',
              'Founders',
            ]}
            speed={200}
          />
        </p>

        <Link href={''}>
          <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
            <p className=" text-white transition-all group-active:scale-90 font-normal">
              TALK TO THE FOUNDER
            </p>
          </button>
        </Link>
      </motion.div>

      <Statics />

      <div className="bg-slate-100 py-10 my-16 flex justify-center items-center">
        <div className="w-[1400px] max-w-full grid grid-cols-1 md:grid-cols-2 gap-10 mx-8 md:mx-16">
          <div className="">
            <div className="">
              <p className="text-xl font-light">
                We advise entrepreneurs, founders, venture-backed and PE-backed
                executives, closely-held business owners navigating a business
                sale, and early team members at high growth tech companies.
              </p>

              <div className="mt-10">
                <Link
                  className="px-8 py-3  rounded-full font-extralight hover:bg-my_yellow transition-all text-white bg-my_dark_blue"
                  href="https://calendly.com/saburpwm/intro-fifteen-min-call"
                  target="_blank"
                  rel="noopener"
                >
                  LET&apos;S TALK
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-my_dark_blue text-white p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentText}
                className="text-xl text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }} // Ad
              >
                {text[currentText]}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center items-center mt-8 gap-2">
              <div
                onClick={() => setCurrentText(0)}
                className={`${
                  currentText === 0 ? 'bg-blue-600' : 'bg-blue-400'
                } w-2 h-2 rounded-full  cursor-pointer`}
              ></div>
              <div
                onClick={() => setCurrentText(1)}
                className={`${
                  currentText === 1 ? 'bg-blue-600' : 'bg-blue-400'
                } w-2 h-2 rounded-full  cursor-pointer`}
              ></div>
              <div
                onClick={() => setCurrentText(2)}
                className={`${
                  currentText === 2 ? 'bg-blue-600' : 'bg-blue-400'
                } w-2 h-2 rounded-full  cursor-pointer`}
              ></div>
              <div
                onClick={() => setCurrentText(3)}
                className={`${
                  currentText === 3 ? 'bg-blue-600' : 'bg-blue-400'
                } w-2 h-2 rounded-full  cursor-pointer`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-my_dark_blue w-full text-white py-20 px-8">
        <div className="m-auto text-center">
          <h2 className="text-3xl">The Sabur PWM Solution</h2>
          <p className="text-lg mt-4">
            Centralize your financial world to focus on what matters to you
            most.
          </p>

          <div className="flex justify-center mt-14">
            <Image
              className="hidden md:block"
              src={'/new/52.png'}
              alt=""
              width={800}
              height={100}
            />
            <Image
              className="md:hidden"
              src={'/new/51.png'}
              alt=""
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="text-center m-auto w-[1400px] max-w-full px-8 md:px-16 py-10 flex flex-col gap-4 my-10 items-center">
        <Image src={'/icons/Picture11.png'} alt="" width={100} height={10} />
        <h2 className="text-4xl font-extralightƒ">Services We Offer</h2>
        <p>
          Complete solutions advanced strategies to synergize liquidity
          planning, tax, estate, and wealth advisory.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
          <div className="px-4 py-16 bg-gray-100 flex flex-col items-center justify-center gap-6 shadow-2xl border-[2px]">
            <h3 className="text-3xl">
              Tax <br /> Strategy
            </h3>
            <p>
              Proactive Solutions to <br /> Minimize Tax Exposure
            </p>
          </div>
          <div className="px-4 py-16 bg-gray-100 flex flex-col items-center justify-center gap-6 shadow-2xl border-[2px]">
            <h3 className="text-3xl">
              Estate <br /> Planning
            </h3>
            <p>
              Pre and Post Transaction <br /> Strategies
            </p>
          </div>
          <div className="px-4 py-16 bg-gray-100 flex flex-col items-center justify-center gap-6 shadow-2xl border-[2px]">
            <h3 className="text-3xl">
              Lifestyle-Based <br /> Planning
            </h3>
            <p>
              Financial Independence <br /> Modeling and Portfolios
            </p>
          </div>

          <div className="px-4 py-16 bg-gray-100 flex flex-col items-center justify-center gap-6 shadow-2xl border-[2px]">
            <h3 className="text-3xl">
              Business Sale <br /> Advisory
            </h3>
            <p>Structuring to Prepare for Life After the Transaction</p>
          </div>
          <div className="px-4 py-16 bg-gray-100 flex flex-col items-center justify-center gap-6 shadow-2xl border-[2px]">
            <h3 className="text-3xl">
              Credit & <br /> Lending
            </h3>
            <p>Pre-Negotiated Rates with Banking Institutions</p>
          </div>
          <div className="px-4 py-16 bg-gray-100 flex flex-col items-center justify-center gap-6 shadow-2xl border-[2px]">
            <h3 className="text-3xl">
              Private <br /> Investments
            </h3>
            <p>Access to Direct and Curated Opportunities</p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            className="px-8 py-3  rounded-full font-extralight hover:bg-my_yellow transition-all text-white bg-my_dark_blue"
            href="https://calendly.com/saburpwm/intro-fifteen-min-call"
            target="_blank"
            rel="noopener"
          >
            LET&apos;S TALK
          </Link>
        </div>

        <div className="py-24">
          <div className="border-[1px] border-my_yellow p-8 md:p-24 relative flex justify-center items-start flex-col w-full md:w-[70%] m-auto max-w-[1000px] font-extralight gap-6">
            <p className="text-lg md:text-xl md:mr-16">
              Many early achievers when selling their businesses get turned down
              by well known Wall Street firms because they do not meet their
              minimum. At Sabur PWM our relationships offer several platforms
              that serve as the catalyst to support founders earlier in their
              journeys—working to help achieve milestones and maximize liquidity
              events.
            </p>
            <h3 className="text-my_yellow font-normal text-lg">
              Expert Insights The SaburPWM Network
            </h3>
            <p>
              Join a community of entrepreneurs for insights and best practices
              for selling a business.
            </p>

            <div className="text-center absolute -right-[100px] hidden md:block">
              <Image
                className="mt-[5px]"
                src="/Picture1.png"
                alt=""
                width={205}
                height={12}
              />
              <b>Zak Shaik</b>
              <p>Founder and Advisor</p>
            </div>
          </div>
        </div>

        <div className="">
          <b className="underline text-my_yellow">view award disclosures</b>
          <div className="mt-10">
            <Link
              className="px-8 py-3  rounded-full font-extralight hover:bg-my_yellow transition-all text-white bg-my_dark_blue"
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              TALK TO OUR FOUNDER
            </Link>
          </div>
        </div>

        <div className="my-16 flex flex-col justify-center items-center gap-8">
          <div className="mt-10">
            <Link
              className="px-8 py-3  rounded-full font-extralight hover:bg-my_yellow transition-all text-white bg-my_dark_blue"
              href="/"
            >
              VISIT SABUR PWM HOME PAGE
            </Link>
          </div>
          <div className="">
            {' '}
            <Image
              className="mt-[5px]"
              src="/main-logo.png"
              alt=""
              width={205}
              height={12}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
