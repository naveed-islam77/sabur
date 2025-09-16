'use client';
import StreamLine from '@/components/StreamLine';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Statics from '@/components/Statics';
export default function FamilyOffice() {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto">
      <section className="text-right bg-transparency relative pb-20 text-white">
        <div className="absolute inset-0 w-full">
          <Image src="/new/23.jpg" alt="background image" fill />
        </div>
        <div className="relative z-10 pr-10  mt-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-extralight mb-10"
          >
            BOUTIQUE FAMILY OFFICE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 z-10 text-xl md:text-3xl"
          >
            Designing your Generational Wealth Guidance
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              <button className="group relative overflow-hidden rounded-full bg-white px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-gray-300 active:shadow-md active:ring-2 animated-button">
                <p className=" text-my_dark_blue transition-all group-active:scale-90">
                  TALK TO THE FOUNDER
                </p>
              </button>
            </Link>
          </motion.p>
        </div>
      </section>

      <section id="started" className="mt-16">
        <div className="flex flex-col lg:flex-row p-16 justify-evenly items-center gap-16">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-6xl text-4xl lg:w-1/3 font-light"
          >
            Protect Your Most Valuable Asset:{' '}
            <strong className="font-semibold">TIME</strong>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/3"
          >
            <p className="text-2xl md:4xl mt-12">
              Design the Way You Experience Wealth.
            </p>
            <p className="text-xl md:2xl mt-8 font-light">
              Sabur PWM’s Multi-Family Office accurately aligns the best
              available financial strategies for your exact family and business
              needs. Private wealth management, goals-based financial planning,
              private investment access, income and capital gains tax mitigation
              strategy, estate planning, liquidity and exit planning, trust
              services, private banking, philanthropic planning, family
              governance, and lifestyle concierge for the complete solutions
              experience.
            </p>

            <Link
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
                <p className=" text-white transition-all group-active:scale-90">
                  GET STARTED NOW
                </p>
              </button>
            </Link>
          </motion.div>
        </div>
        <div className="text-center text-my_dark_blue">
          <p className="md:text-6xl text-4xl">Sabur PWM Founder’s Story</p>
          WATCH NOW
        </div>
      </section>

      <Statics />

      <section id="centralize" className="py-16 flex flex-col items-center">
        <h2 className="md:text-6xl text-4xl text-center font-light">
          Centralize Your Private Wealth
        </h2>
        <p className="text-2xl md:4xl text-center mt-8 font-light">
          Create cohesiveness across key foundational areas.{' '}
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 font-light text-center px-12 gap-8">
          <div className="border-2 flex flex-col gap-8 items-center p-10">
            <Image src={'/flag2x.png'} alt={'flag'} width={60} height={60} />
            <h3 className="text-3xl "> GOAL-BASED PLAINING & INVESTING</h3>
            <p className="text-xl md:2xl">
              Diferenciating strategies for tax-
              <br />
              efficient portfolios
            </p>
          </div>
          <div className="border-2 flex flex-col gap-8 items-center p-10">
            <Image
              src={'/percent@2x.png'}
              alt={'percent'}
              width={60}
              height={60}
            />
            <h3 className="text-3xl">
              TAX STRATEGY & <br />
              PLANNING
            </h3>
            <p className="text-xl md:2xl">
              Proactive solutions to minimize
              <br />
              capital gains and tax exposure.
            </p>
          </div>
          <div className="border-2 flex flex-col gap-8 items-center p-10">
            <Image
              src={'/business@2x.png'}
              alt={'business'}
              width={60}
              height={60}
            />
            <h3 className="text-3xl">
              WEALTH STRATEGY & <br />
              LIQUIDITY PLANNING
            </h3>
            <p className="text-xl md:2xl">
              Custom roadmap process for
              <br />
              sophisticated wealth planning
            </p>
          </div>
          <div className="border-2 flex flex-col gap-8 items-center p-10">
            <Image
              src={'/invest@2x.png'}
              alt={'invest'}
              width={60}
              height={60}
            />
            <h3 className="text-3xl">
              {' '}
              PUBLIC & PRIVATE
              <br />
              INVESTEMTS
            </h3>
            <p className="text-xl md:2xl">
              Access to curated private market
              <br />
              opportunities.
            </p>
          </div>
          <div className="border-2 flex flex-col gap-8 items-center p-10">
            <Image src={'/tree@2x.png'} alt={'tree'} width={60} height={60} />
            <h3 className="text-3xl">
              ESTATE PLANNING,
              <br />
              TRUSTS & <br />
              PHILANTHROPY
            </h3>
            <p className="text-xl md:2xl">
              Protect your family,plan your
              <br />
              legacy,and fuel your passions.
            </p>
          </div>
          <div className="border-2 flex flex-col gap-8 items-center p-10">
            <Image src={'/bank@2x.png'} alt={'bank'} width={60} height={60} />
            <h3 className="text-3xl">
              PRIVATE BANKING
              <br />
              SERVICES
            </h3>
            <p className="text-xl md:2xl">
              Dedicated care for you private
              <br />
              wealth management needs
            </p>
          </div>
          <div className="border-2 flex flex-col gap-8 items-center p-10">
            <Image
              src={'/family@2x.png'}
              alt={'family'}
              width={60}
              height={60}
            />
            <h3
              className="text-3xl uppercase
            "
            >
              FAMILY governance
              <br /> & EDUCATION
            </h3>
            <p className="text-xl md:2xl">
              Guide your wealth decisions <br />
              across generations
            </p>
          </div>
          <div className="border-2 flex flex-col gap-8 items-center p-10">
            <Image src={'/sun@2x.png'} alt={'sun'} width={60} height={60} />
            <h3 className="text-3xl">
              LIFESTYLE & WELLNESS <br /> RESOURCES
            </h3>
            <p className="text-xl md:2xl">
              Enrich your family{"'"}s lifestyle to
              <br />
              enjoy your wealth.
            </p>
          </div>
        </div>

        <Link
          href="https://calendly.com/saburpwm/intro-fifteen-min-call"
          target="_blank"
          rel="noopener"
        >
          <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue  px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
            <p className=" text-white transition-all font-bold group-active:scale-90">
              SCHEDULE STRATEGY SESSION
            </p>
          </button>
        </Link>
      </section>

      <section className=" bg-gradient-to-r from-my_dark_blue to-my_black py-16 flex flex-col md:flex-row justify-evenly items-center text-white">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
        >
          <Image
            src={'/micheile-henderson-ZVprbBmT8QA-unsplash.jpg'}
            alt={'img'}
            width={400}
            height={400}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-8 p-8 md:w-1/3 font-extralight"
        >
          <h2 className="text-6xl">Access to Direct Private Investments</h2>
          <p className="text-2xl md:4xl">
            Sourcing opportunities not typically available to individual
            investors. Providing an ecosystem of curated private market
            opportunities.
          </p>

          <Link
            href="https://calendly.com/saburpwm/intro-fifteen-min-call"
            target="_blank"
            rel="noopener"
          >
            <button className="group mt-4 relative overflow-hidden rounded-full bg-white px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-gray-300 active:shadow-md active:ring-2 animated-button">
              <p className=" text-my_dark_blue transition-all font-bold group-active:scale-90">
                GET STARTED NOW
              </p>
            </button>
          </Link>
        </motion.div>
      </section>

      <section
        id="enjoy"
        className="flex flex-col-reverse lg:flex-row gap-10 mb-36 p-8 justify-evenly items-center "
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-10 font-light lg:w-2/5"
        >
          <div className="text-lg flex flex-col gap-6">
            <h3 className="text-4xl">
              ADD MEANING TO THE WEALTH YOU’VE EARNED
            </h3>
            <p>
              Remove the stress of everyday life and replace it with elevated
              expectations.
            </p>
          </div>
          <ul className="flex flex-col gap-6 font-extralight md:w-1/2">
            <li className="flex items-center gap-2">
              {' '}
              <div className="w-2 h-2 ">
                <Image src={'/plus.png'} alt={'+'} width={20} height={20} />
              </div>
              Bespoke Travel & Private Aviation
            </li>
            <li className="flex items-center gap-2">
              {' '}
              <div className="w-2 h-2 ">
                <Image src={'/plus.png'} alt={'+'} width={20} height={20} />
              </div>
              Preferred Access & Entertainment
            </li>
            <li className="flex items-center gap-2">
              {' '}
              <div className="w-2 h-2 ">
                <Image src={'/plus.png'} alt={'+'} width={20} height={20} />
              </div>
              Cybersecurity & Privacy Protection
            </li>
            <li className="flex items-center gap-2">
              {' '}
              <div className="w-2 h-2 ">
                <Image src={'/plus.png'} alt={'+'} width={20} height={20} />
              </div>
              Life & Home Management
            </li>
            <li className="flex items-center gap-2">
              {' '}
              <div className="w-2 h-2 ">
                <Image src={'/plus.png'} alt={'+'} width={20} height={20} />
              </div>
              Healthcare Advocacy & Partnerships
            </li>
            <li className="flex items-center gap-2">
              {' '}
              <div className="w-2 h-2 ">
                <Image src={'/plus.png'} alt={'+'} width={20} height={20} />
              </div>
              Wellness Resources & Education
            </li>
          </ul>
          <div className="flex flex-col items-center">
            <Link
              href="https://calendly.com/saburpwm/intro-fifteen-min-call"
              target="_blank"
              rel="noopener"
            >
              <button className="group mt-4 relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
                <p className=" text-white font-bold transition-all group-active:scale-90">
                  START TODAY
                </p>
              </button>
            </Link>
          </div>
        </motion.div>
        <div className="h-[clamp(350px,1.4*100vw,1200px)] lg:h-auto w-full lg:w-2/5 flex relative md:self-start lg:pb-[clamp(100px,20vw,400px)]">
          <Image
            className="w-2/3 max-w-[500px] lg:max-w-lg absolute lg:relative"
            src={'/new/33.jpg'}
            alt={'plane'}
            width={500}
            height={800}
          />

          <Image
            className="w-2/3 max-w-[500px] lg:max-w-lg absolute bottom-0 right-0"
            src={'/new/34.jpg'}
            alt={'ship'}
            width={500}
            height={800}
          />
        </div>
      </section>

      <section className=" bg-gradient-to-r from-my_dark_blue to-my_black text-white py-16 font-light text-center flex flex-col justify-center items-center mb-16 px-4">
        <h2 className="text-6xl">You Deserve a Family Office</h2>
        <p className="text-2xl md:4xl mt-8">
          Personalized service and objective advice.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-2xl p-16 text-my_black justify-items-center">
          <div className="border-2 p-8 flex items-center justify-center border-my_dark_blue max-w-80 bg-slate-100">
            ULTRA-HIGH-NET-WORTH & MULTI-GEN-FAMILIES
          </div>
          <div className="border-2 p-8 flex items-center justify-center border-my_dark_blue max-w-80 bg-slate-100">
            CEO FOUNDERS & ENTREPRENEURS
          </div>
          <div className="border-2 p-8 flex items-center justify-center border-my_dark_blue max-w-80 bg-slate-100">
            PRE-LIQUIDITY & NEXT-GEN INNOVATORS
          </div>
          <div className="border-2 p-8 flex items-center justify-center border-my_dark_blue max-w-80 bg-slate-100">
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
              SCHEDULE FOUNDER CALL
            </p>
          </button>
        </Link>
      </section>
      <div className="flex justify-center">
        <StreamLine
          title={'Control your Financial World'}
          image={'/Picture1.png'}
          text={
            '“We get you access to early bird opportunities which were once only available to multi-billion-dollar families. Our dedicated complete solutions platform delivers the same resources and experiences at a fraction of the cost.”'
          }
          coloredText={'ZAK SHAIK | Sabur PWM Founder & Advisor'}
        />
      </div>
    </main>
  );
}
