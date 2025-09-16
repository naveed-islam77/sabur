"use client";
import StreamLine from "@/components/StreamLine";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Statics from "@/components/Statics";
export default function Enterpreneurs() {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto">
      <section className="text-right bg-transparency relative pb-20 text-white">
        <div className="absolute inset-0 w-full">
          <Image src="/Starry_night.jpg" alt="background image" fill />
        </div>
        <div className="relative z-10 pr-10  mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" text-6xl font-light mb-10"
          >
            Liquidity & Exit Planning
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-10 z-10 text-xl "
          >
            For CEO Founders & Entrepreneurs
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Link
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              <button className="group mt-4 relative overflow-hidden rounded-full bg-white px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-gray-300 active:shadow-md active:ring-2 animated-button">
                <p className=" text-my_dark_blue font-bold transition-all group-active:scale-90">
                  TALK TO OUR FOUNDER
                </p>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="started" className="mt-16 mx-16">
        <div className="flex flex-col lg:flex-row py-16 justify-evenly items-center">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-6xl text-4xl lg:w-1/3 font-light"
          >
            Design Your Exit Strategy To propel All Your Desires.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/3"
          >
            <p className="text-2xl mt-12">Maximize your plan for liquidity.</p>
            <p className="text-xl mt-8 font-light">
              We assist CEO founders and business owners through liquidity
              planning, selling a business, pre-sale planning, transaction
              planning, exit strategies, tax strategies, capital gains
              strategies, estate planning, and succession planning.
            </p>

            <Link
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
                <p className=" text-white font-bold transition-all group-active:scale-90">
                  EXPLORE ALL INSIGHTS
                </p>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Statics />

      <section className="text-center bg-transparency relative pb-20 text-white">
        <div className="absolute inset-0 w-full">
          <Image src="/Starry_night.jpg" alt="background image" fill />
        </div>
        <div className="relative z-10 pr-10  mt-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 1 }}
            className=" md:text-6xl text-4xl font-light mb-10"
          >
            Top Ten Tips Before{" "}
            <strong className=" font-bold">
              Selling Your <br />
              Business
            </strong>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
                <p className=" text-white font-bold transition-all group-active:scale-90">
                  REQUEST NOW
                </p>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className=" bg-zinc-200 py-16 flex flex-col justify-center items-center px-8">
        <h1 className="text-4xl md:text-6xl font-light mb-10 text-center">
          Design Your Path to Financial Freedom
        </h1>

        <p className="mb-10 z-10 text-base md:text-xl text-center ">
          Advanced Tax and cash flow strategies for exit planning.{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-2/3">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className=" w-3/4"
          >
            <h4 className=" border-b-[1px] border-my_dark_blue text mb-8">
              TAX MINIMIZATION STRATEGIES
            </h4>
            <ul className="flex flex-col gap-6 font-extralight">
              <li className="flex gap-2">
                {" "}
                <div className="w-12 h-12 mt-1 ">
                  <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
                </div>
                <p>
                  <strong>Pre-Transaction Planning:</strong> Business advisory
                  and capital gains tax strategies to help prepare you, your
                  family, and business for a successful exit.
                </p>
              </li>
              <li className="flex gap-2">
                {" "}
                <div className="w-12 h-12 mt-1 ">
                  <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
                </div>
                <p>
                  <strong>Exit Strategies:</strong> Tax and estate planning
                  strategies for your liquidity event, business exit, initial
                  public offering, acquisition, and succession planning.
                </p>
              </li>
              <li className="flex gap-2">
                {" "}
                <div className="w-12 h-12 mt-1 ">
                  <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
                </div>
                <p>
                  <strong>Tax Efficient Portfolios: </strong> Personalized
                  wealth management, charitable planning, and asset allocation
                  for your specific wealth objectives, risk tolerance, and
                  future plans.
                </p>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 1.5, duration: 1 }}
            className=" w-3/4"
          >
            <h4 className=" border-b-[1px] border-my_dark_blue text mb-8">
              CASH FLOW STRATEGIES
            </h4>
            <ul className="flex flex-col gap-6 font-extralight">
              <li className="flex gap-2">
                {" "}
                <div className="w-8 h-8 mt-1 ">
                  <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
                </div>
                <p>
                  <strong>Paycheck Replacement: </strong> Create cash flow
                  regardless of market, economic, or interest rate cycle.
                </p>
              </li>
              <li className="flex gap-2">
                {" "}
                <div className="w-8 h-8 mt-1 ">
                  <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
                </div>
                <p>
                  <strong>Disruptive Innovations:</strong> Consider private
                  investments and industries that are likely to grow
                  exponentially.
                </p>
              </li>
              <li className="flex gap-2">
                {" "}
                <div className="w-8 h-8 mt-1 ">
                  <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
                </div>
                <p>
                  <strong>Diversification:</strong> Your portfolio is key to
                  creating an income stream that sustains financial
                  independence.
                </p>
              </li>
            </ul>

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
      </section>

      <section className="py-16 font-light text-center flex flex-col justify-center items-center mb-16">
        <h2 className="text-6xl">Family Office for Entrepreneurs</h2>
        <p className="text-2xl mt-8">You face unique planning challenges.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-2xl p-16">
          <div className="border-[1px] p-8 flex items-center justify-center border-my_dark_blue w-96">
            CEO FOUNDERS & ENTREPRENEURS
          </div>
          <div className="border-[1px] p-8 flex items-center justify-center border-my_dark_blue w-96">
            PRE-LIQUIDITY & NEXT-GEN INNOVATORS
          </div>
          <div className="border-[1px] p-8 flex items-center justify-center border-my_dark_blue w-96">
            PRIVATE EQUITY & VENTURE CAPITAL PARTNERS
          </div>
        </div>

        <Link
          href="https://calendly.com/saburpwm/intro-fifteen-min-call"
          target="_blank"
          rel="noopener"
        >
          <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
            <p className=" text-white font-bold transition-all group-active:scale-90">
              Schedule FOUNDER CALL
            </p>
          </button>
        </Link>
      </section>

      <section className="flex flex-col lg:flex-row justify-evenly gap-10 p-16 bg-gradient-to-r from-my_dark_blue to-my_black items-center text-white">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="lg:w-1/4"
        >
          <Image
            src={"/polynesia-g831468571_1280.jpg"}
            alt={"img"}
            width={800}
            height={800}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 1.5, duration: 1 }}
          className=" lg:w-1/3 font-extralight"
        >
          <h4 className="mb-8 text-4xl">
            ACCESS TO DIRECT PRIVATE INVESTMENTS
          </h4>
          <ul className="flex flex-col gap-6 font-extralight text-xl">
            <li className="flex gap-2 items-center">
              {" "}
              <div className="w-3 h-3 mt-1 ">
                <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
              </div>
              <p>Private Markets</p>
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <div className="w-3 h-3 mt-1 ">
                <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
              </div>
              <p>Tax-Efficient Investments</p>
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <div className="w-3 h-3 mt-1 ">
                <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
              </div>
              <p>Real Estate</p>
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <div className="w-3 h-3 mt-1 ">
                <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
              </div>
              <p>Qualified Opportunity Zones</p>
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <div className="w-3 h-3 mt-1 ">
                <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
              </div>
              <p>Private Capital & Credit</p>
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <div className="w-3 h-3 mt-1 ">
                <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
              </div>
              <p>Private Equity Secondaries</p>
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <div className="w-3 h-3 mt-1 ">
                <Image src={"/plus.png"} alt={"+"} width={20} height={20} />
              </div>
              <p>Curated Fund Vehicles</p>
            </li>
          </ul>

          <Link
            href="https://calendly.com/saburpwm/intro-fifteen-min-call"
            target="_blank"
            rel="noopener"
          >
            <button className="group mt-4 relative overflow-hidden rounded-full bg-white px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-gray-400 active:shadow-md active:ring-2 animated-button">
              <p className=" text-my_dark_blue font-bold transition-all group-active:scale-90">
                TALK WITH THE FOUNDER
              </p>
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="py-16 font-light text-center flex flex-col justify-center items-center mb-16">
        <h2 className="text-4xl md:text-6xl">
          Be The Driver of Your Financial World
        </h2>
        <p className="text-lg md:text-2xl mt-8">
          Strategizing the resources you need. DESIGN
        </p>
        <div className="flex flex-col md:flex-row justify-evenly mt-8">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/Family-Office-icon-80-umbrella.svg"}
              alt={"umbrella"}
              width={200}
              height={300}
            />
            <p className="text-xl w-1/2 font-semibold opacity-75">
              financial independence Your Way! PLAN
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/Family-Office-icon-80-lightbulb.svg"}
              alt={"umbrella"}
              width={200}
              height={300}
            />
            <p className="text-xl w-1/2 font-semibold opacity-75">
              Your next venture and create your legacy. RE-CAPTURE
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/Family-Office-icon-80-globe.svg"}
              alt={"umbrella"}
              width={200}
              height={300}
            />
            <p className="text-xl w-1/2 font-semibold opacity-75">
              Your time and maximize your lifestyle.
            </p>
          </div>
        </div>

        <Link
          href="https://calendly.com/saburpwm/intro-fifteen-min-call"
          target="_blank"
          rel="noopener"
        >
          <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
            <p className=" text-white font-bold transition-all group-active:scale-90">
              EXPLORE YOUR FAMILY OFFICE
            </p>
          </button>
        </Link>
      </section>
    </main>
  );
}
