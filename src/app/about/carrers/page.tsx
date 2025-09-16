'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import StreamLine from '@/components/StreamLine';
import Video from '@/components/Video';
import Statics from '@/components/Statics';
export default function CressetTeam() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto">
      <h1 className="text-my_yellow"></h1>
      <section className="md:text-right text-center bg-transparency relative pb-24 pr-10  text-white">
        <div className="absolute inset-0">
          <Image
            src="/rankings-and-awards/Test_Header.jpg"
            alt="background image"
            fill
          />
        </div>
        <div className="relative z-10">
          <h2 className="md:text-[50px] text-3xl font-light mt-10">
            EXPLORE SABUR PWM CAREERS
          </h2>

          <p className="mb-8 mt-4 z-10">Let’s Grow Together</p>

          <Link href="#careers" scroll={true}>
            <button className="group relative overflow-hidden rounded-full bg-white px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-gray-300 active:shadow-md active:ring-2 animated-button">
              <p className=" text-my_dark_blue transition-all group-active:scale-90">
                VIEW OPEN POSITIONS
              </p>
            </button>
          </Link>
        </div>
      </section>
      <div className="flex flex-col-reverse lg:flex-row gap-24 py-16 items-center justify-evenly px-16">
        <div className="lg:w-1/2">
          <h3 className="mb-10 text-3xl md:text-6xl">
            We Are Building A Strong Financial Platform
          </h3>
          <p className="mb-6">
            Sabur PWM is already partnered up with exceptional financial
            services professionals across the country as part of our team. Now
            it’s your turn to join us by building a brand focused on purpose,
            meaning, culture, independence, transparency, holistic ecosystem
            boosting our advanced investment and tax planning strategies.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div>
            <Image
              src="/Picture4.png"
              alt="background image"
              width={900}
              height={1000}
            />
          </div>
        </div>
      </div>

      <div className="my-24 px-8">
        <h2 id="careers" className="text-3xl mb-4">
          Careers
        </h2>
        <p className="mb-2">
          As a one of a kind advanced tax planning firm we are seeking PART TIME
          and FULL TIME candidates to join our firm. You can work from home or
          anywhere in the country.
        </p>
        <p className="mb-2">
          Although we prefer experienced team members but will train an
          enthusiastic candidate with the desire to succeed while helping the
          community, so don’t be shy to apply.
        </p>
        <p className="mb-2">
          Enjoy full corporate benefits package including health insurance, 401k
          participation, team vacations and trips and much much more. Fun,
          Income and Growth awaits you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="border-[2px] rounded">
            <h3 className="px-4 py-2 bg-slate-100 text-xl font-semibold">
              Marketing managers:{' '}
            </h3>
            <div className="p-4 space-y-2">
              {' '}
              <p>
                Are you an paralegal or lawyer? Introduce our services to local
                Personal Injury lawyers in the DFW market
              </p>
              <p>
                Are you a Pastor or Imam; setup seminars at local MEGA churches,
                Masjid etc
              </p>
              <p>
                Auto dealership experience – setup seminars at Luxury and Exotic
                car dealerships. “FREE CARS”
              </p>
              <p>
                Private Jets / Yachts experience – setup seminars at Executive
                airports, manufacturer facilities, marinas etc about “FREE JETS”
              </p>
            </div>
          </div>
          <div className="border-[2px] rounded">
            <h3 className="px-4 py-2 bg-slate-100 text-xl font-semibold">
              Bankruptcy lawyer / paralegal:{' '}
            </h3>
            <div className="p-4 space-y-2">
              {' '}
              <p>
                We help individuals and businesses with over $1mil+ in debt to
                AVOID CHAPTER 7 OR 11 BANKRUPTCIES.
              </p>
              <p>Market our BK alternative programs to DFW area attorneys.</p>
              <p>
                You will meet with prospective distressed candidates to complete
                their intake form and produce proposals based our internal
                financing program.{' '}
              </p>
            </div>
          </div>
          <div className="border-[2px] rounded">
            <h3 className="px-4 py-2 bg-slate-100 text-xl font-semibold">
              CPA / Tax preparer / Accountant / EA
            </h3>
            <div className="p-4 space-y-2">
              {' '}
              <p>
                CPA’s / EA’s / Tax preparers are invited to partner with us and
                DOUBLE client revenue by utilizing our advanced tax strategies.
              </p>
              <p>
                Accounting / Business students will be trained on marketing
                efforts, PPT design and scheduling seminars and on the
                proprietary software to in take client info to assist with tax
                planning proposals.
              </p>
            </div>
          </div>
          <div className="border-[2px] rounded">
            <h3 className="px-4 py-2 bg-slate-100 text-xl font-semibold">
              Financial Advisors & RIA’s{' '}
            </h3>
            <div className="p-4 space-y-2">
              {' '}
              <p>
                If you love to help people grow their wealth while saving on
                taxes, enjoy risk mitigation strategies and financial
                enhancement for our communities then we welcome you to join our
                Independent RIA firm where we take our FIDUCIARY responsibility
                very seriously.
              </p>
              <p>
                We may even purchase your AUM book of business and help DOUBLE
                your income while monetizing your rolodex of HNW and UHNW
                prospective clients.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            className="text-blue-400 text-xl"
            href="https://calendly.com/saburpwm/intro-fifteen-min-call"
            target="_blank"
            rel="noopener"
          >
            Schedule on our calendar today!
          </Link>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row items-center justify-evenly gap-5 bg-gradient-to-r from-my_dark_blue to-my_black p-16 text-white">
        <div className="lg:w-1/2">
          <Image
            src="/Picture5.png"
            alt="background image"
            height={300}
            width={300}
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="mb-8 text-4xl">Founder’s Vision</h3>
          <p className="mb-6 opacity-80 text-2xl">
            Everything starts with culture.
          </p>
          <p className="mb-12 opacity-80">
            Our Vision is to reinvent the way people experience wealth and
            enhance their financial well-being, by expanding access to a proven
            ecosystem of ideas, solutions and talent, because our clients
            deserve better.
          </p>
        </div>
      </div>

      <Statics />

      <section
        className="flex flex-col items-center justify-center m-auto  w-[1400px] max-w-full px-8 md:px-16"
        id="flipping cards"
      >
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center justify-center flex-col group cursor-pointer">
            <div className="relative transform transition ease-in-out shadow-xl shadow-black/40 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000">
              <div className="bg-gradient-to-r from-my_dark_blue to-my_black text-white p-6 min-w-72 h-72 flex flex-col justify-start">
                <hr className="w-10 h-1 bg-white" />
                <h4 className="mt-5">
                  BECOME YOUR COMMUNITY LEADER AS PART OF OUR TEAM
                </h4>
                <div className="mt-auto justify-self-start">
                  <Image
                    src="/right-arrow (7).png"
                    alt="arrow"
                    width={40}
                    height={50}
                  />
                </div>
              </div>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-my_dark_blue to-my_black text-white p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p>
                  Offer the best advanced investment and tax planning services
                  to your communities business owners better than the national
                  firms. Let success be your option.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col group cursor-pointer">
            <div className="relative transform transition ease-in-out shadow-xl shadow-black/40 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 w-full">
              <div className="bg-gradient-to-r from-my_dark_blue to-my_black text-white p-6 min-w-72 h-72 flex flex-col justify-start">
                <hr className="w-10 h-1 bg-white" />
                <h4 className="mt-5">CULTIVATE CURIOSITY</h4>
                <div className="mt-auto justify-self-start">
                  <Image
                    src="/right-arrow (7).png"
                    alt="arrow"
                    width={40}
                    height={50}
                  />
                </div>
              </div>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-my_dark_blue to-my_black text-white p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p>
                  Flourish in an open, collaborative environment that thrives on
                  communication and optimistic energy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col group cursor-pointer">
            <div className="relative transform transition ease-in-out shadow-xl shadow-black/40 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 w-full">
              <div className="bg-gradient-to-r from-my_dark_blue to-my_black text-white p-6 min-w-72 h-72 flex flex-col justify-start">
                <hr className="w-10 h-1 bg-white" />
                <h4 className="mt-5">EMPOWER DIVERSITY</h4>
                <div className="mt-auto justify-self-start">
                  <Image
                    src="/right-arrow (7).png"
                    alt="arrow"
                    width={40}
                    height={50}
                  />
                </div>
              </div>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-my_dark_blue to-my_black text-white p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p>
                  Foster a diverse and inclusive environment focused on talent,
                  creativity, and growth.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col group cursor-pointer">
            <div className="relative transform transition ease-in-out shadow-xl shadow-black/40 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 w-full">
              <div className="bg-gradient-to-r from-my_dark_blue to-my_black text-white p-6 min-w-72 h-72 flex flex-col justify-start">
                <hr className="w-10 h-1 bg-white" />
                <h4 className="mt-5">INNOVATE FASTER</h4>
                <div className="mt-auto justify-self-start">
                  <Image
                    src="/right-arrow (7).png"
                    alt="arrow"
                    width={40}
                    height={50}
                  />
                </div>
              </div>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-my_dark_blue to-my_black text-white p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p>
                  Enjoy the confidence to question conventional thinking while
                  building a long term legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-12">
        <StreamLine
          title={'We Believe in Your Success'}
          image={'/Picture1.png'}
          text={
            '“Sabur PWM culture empowers you to stand on the strength of your team members in virtually every aspect of the financial services strategies and never feel less than. Each of our team and affiliates unique experiences bonds us together no matter your location around the country.”'
          }
          coloredText={'ZAK SHAIK | Sabur PWM'}
        />
      </div>
      {/* <section className="text-center bg-transparency relative pb-24 pr-10  text-white">
        <div className="absolute inset-0">
          <Image
            src="/rankings-and-awards/Test_Header.jpg"
            alt="background image"
            fill
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-6xl font-light mb-10 mt-10">
            Explore a Career with Sabur PWM
          </h2>
          <Link
            className="px-8 rounded-full font-extralight text-cyan-800 bg-white mt-12 py-4 "
            href=""
          >
            FIND YOUR ROLE HERE
          </Link>
        </div>
      </section> */}
    </main>
  );
}
