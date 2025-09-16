"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Statics from "@/components/Statics";
export default function TrueCressetSportsEntertainment() {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto">
      <section
        className="bg-[url('/bg/pexels-johannes-plenio-1642770.jpg')] bg-center bg-no-repeat
 pb-12 text-white"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 pr-10  mt-10 p-4 md:p-20 "
        >
          <h1 className=" text-6xl font-light mb-10 md:w-2/3">
            Wealth Management for Pro Athletes & Entertainers
          </h1>

          <p className=" mb-6 z-10 text-xl text-my_dark_blue">
            Design Your New Wealth Paradigm and build
          </p>
          <p className="mb-16 z-10 text-xl text-my_dark_blue">
            Generational wealth with Sabur PWM.
          </p>

          <Link
            href="https://calendly.com/saburpwm/intro-fifteen-min-call"
            target="_blank"
            rel="noopener"
          >
            <button className="group mt-4 relative overflow-hidden rounded-full bg-orange-400 px-8 py-4 tracking-widest font-sans uppercase shadow  transition-all hover:bg-my_dark_blue active:shadow-md active:ring-2 animated-button">
              <p className=" text-white font-bold transition-all group-active:scale-90">
                LET{"'"}S TALK
              </p>
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="flex md:1/2 flex-col md:flex-row justify-evenly items-center mt-16 font-light">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 p-4 md:p-16 items-center md:w-1/2"
        >
          <h2 className="text-3xl md:text-6xl self-start">
            About Authentic Sabur PWM
          </h2>
          <p className="text-lg md:text-xl font-extralight">
            <strong className=" text-my_yellow font-semibold">
              AUTHENTIC Sabur PWM | Sports + Entertainment
            </strong>{" "}
            offers little known advanced tax planning strategies that can help
            you achieve virtually ZERO income tax liability that will keep you
            “bankable”, i.e. unlike what your CPA may suggest by creating
            “expenses” to mitigate your tax liability we utilize the IRC.
          </p>
          <p className="text-xl font-extralight">
            Our independent, boutique, multi-family office and private
            investment firm specifically designed to support professional
            athletes, entertainers, and entrepreneurs throughout their
            professional journey. Through this complete solutions approach to
            private wealth enhancement, Sabur PWM exponentially increases your
            networth very quickly by stopping the tax bleed while architecting
            your generational wealth with your vision for atleast TEN
            GENERATIONS today.
          </p>
          <br />
          <p className="text-xl font-extralight">
            Sabur PWM for the benefit of it’s clients has continually expanded
            it’s services to provide a full suite of family office services, a
            robust and dynamic investment platform, and remains steadfast in
            creating financial literacy and security for its clients. Sabur PWM
            is a virtual family office and is available anywhere you are,
            serving our clients nationally and worldwide.
          </p>
          <Link
            href="https://calendly.com/saburpwm/intro-fifteen-min-call"
            target="_blank"
            rel="noopener"
          >
            <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-8 py-4 tracking-widest font-sans uppercase shadow  transition-all hover:bg-orange-400 active:shadow-md active:ring-2 animated-button">
              <p className=" text-white font-bold transition-all group-active:scale-90">
                LET{"'"}S TALK
              </p>
            </button>
          </Link>

          <p className="text-sm md:text-base italic">
            *Sabur PWM Asset Management LLC conducting business as AUTHENTIC
            Sabur PWM | Sports + Entertainment (“AUTHENTIC Sabur PWM” or
            “AUTHENTIC Sabur PWM | Sports + Entertainment”)
          </p>
        </motion.div>
        <div>
          <Image
            src={"/True-Track-Field-750x836-1-600x600.jpg"}
            alt={"img"}
            width={550}
            height={550}
            className=" md:p-16"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-evenly items-center mt-16 font-light bg-slate-100">
        <Image
          src={"/Basketball-Player-750x833-1-600x600.jpg"}
          alt={"img"}
          width={550}
          height={550}
          className=" md:p-16 md:w-1/2"
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 p-4 md:p-16 md:w-1/2 items-center"
        >
          <h2 className="text-3xl md:text-6xl">Who We Serve</h2>
          <p className="text-lg md:text-xl font-extralight">
            Our client base spans the globe and is primarily comprised of
            professionals in various sports, entertainment industries, social
            media influencers, hedge fund managers to name a few. Our services
            are structured to support the complex needs of high-net-worth and
            ultra-high-net-worth individuals and families. We enhance our
            clients’ remarkable achievements and ever-changing lifestyles by
            developing personalized and sophisticated investment portfolios that
            address their immediate needs and preserves wealth for generations.
          </p>
          <p className="text-sm md:text-xl font-extralight">
            We understand the complex challenges our clients encounter at
            various phases of their career and develop customized solutions to
            enhance their financial well-being. With a focus on education and
            commitment to transparency, our customized approach prepares our
            clients for the responsibilities of wealth.
          </p>

          <Link
            href="https://calendly.com/saburpwm/intro-fifteen-min-call"
            target="_blank"
            rel="noopener"
          >
            <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-8 py-4 tracking-widest font-sans uppercase shadow  transition-all hover:bg-orange-400 active:shadow-md active:ring-2 animated-button">
              <p className=" text-white font-bold transition-all group-active:scale-90">
                LET{"'"}S TALK
              </p>
            </button>
          </Link>
        </motion.div>
      </section>
      <Statics />
    </main>
  );
}
