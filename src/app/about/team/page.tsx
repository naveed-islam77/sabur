'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CressetTeam() {
  return (
    <main className="flex min-h-screen flex-col px-8 md:px-16 w-[1400px] max-w-full m-auto text-justify">
      <section className="text-right bg-transparency relative py-16 pr-10 w-full bg-[url('/new/21.jpg')] bg-center bg-no-repeat flex justify-end items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 pb-8"
        >
          <h2 className="text-2xl text-my_yellow">About us</h2>

          <h2 className="text-3xl md:text-6xl font-extralight mt-10 text-white">
            YOUR SABUR PWM TEAM
          </h2>

          <p className="text-xl font-extralight mt-6  text-white">
            Dedicated to Serving Your Needs
          </p>
        </motion.div>
      </section>

      {/* Section #1 */}

      <section className="my-16  leading-loose">
        <h2 className="text-3xl text-my_dark_blue underline text-center mb-5">
          Sabur Private Wealth Management
        </h2>
        <h3 className="text-center text-xl mb-10">
          Advanced Private Wealth and Tax planning Strategies
        </h3>
        <div className="m-auto max-w-fit  text-center bg-slate-200 mx-3 mb-2 md:mb-0 md:float-left md:ml-4">
          <div className=" relatuve overflow-hidden">
            <div>
              <Image
                className="hover:scale-110 transition duration-500 ease-in-out"
                src="/Picture1.png"
                alt="Doug Regan"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className=" p-5">
            <div className=" pt-1">ZAK SHAIK</div>
            <div className="pb-4">
              <p className="text-gray-700  font-normal tracking-wider leading-4 text-sm">
                Founder and Advisor
              </p>
            </div>
          </div>
        </div>
        <ul className="list-disc list-inside mb-10 space-y-2 ">
          <li>Trusted Fiduciary / Independent and Objective</li>
          <li>
            Real estate, Investments, Tax reduction, Blockchain/Crypto,
            Litigation deterrent planning
          </li>
          <li>Synergistic planning for family and business wealth</li>
        </ul>

        <p className="mb-10">
          <b>Specializing in: </b> ZERO Capital gains tax upon asset sale Income
          & Estate tax mitigation Tax FREE Business succession planning
          Philanthropic planning / ESG –“Biblical” Investing Risk mgt /
          Insurance strategies Brokerage Portfolio & <b>PRIVATE 401k design</b>
          Real estate acquisition / disposition advisory
        </p>
        <p className="mb-10">
          <b>Credentials: </b> IAR, Investment, Insurance, Real Estate
          certifications Wealth Management Specialist (WMS) Certified Asset
          Protection Planner (CAPP) Certified Wealth Preservation Planner (CWPP)
        </p>

        <p className="mb-10">
          A strong reputation with a successful career built over 30 years ---
          one client at a time. Families, Charitable organizations and business
          owners with $5 Million to more than $100 Million in net worth have
          consulted Mr. Shaik for Estate, Investment, Corporate retirement and
          Business succession planning advice. He believes “Just as humans are
          holistic beings so should their financial portfolios be treated!”.
        </p>

        <p>
          To promote that message he educates clients nationwide on available
          options as a Fiduciary, (with the help of histeam of tax, legal and
          estate planning professionals) to achieve favorable and preferred
          outcomes.
        </p>
        <br />
        <p>
          His clients gain confidence, knowing their personal, business and
          philanthropic interests are strategically addressed to create the
          &quot;Bubble wrap&quot; effect to protect from all types of internal
          and 3rd party litigation threats for wealth enhancement.
        </p>
        <br />
        <p>
          Let him help you cut through all the financial media noise and get you
          the advice and systematic coordination you always wanted to manage and
          grow your personal and family wealth. In 2011, 13, 16, 18, 19, 20, 21
          & 2022.
        </p>
        <br />
        <p>
          Mr.Shaik was identified as a FIVE STAR wealth manager by New Jersey
          Monthly Magazine. FIVE STAR wealth manager awards are awarded to less
          than 2% of professionals each year.{' '}
          <Link
            className="text-blue-700 font-bold underline"
            href={'https://calendly.com/saburpwm/intro-fifteen-min-call'}
          >
            CLICK HERE
          </Link>{' '}
          to Book your FREE 30 min call now.
        </p>
        <br />

        <hr className="my-16" />

        {/* team 1 */}

        <div className="my-10">
          <div className="m-auto max-w-fit  text-center bg-slate-200 mx-3 mb-2 md:mb-0 md:float-right md:ml-8">
            <div className=" relatuve overflow-hidden">
              <div>
                <Image
                  className="hover:scale-110 `transition duration-500 ease-in-out"
                  src="/about/team1.png"
                  alt="Doug Regan"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className=" p-5">
              <div className=" pt-1">Mr.Vandi </div>
              <div className="pb-4">
                <p className="text-gray-700  font-normal tracking-wider leading-4 text-sm">
                  Co-General Partner
                </p>
              </div>
            </div>
          </div>

          <p>
            Mr.Vandi as a co-General Partner to our Registered Investment
            Advisory firm offers his unique expertise to Sabur Private Wealth
            Management as a liaison to US Persons residing in European Union
            (EU) and United Arab Emirates (UAE) who wish to utilize our
            services.
          </p>
          <br />
          <p>
            In addition he is a CEO and Managing Principal at Manhattan Global
            Investments (MGI). He oversees all areas of Regulatory Compliance
            and Risk Management, providing seasoned leadership and oversight
            across all verticals.
          </p>
          <br />
          <p>
            He is an investor, entrepreneur, philanthropist, fund manager and
            investment banking executive with over 26 years’ experience working
            for Fortune 50 Companies such as Deutsche Bank, JP Morgan, Bank of
            New York, Union Bank Switzerland, HSBC Investment Bank, to name a
            few.{' '}
          </p>
          <br />
          <p>
            Vandi is the partner of a 350-person management and technology
            consultancy firm, and a SME in fund management, VC, M&A, PE, advance
            derivatives, data science, AI/ML, blockchain. Vandi has been an
            advisor and coach for 50 financial institutions across EMEA region
            and 1500 Fund Managers globally.{' '}
          </p>
          <br />
          <p>
            He has brokered new business relations with revenue potentials over
            £10 Billion AUM and led successful global initiatives on compliance,
            M&A and capital market.
          </p>
          <br />
          <p>
            Simon&apos;s exceptional ability to foster meaningful relationships
            with investors, financial institutions, and equity groups
            controlling $80B AUM at the sponsorship level is a testament to his
            strategic vision and leadership.{' '}
          </p>
          <br />
          <p>
            His global reputation is anchored in his unmatched expertise in
            regulatory compliance and ESG investments, as well as his remarkable
            skill in identifying investment opportunities that align with
            optimal and consistent returns for MGI and its investors.{' '}
          </p>
        </div>

        <hr className="my-16" />

        {/* team 2 */}

        <div className="">
          <div className="m-auto max-w-fit text-center bg-slate-200 mx-3 mb-2 md:mb-0 md:float-right md:ml-8">
            <div className=" relatuve overflow-hidden">
              <div>
                <Image
                  className="hover:scale-110 transition duration-500 ease-in-out"
                  src="/about/team2.png"
                  alt="Doug Regan"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className=" p-5">
              <div className=" pt-1">Mr. Ostrowski </div>
              <div className="pb-4">
                <p className="text-gray-700  font-normal tracking-wider leading-4 text-sm">
                  Co-General Partner
                </p>
              </div>
            </div>
          </div>

          <p>
            Mr. Ostrowski as a co-General Partner to our Registered Investment
            Advisory firm offers his unique investment banking expertise to
            Sabur Private Wealth Management as a liaison to ultra high networth
            families and seven + figure entrepreneurs who wish to utilize our
            advanced tax planning and investment services.{' '}
          </p>
          <br />
          <p>
            In addition he is also the Managing Partner and Interim Chief
            Operating Officer of Manhattan Global Investments (MGI).
          </p>
          <br />
          <p>
            With over 25 years of experience in private equity investments,
            investment analysis, and capital stack structuring, he has a proven
            track record of directing private equity for placements, financings,
            and recapitalizations to position companies for profitability and
            growth.{' '}
          </p>
          <br />
          <p>
            Phil has managed large teams and developed strong relationships with
            investors and equity groups controlling $13B AUM at sponsorship
            level while targeting private and public sectors of institutional
            grade investments to identify opportunities that consistently align
            with optimal and consistent returns for both MGI and its investors.{' '}
          </p>
          <br />
          <p>
            Phil is skilled in private equity investments, investment analysis,
            due diligence, and relationship management. Phil has championed
            critical investment analysis roles with leading firms, spearheading
            the allocation of over $500M in acquisitions and portfolio holdings,
            while expanding market penetration to exceed $5B in total AUM across
            global markets
          </p>
        </div>

        <hr className="my-16" />

        <div className="text-center">
          <b className="text-xl text-my_dark_blue underline">
            Sabur Private Wealth Management
          </b>
          <p className="text-lg">
            Independent Registered Investment Advisory Firm
          </p>
          <p className="text-lg">
            950 E.State Hwy 114 Ste 160 Southlake, TX 76092
          </p>

          <div className="flex flex-col md:flex-row justify-between mt-5">
            <p>Ph: (469)702-8955 </p>
            <Link className="text-blue-400" href={''}>
              Email: Advice@SaburPWM.com
            </Link>
            <Link className="text-blue-400" href={''}>
              www.SaburPWM.com
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
