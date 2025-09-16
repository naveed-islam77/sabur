"use client";
import Link from "next/link";
import Image from "next/image";
import StreamLine from "@/components/StreamLine";
import { motion } from "framer-motion";
import Statics from "@/components/Statics";
export default function About() {
  return (
    <main className="flex min-h-screen flex-col px-4 w-[1400px] max-w-full m-auto">
      <section className="text-right bg-transparency relative  text-white bg-[url('/new/31.jpg')] bg-center bg-no-repeat py-10 px-8 ">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=" w-full h-full"
        >
          <h2 className="text-xl md:text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            FOUNDED ON AUTHENTIC FIDUCIARY STANDARDS DRIVEN BY ADVANCED TAX
            STRATEGIES
          </h2>

          <p className="my-10 z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Design Your Generational Wealth Experience Today{" "}
          </p>
          <div className="">
            {" "}
            <Link
              className="px-8 rounded-full font-extralight text-cyan-800 bg-white  py-4 mt-6"
              href="/about/team"
            >
              MEET THE TEAM
            </Link>
          </div>
        </motion.div>
      </section>

      <Statics />

      <div className="my-20 flex flex-col md:flex-row justify-between gap-10 md:gap-28 w-[1400px] max-w-full px-4 md:px-16 m-auto py-12 bg-gradient-to-r from-my_dark_blue to-my_black text-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-[44px] font-extralight mb-8">
            Advanced.
            <br />
            Objective.
            <br />
            Practical.
            <br />
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <p className="mb-8 text-lg md:2xl">
            Award-Winning, Multi-Family Office<span>¹</span>
          </p>
          <h3 className="mb-12 opacity-80">
            Boldly independent and driven by advanced investment and tax
            strategies. Intuitively dialed into the unique needs of
            Ultra-High-Net-Worth Families, CEO Founders, Entrepreneurs, Family
            Business Owners, PE Partners and Executives. Complete solutions
            oriented.
            <br />
          </h3>
          {/* <Link
            className="text-my_dark_blue px-8 py-3 font-extralight bg-white rounded-full text-lg"
            href="/"
          >
            VIEW OUR AWARDS
          </Link> */}
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <StreamLine
          title={
            "We are Financial strategists redirecting the social capital called “tax”, to serve the complex growth needs of today’s Entrepreneurs"
          }
          image={"/Picture1.png"}
          text={
            "“Sabur Private Wealth Management Enhancement’s integrated platform offers advanced investment and tax planning wealth advisory services for a complete solution, along with direct access to institutional-quality private investments. This unique set of resources causes exponential increase in networth for our clients starting the first year.”"
          }
          coloredText={
            "ZAK SHAIK | Sabur Private Wealth Management Founder & Advisor"
          }
        />
      </div>
      <div className="flex flex-col md:flex-row gap-24 justify-evenly px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.6 }}
          className="w-full md:w-1/2"
        >
          <div>
            <Image
              src="/new/32.jpg"
              alt="background image"
              width={900}
              height={1000}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.6 }}
          className="w-full md:w-1/2 "
        >
          <h3 className="mb-10 text-4xl md:6xl">Our Origin Story</h3>
          <p className="mb-10">
            We created Sabur Private Wealth Management Enhancement to offer the
            desperately needed complete solutions every HNW investor wants and
            dreams of inherently, but fails to receive from all the financial
            services “sales people”, whom we call “financial technicians”. An
            Independent financial strategist like Sabur PWM’s agnostic approach
            to solutions was perfected by our founder who spent decades as an
            advanced solutions provider to seven and eight figure entrepreneurs
            across the country and internationally.
          </p>
          <p className="mb-10">
            As experienced by HNW and us as industry professionals when
            exploring options for managing their own family wealth, you are
            struck by the limitations of existing firms claiming to be “wealth
            managers”, when in reality they either want to sell you stocks or
            insurance related products, while setting you up with an estate
            planning lawyer…. And that’s the extent of their abilities. Our
            approach is vastly different by including advanced but practical
            strategies on investment, tax, insurance, law suit protection and
            plethora of ZERO Income, Capital gains and Estate tax strategies
            using little known IRC”s as part of our ecosystem of complete
            solutions.
          </p>
          <p className="mb-10">
            Sabur PWM is an industry innovator, by building an independent
            multi-family office to deliver a “design your wealth experience”
            platform. Sabur PWM via it’s founder is regularly identified as a
            Top Wealth Management firm as a Genuine Fiduciary that since it’s
            inception has placed client’s interests first.
          </p>
          <div className="my-8">
            {" "}
            <Link
              className="text-white px-8 py-3 font-extralight bg-my_dark_blue rounded-full text-lg"
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              SCHEDULE YOUR ZERO INCOME TAX STRATEGY SESSION
            </Link>
          </div>
        </motion.div>
      </div>
      {/* video here */}

      <div className="my-24 flex justify-center">
        <Link
          className="text-white px-8 py-3 font-extralight bg-my_dark_blue rounded-full text-lg"
          href="https://calendly.com/saburpwm/intro-fifteen-min-call"
          target="_blank"
          rel="noopener"
        >
          JOIN THE COMMUNITY
        </Link>
      </div>
    </main>
  );
}
