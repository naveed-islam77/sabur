"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Network() {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto">
      <section className="flex justify-evenly flex-col md:flex-row">
        <div className="flex flex-col  text-left items-center justify-center md:w-1/3">
          <h2 className=" font-extralight md:text-6xl text-4xl">
            INCOME TAX MITIGATION,CASH FLOW & LIQUIDITY MANAGEMENT
          </h2>
          <p className="text-xl mt-8 font-extralight">
            Where your CPA or Tax professionals expertise end to achieve a
            single digit or ZERO income tax liability that’s where our tax
            mitigation services begin. We remove the guess work in utilizing
            every single IRC code for our client’s exponentially reduced tax
            burden.
          </p>
          <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
            <p className=" text-white font-bold transition-all group-active:scale-90">
              CONNECT WITH OUR TEAM
            </p>
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap  gap-8 md:w-1/2"
        >
          <Image
            src={
              "/Screenshot 2023-07-17 at 18-11-54 Cresset Network & Events.png"
            }
            alt={"pictures"}
            width={314}
            height={125}
          />
          <Image
            src={
              "/Screenshot 2023-07-17 at 18-12-08 Cresset Network & Events.png"
            }
            alt={"pictures"}
            width={315}
            height={160}
          />
          <Image
            src={
              "/Screenshot 2023-07-17 at 18-12-14 Cresset Network & Events.png"
            }
            alt={"pictures"}
            width={514}
            height={210}
          />
          <Image
            src={
              "/Screenshot 2023-07-17 at 18-12-24 Cresset Network & Events.png"
            }
            alt={"pictures"}
            width={182}
            height={261}
          />
          <Image
            src={
              "/Screenshot 2023-07-17 at 18-12-30 Cresset Network & Events.png"
            }
            alt={"pictures"}
            width={230}
            height={210}
          />
          <Image
            src={
              "/Screenshot 2023-07-17 at 18-12-36 Cresset Network & Events.png"
            }
            alt={"pictures"}
            width={350}
            height={262}
          />
          <Image
            src={
              "/Screenshot 2023-07-17 at 18-12-41 Cresset Network & Events.png"
            }
            alt={"pictures"}
            width={215}
            height={261}
          />
        </motion.div>
      </section>

      <section className="p-16 mt-8">
        <h2 className="text-center text-6xl font-extralight mb-12">
          Featured Event
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col lg:flex-row justify-center items-center mt-12"
        >
          <Image
            src={
              "/Screenshot 2023-07-13 at 16-32-19 Cresset Network & Events.png"
            }
            alt={"pictures"}
            width={900}
            height={900}
            className="lg:h-2/3 lg:-mr-12 lg:w-1/3 max-w-md"
          />
          <div className="-mt-8 p-16 lg:p-24 mx-16 lg:mx-0 shadow-slate-800 rounded-2xl shadow-2xl lg:w-1/2">
            <h3 className="md:text-4xl text-2xl mb-4 font-extralight">
              From the Locker Room to the Board Room: Find Your Flow & Achieve
              Greatness with Mindfulness and Performance Leader George Mumford
            </h3>
            <p className="md:text-2xl text-xl mb-4 font-light">
              Long before he was famous for transforming the careers of
              superstars like Michael Jordan and Kobe Bryant, George Mumford was
              fighting his own demons after an injury forced him out of college
              basketball ...
            </p>
            <p>July 19, 2023 | 11AM CT</p>
          </div>
        </motion.div>
      </section>

      <section className="flex justify-center items-center bg-slate-100 p-16">
        <div className="w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col"
          >
            <Image
              src={
                "/Screenshot 2023-07-13 at 17-09-25 Cresset Network & Events.png"
              }
              alt={"pictures"}
              width={32}
              height={32}
              className="self-start"
            />
            <h3 className="md:text-4xl text-2xl">
              Sabur PWM goal is to enrich your personal and professional life by
              creating a deep network of thought leaders, entrepreneurs, and
              families.”
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-24 flex items-center gap-4"
          >
            <Image
              src={"/Jessica-Malkin-Horizontal-300x300.jpg"}
              alt={"pictures"}
              width={100}
              height={100}
              className=" rounded-full"
            />
            <div>
              <span className=" font-semibold text-lg">JESSICA MALKIN</span>
              <p className=" font-extralight">
                Sabur PWM Executive Managing Director & Chief Marketing Officer
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="p-16">
        <h2 className="text-5xl font-extralight self-start">
          Upcomming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
          <div>
            <Image
              src={
                "/Screenshot 2023-07-14 at 16-47-47 Cresset Network & Events.png"
              }
              alt={"img"}
              width={500}
              height={500}
            />
            <h3 className="text-xl w-4/5 mt-4 font-light">
              07/13/2023 Market Update with Jack Ablin & Doug Regan featuring
              Sabur PWM Real Estate Partners
            </h3>
            <p className="font-bold text-lg mt-4 mb-4">July 13, 2023 | 3PM </p>
            <Link href={""} className="font-bold text-my_yellow ">
              {" "}
              REGISTER NOW &rarr;
            </Link>
          </div>
          <div>
            <Image
              src={
                "/Screenshot 2023-07-13 at 16-32-19 Cresset Network & Events.png"
              }
              alt={"img"}
              width={500}
              height={500}
            />
            <h3 className="text-xl w-4/5 mt-4 font-light">
              From the Locker Room to the Board Room: Find Your Flow & Achieve
              Greatness with Mindfulness and Performance Leader George Mumford
            </h3>
            <p className="font-bold text-lg mt-4 mb-4">
              July 19, 2023 | 11am CT
            </p>
            <Link href={""} className="font-bold text-my_yellow ">
              {" "}
              REGISTER NOW &rarr;
            </Link>
          </div>
          <div>
            <Image
              src={
                "/Screenshot 2023-07-17 at 19-21-38 Cresset Network & Events.png"
              }
              alt={"img"}
              width={500}
              height={500}
            />
            <h3 className="text-xl w-4/5 mt-4 font-light">
              08/16/2023 Market Update with Jack Ablin & Doug Regan
            </h3>
            <p className="font-bold text-lg mt-4 mb-4">
              August 16, 2023 | 3PM CT{" "}
            </p>
            <Link href={""} className="font-bold text-my_yellow ">
              {" "}
              REGISTER NOW &rarr;
            </Link>
          </div>
        </div>
      </section>
      <section className=" bg-slate-50 p-20 flex flex-col justify-center items-center">
        <div>
          <h2 className=" text-5xl mb-8">Past Event Speakers</h2>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1490px]"
          >
            <Image
              src={
                "/Screenshot 2023-07-14 at 17-22-08 Cresset Network & Events.png"
              }
              alt={"img"}
              width={350}
              height={350}
              className="shadow-2xl"
            />
            <Image
              src={
                "/Screenshot 2023-07-14 at 17-22-21 Cresset Network & Events.png"
              }
              alt={"img"}
              width={350}
              height={350}
              className="shadow-2xl"
            />
            <Image
              src={
                "/Screenshot 2023-07-14 at 17-22-26 Cresset Network & Events.png"
              }
              alt={"img"}
              width={350}
              height={350}
              className="shadow-2xl"
            />
            <Image
              src={
                "/Screenshot 2023-07-14 at 17-22-31 Cresset Network & Events.png"
              }
              alt={"img"}
              width={350}
              height={350}
              className="shadow-2xl"
            />
            <Image
              src={
                "/Screenshot 2023-07-14 at 17-22-36 Cresset Network & Events.png"
              }
              alt={"img"}
              width={350}
              height={350}
              className="shadow-2xl"
            />
            <Image
              src={
                "/Screenshot 2023-07-14 at 17-22-43 Cresset Network & Events.png"
              }
              alt={"img"}
              width={350}
              height={350}
              className="shadow-2xl"
            />
            <Image
              src={
                "/Screenshot 2023-07-14 at 17-22-50 Cresset Network & Events.png"
              }
              alt={"img"}
              width={350}
              height={350}
              className="shadow-2xl"
            />
            <Image
              src={
                "/Screenshot 2023-07-14 at 17-38-24 Cresset Network & Events.png"
              }
              alt={"img"}
              width={350}
              height={350}
              className="shadow-2xl"
            />
          </motion.div>{" "}
        </div>
      </section>
    </main>
  );
}
