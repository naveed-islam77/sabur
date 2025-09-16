'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Statics from '../components/Statics';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        className="bg-[url('/home-7.jpg')] bg-left bg-no-repeat flex justify-center items-center flex-col text-center py-20 w-[1400px] max-w-full m-auto px-8"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1000px] text-xl md:text-[30px] font-light leading-normal text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          IN A FINANCIAL INDUSTRY PRIMARILY DRIVEN BY SALES TACTICS; SABUR
          PRIVATE WEALTH IS THE AUTHENTIC FIDUCIARY YOU CAN TRUST.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="my-10"
        >
          <Link
            className="px-8 py-3  rounded-full font-extralight hover:bg-my_yellow transition-all text-my_dark_blue bg-white"
            href="https://calendly.com/saburpwm/intro-fifteen-min-call"
            target="_blank"
            rel="noopener"
          >
            LET&apos;S TALK
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, z: -20 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg font-light  md:text-2x text-white max-w-[600px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          Financial {'"concierge"'} level Private Wealth Enhancement Services
          for Founders, Entrepreneurs & UHNW Families
        </motion.p>
      </div>

      <Statics />

      <div className=" my-20 bg-gradient-to-r from-my_dark_blue to-my_black  py-16 px-4 md:px-16">
        <div className="flex text-center justify-between flex-col md:flex-row items-center md:text-left w-[1400px] max-w-full m-auto gap-10 text-white">
          {' '}
          <motion.div className="">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-extralight mb-8"
            >
              Predict your Generational Wealth by Creating a 1000 Year Plan for
              Your Lineage
              <br /> Designed by you.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Design every aspect of your wealth and build the experience for
              your
              <br /> future generations today with the help of our independent
              Fiduciary
              <br /> Family Office designed to give you maximum control and
              flexibility.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <Link
                className="px-8 py-3 bg-white text-my_dark_blue rounded-full font-extralight hover:bg-my_yellow transition-all text-xs"
                href="https://calendly.com/saburpwm/intro-fifteen-min-call"
                target="_blank"
                rel="noopener"
              >
                LEARN WHY THE UHNW FAMILIES CHOOSE SABURPWM
              </Link>
            </motion.div>
          </motion.div>
          <ul className="space-y-4 font-light">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <Image src="/plus.png" alt="" width={10} height={10} />
              <p>Private Wealth Enhancement</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2"
            >
              <Image src="/plus.png" alt="" width={10} height={10} />
              <p>Liquidity & Exit Planning</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2"
            >
              <Image src="/plus.png" alt="" width={10} height={10} />
              <p> Advanced Tax Strategies for minimal tax exposure</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2"
            >
              <Image src="/plus.png" alt="" width={10} height={10} />
              <p>Access to Private Investments</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-2"
            >
              <Image src="/plus.png" alt="" width={10} height={10} />
              <p>Risk Management</p>
            </motion.li>
          </ul>
          <ul className="space-y-4 font-light">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <Image src="/plus.png" alt="" width={10} height={10} />
              <p> Private Banking & CFO Services</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2"
            >
              <Image src="/plus.png" alt="" width={10} height={10} />
              <p>Trust & Legacy Services</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2"
            >
              <Image src="/plus.png" alt="" width={10} height={10} />
              <p> Estate Planning & Philanthropy</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2"
            >
              <Image src="/plus.png" alt="" width={10} height={10} />
              <p>Family Governance & Education</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-2"
            >
              <Image src="/plus.png" alt="" width={10} height={10} />
              <p>Lifestyle & Wellness</p>
            </motion.li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center flex-col gap-8 my-20 px-4 md:px-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className="text-[44px] font-extralight"
        >
          Multi-Family Office
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className="text-xl mb-4"
        >
          Tailored to your unique wealth needs.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-4 w-[1400px] max-w-full m-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-100 p-6 flex items-center"
          >
            <p>ULTRA-HIGH-NET-WORTH & MULTI-GEN FAMILIES</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-100 p-6 flex items-center"
          >
            <p>CEO FOUNDERS & ENTREPRENEURS</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-100 p-6 flex items-center"
          >
            <p>PRE-LIQUIDITY & NEXT-GEN INNOVATORS</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-100 p-6 flex items-center"
          >
            <p>PRIVATE EQUITY & VENTURE CAPITAL PARTNERS</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center my-10 md:my-20"
        >
          <Link
            className="px-8 py-3 bg-my_dark_blue text-white rounded-full font-extralight hover:bg-my_yellow transition-all"
            href="/family-office"
          >
            EXPLORE FAMILY OFFICE
          </Link>
        </motion.div>
      </div>

      <div className="px-4">
        {' '}
        <div className="h-[300px] bg-gradient-to-r from-my_dark_blue to-my_black flex justify-center items-center flex-col text-white my-20 w-[1400px] max-w-full  m-auto gap-6 px-4 md:px-16">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className="text-3xl  md:text-[44px] text-center font-extralight leading-normal"
          >
            Learn More About Exit Planning & Selling Your Business
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
            className=""
          >
            <Link
              className="px-8 bg-white rounded-full py-3 text-my_dark_blue mt-8 hover:bg-gray-200 transition-all"
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              START HERE
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="my-20 flex flex-col md:flex-row justify-between gap-28 w-[1400px] max-w-full px-4 md:px-16 m-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className="w-full md:w-1/2  text-center"
        >
          <h3 className="text-[44px] font-extralight mb-8">
            Private Wealth Enhancement
          </h3>
          <p className="leading-loose">
            F.I.R.E.- based planning, tax-efficient portfolios, lawsuit
            prevention strategies, risk management, and custom solutions.
            Authentic Fiduciary Standards so your interests come first.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className="w-full md:w-1/2 text-center"
        >
          <h3 className="text-[44px] font-extralight mb-8">
            Private Investment <br /> Access
          </h3>
          <p className="leading-loose">
            Sourcing opportunities not typically available to individual
            investors. Discover an ecosystem of private market opportunities.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between my-20 gap-8 w-[1400px] max-w-full m-auto px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className="space-y-12 mt-8"
        >
          <h4 className="text-4xl font-extralight text-center md:text-left">
            Founded on <br /> Transparency
          </h4>
          <div className="flex justify-center">
            <Link
              className="text-white px-8 py-3 font-extralight bg-my_dark_blue rounded-full text-lg hover:bg-my_yellow transition-all"
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              START NOW
            </Link>
          </div>
        </motion.div>

        <Link target="_blank" href="/Sabur PWM.pdf">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col justify-center items-center gap-4 border-[1.5px] border-my_black pt-8 pb-10 px-4 text-center hover:shadow-2xl transition-shadow"
          >
            <div className="border-[2px] border-my_yellow rounded-full w-16 h-16 flex justify-center items-center text-my_yellow text-4xl font-bold ">
              1
            </div>
            <h5 className="text-center">
              AUTHENTIC FIDUCIARY <br />
              STANDARDS
            </h5>
            <p>Your interests always come first.</p>
            <div className="flex gap-2 items-center">
              <p>SEE OUR STANDARDS </p>
              <Image src="/right-arrow.png" alt="" width={10} height={10} />
            </div>
          </motion.div>
        </Link>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col justify-center items-center gap-4 border-[1.5px] border-my_black pt-8 pb-10 px-4 text-center"
        >
          <div className="border-[2px] border-my_yellow rounded-full w-16 h-16 flex justify-center items-center text-my_yellow text-4xl font-bold ">
            2
          </div>
          <h5 className="text-center">
            TOTAL <br />
            ACCOUNTABILITY
          </h5>
          <p>
            Independent firm adhering to <br />
            Fiduciary regulations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col justify-center items-center gap-4 border-[1.5px] border-my_black pt-8 pb-10 px-4 text-center"
        >
          <div className="border-[2px] border-my_yellow rounded-full w-16 h-16 flex justify-center items-center text-my_yellow text-4xl font-bold ">
            3
          </div>
          <h5 className="text-center">
            TRANSPARENT <br />
            FEES-BASE
          </h5>
          <p>
            Private investment firm with no <br /> hidden costs or fees.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between my-20  w-[1400px] max-w-full m-auto  items-center px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between w-full items-center"
        >
          <h3 className="text-3xl md:text-5xl text-center md:text-left mb-8 md:mb-0 font-extralight leading-snug">
            Advanced.
            <br /> Objective. <br /> Practical.
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 justify-items-start">
            <div className=" w-full flex justify-center items-center">
              <Link
                target="_blank"
                href="https://apnews.com/press-release/kisspr/business-taxes-kisspr-cd157f7ca61228a37c06690b80e0d3ed"
              >
                <Image
                  src={'/brands/apnews.png'}
                  alt="brand icon"
                  width={100}
                  height={250}
                />
              </Link>
            </div>
            <div className=" w-full flex justify-center items-center">
              {' '}
              <Link
                target="_blank"
                href="https://www.bloomberg.com/press-releases/2023-03-16/sabur-private-wealth-announces-income-and-capital-gains-tax-mitigation-planning-for-tax-year-2022"
              >
                <Image
                  src={'/brands/bloomberg.png'}
                  alt="brand icon"
                  width={150}
                  height={250}
                />
              </Link>
            </div>
            <div className=" w-full flex justify-center items-center">
              <Link
                target="_blank"
                href="https://markets.businessinsider.com/news/stocks/sabur-private-wealth-announces-income-and-capital-gains-tax-mitigation-planning-for-tax-year-2022-1032173902"
              >
                <Image
                  src={'/brands/insider.png'}
                  alt="brand icon"
                  width={150}
                  height={250}
                />
              </Link>
            </div>
            <div className=" w-full flex justify-center items-center">
              {' '}
              <Link
                target="_blank"
                href="https://www.marketwatch.com/press-release/being-tax-savvy-can-help-investors-increase-yield-by-up-to-50-2023-04-11?mod=search_headline"
              >
                <Image
                  src={'/brands/market.png'}
                  alt="brand icon"
                  width={200}
                  height={250}
                />
              </Link>
            </div>
            <div className=" w-full flex justify-center items-center">
              <Link
                target="_blank"
                href="https://timebusinessnews.com/being-tax-savvy-can-help-investors-increase-yield-by-up-to-50/"
              >
                <Image
                  src={'/brands/time.jpg'}
                  alt="brand icon"
                  width={200}
                  height={250}
                />
              </Link>
            </div>
            <div className=" w-full flex justify-center items-center">
              <Link
                target="_blank"
                href="https://finance.yahoo.com/news/sabur-private-wealth-announces-income-183700559.html?.tsrc=fin-srch"
              >
                <Image
                  src={'/brands/yahoo.png'}
                  alt="brand icon"
                  width={150}
                  height={250}
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
