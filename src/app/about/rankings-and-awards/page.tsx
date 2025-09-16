'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RankingAndAwards() {
  return (
    <main className="flex min-h-screen flex-col px-6 w-[1400px] max-w-full m-auto">
      <section className="text-right bg-transparency relative pb-24 pr-10 text-white">
        <div className="absolute inset-0">
          <Image
            src="/rankings-and-awards/Test_Header.jpg"
            alt="background image"
            fill
          />
        </div>
        
        

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mt-8 pb-8"
        >
          <Link className=" text-2xl text-my_yellow" href={''}>
            About us
          </Link>
          <h2 className="text-3xl md:text-[60px] font-light mt-10 mb-6">
            RANKINGS & AWARDS <br />
          </h2>

          <p className="mb-6 z-10">
            Top Financial Advisors. Best Multi-Family Office.
          </p>

          
          <button className="group relative overflow-hidden rounded-full bg-my_dark_blue px-6 py-4 tracking-widest font-sans uppercase shadow  transition-all after:bg-orange-400 active:shadow-md active:ring-2 animated-button">
            <p className=" text-white transition-all group-active:scale-90">
            LET&apos;S TALK 
            </p>
          </button>
          
        </motion.div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <Image
            src="/rankings-and-awards/ria_firms_horizontal.png"
            width={288}
            height={105}
            alt="Imagen 1"
            className="mr-4 w-72 h-28"
          />
          <Image
            src="/rankings-and-awards/independent_horiz.png"
            width={392}
            height={106}
            alt="Imagen 2"
            className="w-72 h-28"
          />
        </div>
        <div className="mt-4 md:ml-auto">
          <Link className="text-right mr-16 text-my_yellow text- " href={''}>
            View Award Disclosures
          </Link>
        </div>
      </section>
      {/* ############# section #1  ############# */}
      <section className="my-10 ">
        <section className="flex flex-col md:flex-row md:items-start text-left justify-between">
          <Image
            src="/rankings-and-awards/img1.jpg"
            width={198}
            height={132}
            alt=""
            className=" rounded-md"
          />
          <div className="w-full md:w-2/3">
            <ul className="list-disc list-inside text-left ">
              <li className=" list-none mb-5 ">BARRON’S: TOP 100 RIA FIRMS</li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2022 #12 • 2021 #32 • 2020 #34
              </li>
              <li className=" list-none mb-5">
                BARRON&apos;S: TOP 100 INDEPENDENT FINANCIAL ADVISORS
              </li>
              <li className="list-none relative mb-5 opacity-60">
                <span className="inline-block align-middle mr-2">+</span>David
                Karp: 2022 #1 in VA and #15 in US • 2021 #2 in VA and #69 in US
              </li>
              <li className="list-none relative mb-5 opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Paul
                Pagnato: 2018 #16 • 2017 #19 • 2015 #28 • 2014 #36 • 2013 #66 •
                2012 #86
              </li>
              <li className=" list-none mb-5">
                BARRON&apos;S: TOP 1,200 FINANCIAL ADVISORS BY STATE
              </li>
              <li className="list-none relative mb-5 opacity-60">
                <span className="inline-block align-middle mr-2">+</span>David
                Karp: Virginia | 2023 #6 • 2022 #3 • 2021 #8 • D.C. | 2010 #10 •
                2011 #12
              </li>
              <li className="list-none relative mb-5 opacity-60">
                <span className="inline-block align-middle mr-2">+</span>W Janet
                Dougherty: Illinois | 2022 #31
              </li>
              <li className="list-none relative mb-5 opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Paul
                Pagnato: Virginia | 2019 #2 • 2018 #3 • 2016 #2 • 2015 #3 • 2014
                #2 • 2013 #5; D.C. | 2011 #6 • 2010 #3 • 2009 #9
              </li>
              <li className="list-none relative mb-5 opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Justin
                Berman: Georgia | 2018 #22 • 2017 #23
              </li>
              <li className=" list-none mb-5">
                BARRON&apos;S: TOP 100 WOMEN FINANCIAL ADVISORS
              </li>
              <li className="list-none relative mb-5 opacity-60">
                Wen Nottebohm: 2023 #52
              </li>
              <li className="list-none relative mb-5 opacity-60">
                <span className="inline-block align-middle mr-2">+</span>W Janet
                Dougherty: 2022 #60
              </li>
              <li className=" list-none mb-5">
                BARRON&apos;S: TOP 100 FINANCIAL ADVISORS
              </li>
              <li className="list-none relative my-5 p-4 opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Paul
                Pagnato: 2016 #67 • 2015 #82 • 2014 #85 • 2013 #96 • 2012 #86
              </li>
              <li className="list-none relative opacity-80 italic text-center">
                Firm and individual rankings developed by Barron&apos;s using a
                proprietary algorithm. Sabur PWM paid no application fee to
                participate.
              </li>
            </ul>

            <hr className=" w-full my-2" />
          </div>
        </section>
        {/* ############# section #2  ############# */}
        <section className="flex flex-col md:flex-row md:items-start text-left mt-8 justify-between my-10">
          <Image
            src="/rankings-and-awards/img2.jpeg"
            width={198}
            height={132}
            alt=""
            className=" rounded-md"
          />
          <div className="w-full md:w-2/3">
            <ul className="list-disc list-inside text-left ">
              <li className=" list-none my-5 ">FORBES: TOP RIA FIRMS</li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2022 #48
              </li>

              <li className=" list-none mb-5 ">
                FORBES: BEST-IN-STATE WEALTH ADVISORS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>W Janet
                Dougherty: Illinois | 2023 #33 • 2022 #31 • 2021 #28 • 2020 #102
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Chris
                DeMonte: Illinois | 2023 #22 • 2022 #32 • 2021 #41 • 2020 #70
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Kimberly DuBord: Illinois | 2023 #78 • 2022 #63
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Pat
                Biladeau: Illinois | 2023 #62 • 2022 #52
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Sarah
                Simon: California | 2023 #39
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Paul
                Pagnato: N. Virginia | 2022 #1 • 2021 #1 • 2020 #1 • 2019 #2 •
                2018 #2
              </li>

              <li className=" list-none my-5 ">
                FORBES: TOP WOMEN WEALTH ADVISORS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>W Janet
                Dougherty: 2023 #5 in IL • 2022 #14 in IL • 2021 #113 in US •
                2020 #704 in US
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Kimberly DuBord: 2023 # 12 in IL • 2022 #46 in IL
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Sarah
                Simon: 2023 #32 in N. CA
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Brooks
                Hays: 2023 #76 in N. CA
              </li>

              <li className=" list-none my-5 ">FORBES: TOP WEALTH ADVISORS</li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Paul
                Pagnato: 2021 #35 • 2020 #31 • 2019 #29 • 2018 #35 • 2017 #30 •
                2016 #35
              </li>

              <li className=" list-none my-5 ">
                FORBES: TOP NEXT-GEN WEALTH ADVISORS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Pat
                Biladeau: 2021 #148
              </li>
              <li className=" list-none my-5 ">
                FORBES: TOP WEALTH ADVISOR MOMS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>W Janet
                Dougherty: 2019
              </li>

              <li className="list-none relative opacity-80 italic text-center my-5">
                Algorithm based on qualitative and quantitative data developed
                by SHOOK Research. Sabur PWM paid no application fee to
                participate.
              </li>
            </ul>
            <hr />
          </div>
        </section>
        {/* ############# section #3  ############# */}
        <section className="flex flex-col md:flex-row items-start text-left justify-between my-10">
          <Image
            src="/rankings-and-awards/img3.jpg"
            width={198}
            height={132}
            alt=""
            className=" rounded-md"
          />
          <div className="w-full md:w-2/3">
            <ul className="list-disc list-inside text-left ">
              <li className=" list-none my-5 ">
                PRIVATE ASSET MANAGEMENT: BEST MULTI-FAMILY OFFICE $20B+
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2022 Short List
              </li>

              <li className=" list-none mb-5 ">
                PRIVATE ASSET MANAGEMENT: BEST HIGH-NET-WORTH INVESTMENT
                PLATFORM
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2021 Winner
              </li>

              <li className=" list-none mb-5 ">
                PRIVATE ASSET MANAGEMENT: PRIVATE WEALTH MANAGEMENT M&A DEAL OF
                THE YEAR
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2023 Winner • 2020 Winner
              </li>

              <li className=" list-none mb-5 ">
                PRIVATE ASSET MANAGEMENT: BEST RIA FOR HIGH-NET-WORTH CLIENTS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2019 Winner
              </li>

              <li className="list-none relative opacity-80 italic text-center m-5">
                Independent judges make determinations based on industry
                recommendations and a submitted application. Sabur PWM paid no
                application fee to participate.
              </li>

              <li className="list-none relative opacity- 80 italic text-center"></li>
            </ul>
            <hr />
          </div>
        </section>
        {/* ############# section #4  ############# */}
        <section className="flex flex-col md:flex-row items-start text-left my-8 justify-between">
          <Image
            src="/rankings-and-awards/img4.jpg"
            width={198}
            height={132}
            alt=""
            className=" rounded-md "
          />
          <div className="w-full md:w-2/3">
            <ul className="list-disc list-inside text-left ">
              <li className=" list-none my-5 ">
                FA MAGAZINE: TOP 50 FASTEST-GROWING RIAS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2022 #3 • 2021 #4
              </li>

              <li className=" list-none mb-5 ">
                FA MAGAZINE: ANNUAL RIA SURVEY & RANKING
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2022 #22 • 2021 #34; PagnatoKarp: 2020 • 2019 • 2018
              </li>

              <li className=" list-none mb-5 ">
                FINANCIAL PLANNING: TOP 150 FEE-ONLY RIAS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2022 #3 •Sabur PWM: 2021 #19 • Berman: 2021 #133
              </li>

              <li className=" list-none mb-5 ">
                FINANCIAL TIMES: TOP 300 REGISTERED INVESTMENT ADVISORS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Justin
                Berman: 2020 • 2019 • 2018 • 2017 • 2016 • 2015
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Paul
                Pagnato: 2016 • 2015
              </li>

              <li className="list-none relative opacity-70 italic text-center my-5">
                RIA Survey and Ranking: Firms that provide financial planning
                services complete survey of financial planning and related
                services. Top 50 RIAs: Determined by AUM provided in ADV.
                Sabur PWM paid no application fee to participate.
              </li>
            </ul>
            <hr />
          </div>
          {/* ############# section #5  ############# */}
        </section>
        <section className="flex flex-col md:flex-row items-start text-left my-10 justify-between">
          <Image
            src="/rankings-and-awards/img5.jpg"
            width={198}
            height={132}
            alt=""
            className=" rounded-md"
          />
          <div className="w-full md:w-2/3">
            <ul className="list-disc list-inside text-left ">
              <li className=" list-none my-5 ">
                FAMILY WEALTH REPORT: BEST MULTI-FAMILY OFFICE ($15B+)
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2022 Finalist
              </li>

              <li className=" list-none mb-5 ">
                FAMILY WEALTH REPORT: BEST MULTI-FAMILY OFFICE (NEW ENTRANT)
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                PagnatoKarp: 2020 Winner • PagnatoKarp: 2018 Finalist
              </li>

              <li className=" list-none mb-5 ">
                FAMILY WEALTH REPORT: WEALTH PLANNING
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2022 Finalist
              </li>

              <li className=" list-none mb-5 ">
                FAMILY WEALTH REPORT: PRIVATE INVESTMENT PLATFORM
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2022 Finalist
              </li>

              <li className=" list-none mb-5 ">
                FAMILY WEALTH REPORT: RISING STAR UNDER 40
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Sarah
                Simon: 2022 Finalist
              </li>

              <li className=" list-none mb-5 ">
                FAMILY WEALTH REPORT: OUTSTANDING CONTRIBUTION TO WEALTH
                MANAGEMENT THOUGHT LEADERSHIP
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>Jack
                Ablin: 2020 Finalist
              </li>

              <li className="list-none relative opacity-80 italic text-center my-5">
                Judging panels make choices based on survey submissions with
                focus on client experience and not quantitative performance
                metrics. Sabur PWM paid no application fee to participate.
              </li>
            </ul>
            <hr />
          </div>
        </section>
        {/* ############# section #6  ############# */}
        <section className="flex flex-col md:flex-row items-start text-left justify-between my-10">
          <Image
            src="/rankings-and-awards/img6.jpeg"
            width={198}
            height={132}
            alt=""
            className=" rounded-md"
          />
          <div className="w-full md:w-2/3">
            <ul className="list-disc list-inside text-left ">
              <li className=" list-none my-5 ">
                CRAIN&apos;S CHICAGO BUSINESS: TOP MONEY MANAGERS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>
                Sabur PWM: 2022 #17 • 2021 #21
              </li>

              <li className=" list-none my-5 ">
                CRAIN&apos;S CHICAGO BUSINESS: NOTABLE GENERAL COUNSELS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle mr-2">+</span>William
                Rudnick: 2019
              </li>

              <li className=" list-none my-5 ">
                USA TODAY: BEST FINANCIAL ADVISORY FIRMS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>
                Sabur PWM: 2023
              </li>

              <li className="list-none relative opacity-80 italic text-center my-5">
                Top Money Managers data as of 12/21/2022. Best in class
                executives chosen based on nomination materials, leadership in
                their organization, activity in professional groups, civic and
                community initiatives. USA Today – Peer/Client Recommendations
                collected via independent survey sent to 20,000+ clients and
                financial advisors. Growth of Assets under Management (AUM)
                analyzed both short (12 months) and long term (5-years) based on
                publicly available data. Sabur PWM paid no application fee to
                participate.
              </li>
            </ul>
            <hr />
          </div>
        </section>
        {/* ############# section #7   ############# */}
        <section className="flex flex-col md:flex-row items-start text-left justify-between my-10">
          <Image
            src="/rankings-and-awards/img7.jpg"
            width={198}
            height={132}
            alt=""
            className=" rounded-md"
          />
          <div className="w-full md:w-2/3">
            <ul className="list-disc list-inside text-left ">
              <li className=" list-none my-5 ">RIA INTEL: CIO OF THE YEAR</li>
              <li className="list-none mb-5 relative opacity-60">
                Jack Ablin: 2022
                <span className="inline-block align-middle  mr-2">+</span>
              </li>
              <li className="list-none relative opacity-80 italic text-center my-5">
                Qualitative determination based on industry references and
                recommendations. Sabur PWM paid no application fee to participate.
              </li>

              <li className=" list-none my-5 ">
                THE FAMILY WEALTH ALLIANCE: YOUNG PROFESSIONALS AWARD
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Oliver
                Rose: 2022
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>
                Whitney Webb: 2022
              </li>
              <li className="list-none relative opacity-80 italic text-center my-5">
                Honorees chosen based on proprietary scoring system, independent
                determination, and significant contribution to the industry.
                Sabur PWM paid no application fee to participate.
              </li>

              <li className=" list-none my-5 ">
                CITYWEALTH TOP 100 WEALTH ADVISORS IN NORTH AMERICA
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Jack
                Ablin: 2010-2022, 2006
              </li>

              <li className=" list-none my-5 ">
                PALM BEACH 100 MOST INFLUENTIAL BUSINESS LEADERS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Bob
                Dunkin: 2020-2022
              </li>

              <li className=" list-none my-5 ">ATLANTA MAGAZINE TOP LEADER</li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Jack
                Sawyer: 2019-2023 Top 500 Most Powerful Leaders
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Jack
                Sawyer: 2022 Atlanta’s Top 50 Most Powerful People
              </li>

              <li className=" list-none my-5 ">
                PALM BEACH ILLUSTRATED TOP LAWYERS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Alyse
                Comiter: 2021, Rising Star 2016-2020
              </li>

              <li className=" list-none my-5 ">
                MINNESOTA’S 500 MOST POWERFUL BUSINESS LEADERS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>
                Patrick Mahoney: 2021-2022
              </li>

              <li className="list-none relative opacity-80 italic text-center my-5">
                Awards based on independent judges determination as to
                excellence in achievement innovation, expertise and service.
                Sabur PWM paid no application fee to participate.
              </li>
            </ul>
            <hr />
          </div>
        </section>

        {/* ############# section #8  ############# */}
        <section className="flex flex-col md:flex-row items-start text-left my-10 justify-between">
          <Image
            src="/rankings-and-awards/img8.png"
            width={198}
            height={132}
            alt=""
            className="rounded-md"
          />
          <div className="w-full md:w-2/3">
            <ul className="list-disc list-inside text-left ">
              <li className=" list-none my-5 ">
                WASHINGTONIAN: TOP FINANCIAL ADVISERS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Amanda
                Plonski: 2022
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Paul
                Pagnato: 2019 • 2016
              </li>

              <li className=" list-none my-5 ">
                WASHINGTON BUSINESS JOURNAL: 40 UNDER 40 HONOREE
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Amanda
                Plonski: 2022
              </li>

              <li className="list-none relative opacity-80 italic text-center my-5">
                Award winners determined by surveys of local fee-only advisors.
                Sabur PWM paid no application fee to participate.
              </li>
            </ul>
          </div>
        </section>
        {/* ############# section #9  ############# */}
        <section className="flex flex-col md:flex-row items-start text-left justify-between my-10">
          <Image
            src="/rankings-and-awards/img9.jpeg"
            alt=""
            width={198}
            height={132}
            className="rounded-md"
          />
          <div className="w-full md:w-2/3">
            <ul className="list-disc list-inside text-left ">
              <li className=" list-none my-5 ">
                NORTHERN VIRGINIA MAGAZINE: TOP FINANCIAL PROFESSIONALS
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>David
                Karp: 2022 • 2021 • 2020 • 2019
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>
                Stephen Berardi: 2022 • 2021
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Amanda
                Plonski: 2021
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Oleg
                Ikhelson: 2020 • 2019
              </li>
              <li className="list-none mb-5 relative opacity-60">
                <span className="inline-block align-middle  mr-2">+</span>Paul
                Pagnato: 2019 • 2018 • 2017
              </li>

              <li className="list-none relative opacity-80 italic text-center my-7">
                Surveys submitted by industry peers as to excellence in fields
                of broker, financial planner and investment adviser. Sabur PWM
                paid no application fee to participate.
              </li>
            </ul>
            <hr />
          </div>
        </section>
        <div className="flex justify-center">
          <Link className="text-center text-my_yellow mt-8 mb-40" href={''}>
            View Award Disclosures
          </Link>
        </div>
      </section>
    </main>
  );
}
