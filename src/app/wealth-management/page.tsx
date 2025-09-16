"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Statics from "@/components/Statics";
export default function WealthManagement() {
  return (
    <main className="flex min-h-screen flex-col px-8 md:px-16">
      <div className="bg-[url('/images.jpg')] bg-center bg-cover h-[350px] flex justify-end items-center  px-10">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white flex justify-center md:justify-end flex-col items-center md:items-end gap-6"
        >
          <h2 className="text-xl md:text-[60px] font-light leading-snug">
            PRIVATE WEALTH MANAGEMENT
          </h2>
          <p className="text-lg md:text-xl text-center">
            Independent, Objective, Practical advice Genuine Fiduciary
            Standards.
          </p>
          <div className="mt-6">
            <Link
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              <button className="group mt-4 relative overflow-hidden rounded-full bg-white px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-gray-400 active:shadow-md active:ring-2 animated-button">
                <p className=" text-my_dark_blue font-bold transition-all group-active:scale-90">
                  SPEAK TO THE FOUNDER
                </p>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="px-4 py-24 flex flex-col md:flex-row justify-between items-center gap-40 w-[1400px] max-w-full m-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="leading-normal  text-3xl text-[44px] font-light">
            Practical and Tax efficient Investment Planning
          </h2>

          <p className="mb-12 mt-8">
            Your personal lifestyle goals for today and well into ten
            generations of your descendant’s can be designed today to predict
            and avoid systemic market risks in your customized investment
            portfolios utilizing passive and active solutions by leveraging our
            relationship based access to public and private markets.
          </p>

          <div className="">
            <Link
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
                <p className=" text-white font-bold transition-all group-active:scale-90">
                  MAKE A MOVE
                </p>
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <li className="flex items-start  gap-2">
            <Image
              className="mt-[5px]"
              src="/plus.png"
              alt=""
              width={12}
              height={12}
            />
            <p className="font-extralight">
              <span className="font-medium">
                Planning for capital needs across every stage of life:
              </span>{" "}
              Seeks to ensure financial independence. Maintain your lifestyle,
              family expenses, and liquidity reserve.
            </p>
          </li>
          <li className="flex items-start  gap-2">
            <Image
              className="mt-[5px]"
              src="/plus.png"
              alt=""
              width={12}
              height={12}
            />
            <p className="font-extralight">
              <span className="font-medium">
                Building and preserving financial surplus for future
                generations:
              </span>{" "}
              Designed for lifestyle enhancement, discretionary spending, wealth
              transfer, community and philanthropy.
            </p>
          </li>
          <li className="flex items-start  gap-2">
            <Image
              className="mt-[5px]"
              src="/plus.png"
              alt=""
              width={12}
              height={12}
            />
            <p className="font-extralight">
              <span className="font-medium">Your Next Venture:</span> Focused on
              unique investments, exponential and disruptive technologies, and
              business growth.
            </p>
          </li>
        </motion.ul>
      </div>
      <Statics />
      <div className="py-24 w-[1400px] max-w-full m-auto">
        <hr className="max-w-[1000px] m-auto" />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl md:text-[34px] font-light my-8"
        >
          Tax efficient Investment Portfolios that also comply with your
          religious beliefs.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-base md:text-[22px] font-light"
        >
          Strategies for growth, risk management, and market volatility.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-between px-4 mt-10">
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mb-6"
          >
            <p className="text-[22px]">Public Markets</p>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Tax-efficient strategies</p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">
                Passive & active investment solutions
              </p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Curated asset mix</p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">
                Diversified holdings to reduce expected risk
              </p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Lower costs</p>
            </li>
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-[22px]">Private Markets</p>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">
                Institutional-quality opportunities
              </p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">
                Managed & direct investment solutions
              </p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Illiquidity premium capturing</p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Attractive yield opportunities</p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Risk mitigators</p>
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="https://calendly.com/saburpwm/intro-fifteen-min-call"
            target="_blank"
            rel="noopener"
          >
            <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
              <p className=" text-white font-bold transition-all group-active:scale-90">
                SCHEDULE STRATEGY SESSION
              </p>
            </button>
          </Link>
        </motion.div>
      </div>
      <div className="mx-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-l from-my_dark_blue to-my_black h-[350px] px-10 w-[1400px] max-w-full m-auto flex justify-center flex-col items-center text-white gap-8"
        >
          <h2 className="text-[44px] font-extralight">
            Receive Weekly Market Updates
          </h2>
          <p className="text-[22px] font-extralight">
            From curated insights of the top financial minds
          </p>

          <Link
            href="https://calendly.com/saburpwm/intro-fifteen-min-call"
            target="_blank"
            rel="noopener"
          >
            <button className="group mt-4 relative overflow-hidden rounded-full bg-white px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-gray-400 active:shadow-md active:ring-2 animated-button">
              <p className=" text-my_dark_blue font-bold transition-all group-active:scale-90">
                SIGN UP FOR MARKET UPDATES
              </p>
            </button>
          </Link>
        </motion.div>
      </div>
      <div className="px-4 flex flex-col md:flex-row justify-between items-center py-24 gap-10 w-[1400px] max-w-full m-auto">
        <div className="font-extralight w-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-[34px]"
          >
            As a Genuine Fiduciary We Place Your Interests First
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="my-6 font-light"
          >
            Authentic Fiduciary Standards offer, for your protection.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <li className="list-decimal list-inside">
              Embrace the legal fiduciary obligation to place Clients’ interests
              first
            </li>
            <li className="list-decimal list-inside">
              Deliver complete solutions planning
            </li>
            <li className="list-decimal list-inside">
              Provide fee based advice
            </li>
            <li className="list-decimal list-inside">
              Do not accept commissions on investments
            </li>
            <li className="list-decimal list-inside">
              Be transparent on client costs, fees, and terms
            </li>
            <li className="list-decimal list-inside">
              Provide transparency on portfolios and investments
            </li>
            <li className="list-decimal list-inside">
              Remain independent from any bank, broker dealer, insurance
              provider, or custodian
            </li>
            <li className="list-decimal list-inside">
              Measure client performance returns using independent third parties
            </li>
            <li className="list-decimal list-inside">
              Do not create products to sell or price any public securities
            </li>
            <li className="list-decimal list-inside">
              Do not physically hold or possess any client assets, securities,
              or money
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8"
          >
            <Link
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
                <p className=" text-white font-bold transition-all group-active:scale-90">
                  START NOW
                </p>
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="w-[500px] hidden md:block relative  px-4 py-16">
          <Image
            src="/wealth-management/Untitled-20-3.jpg"
            alt=""
            width={300}
            height={500}
          />
          <div className="absolute right-0 top-1/2 transform -translate-x-1/5 -translate-y-1/4">
            {" "}
            <Image
              className=""
              src="/wealth-management/Untitled-20-2.jpg"
              alt=""
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="min-h-[470px] bg-gray-200 px-8 py-16 ">
        <div className="flex flex-col md:flex-row justify-between items-center w-[1400px] max-w-full m-auto">
          <div className="mb-8 md:mb-0">
            {" "}
            <Image
              className=""
              src="/wealth-management/10-600x400.jpg"
              alt=""
              width={380}
              height={500}
            />
          </div>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 px-16"
          >
            <p className="text-[30px] font-light">
              ACCESS TO DIVERSE <br /> PRIVATE INVESTMENTS
            </p>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Private Markets</p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Tax-Efficient Investments</p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Real Estate</p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Qualified Opportunity Zones</p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Private Capital & Credit</p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Private Equity Secondaries</p>
            </li>
            <li className="flex items-start  gap-2">
              <Image
                className="mt-[5px]"
                src="/plus.png"
                alt=""
                width={12}
                height={12}
              />
              <p className="font-extralight">Curated Fund Vehicles</p>
            </li>

            <br />

            <div className="">
              <Link
                href="https://calendly.com/saburpwm/intro-fifteen-min-call"
                target="_blank"
                rel="noopener"
              >
                <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
                  <p className=" text-white font-bold transition-all group-active:scale-90">
                    TALK WITH THE FOUNDER
                  </p>
                </button>
              </Link>
            </div>
          </motion.ul>
        </div>
      </div>
      <div className="py-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border-[1px] border-my_yellow p-24 relative flex justify-center items-start flex-col w-full md:w-[70%] m-auto max-w-[1000px] font-extralight gap-6"
        >
          <h2 className="text-2xl md:text-[44px] leading-normal">
            From Insight to Impact: Personalized Planning for Generations to
            Come
          </h2>
          <p className="text-lg md:text-xl">
            “Our clients trust us to deliver strategies that align with their
            vision, protect their wealth, and reduce unnecessary tax burdens.”
          </p>
          <Link className="text-my_yellow font-normal text-lg" href="">
            Zak Shaik | Sabur PWM, Head of Private Wealth Planning
          </Link>

          <div className="absolute -right-[100px] hidden md:block">
            <Image
              className="mt-[5px]"
              src="/Picture1.png"
              alt=""
              width={205}
              height={12}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
