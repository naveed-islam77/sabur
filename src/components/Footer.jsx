'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-my_black">
      <div className="bg-gradient-to-l from-my_dark_blue to-my_black h-[350px] w-full flex justify-center items-center flex-col space-y-10">
        <p className="text-2xl md:text-5xl text-white font-extralight">
          START YOUR JOURNEY TODAY
        </p>

        <Link
          className="bg-white rounded-full text-my_dark_blue px-8 py-3 font-extralight text-lg hover:bg-my_yellow transition-all"
          href="https://calendly.com/saburpwm/intro-fifteen-min-call"
          target="_blank"
          rel="noopener"
        >
          SCHEDULE YOUR ZERO INCOME TAX STRATEGY SESSION
        </Link>
      </div>
      <div className="relative z-10 md:h-[750px] w-full flex flex-col justify-center items-center px-4">
        <div className="static md:absolute z-20 md:-top-10 w-[1400px] max-w-full md:max-w-[95%] md:min-h-[600px] shadow-2xl mx-4 bg-white font-extralight flex flex-col md:flex-row px-4 py-16 md:p-16 gap-16">
          <div className="w-full md:w-1/2 flex items-center md:items-start flex-col gap-3">
            <Link href="/">
              <Image src="/main-logo.png" alt="" width={80} height={80} />
            </Link>{' '}
            <p className="text-xl">
              Advanced.
              <br />
              Objective
              <br />
              Practical
            </p>
            <Link className="text-xl mb-8 font-medium text-my_yellow" href="">
              469.702.8955
            </Link>
            <Link
              className="bg-my_dark_blue px-8 py-3 w-fit rounded-full text-white mb-6 hover:bg-my_yellow transition-all"
              href="/contact"
            >
              CONTACT US
            </Link>
            <p className="text-sm text-center md:text-start uppercase">
              New Jersey | TEXAS | DUBAI | KARACHI
            </p>
            <p className="text-[9px] text-center md:text-start">
              SaburPWM refers to ARPP, LLC and all of its subsidiaries and
              affiliates, ARPP, LLC, also conducting advisory
              <br />
              business under the name of SaburPWM Sports and Entertaiment,
              provides investment advisory.family office,
              <br />
              and other services to individuals,families,and institutional
              clients,ARPP,LLC,also provides investment
              <br />
              advisory services to investment vehicles investing in private
              equity,real state and other investment
              <br />
              opportunities, ARPP, LLC is registered with the New Jersey and
              Texas Dept of securities as registered
              <br />
              investment advisor.
            </p>
          </div>
          <div className="w-full  md:w-1/2 flex flex-col md:flex-row justify-between items-center">
            <ul className="flex flex-col items-center md:items-end gap-8">
              <Link href="/family-office">Family Office</Link>
              <Link href="/wealth-management">Wealth Management</Link>
              <Link href="/family-office/entrepreneurs">Entrepreneurs</Link>
              <Link href="">CEO Founders</Link>
            </ul>
            <ul className="flex flex-col items-center md:items-end  gap-8">
              <Link href="/about">About Us</Link>
              <Link href="/about/team">Our Team</Link>
              <a target="_blank" href="/Sabur PWM.pdf">
                Authentic Fiduciary
              </a>
              <Link href="/about/carrers">Careers</Link>
              <Link href="">Office Locations</Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center font-extralight mt-auto py-4 gap-8  md:gap-20 md:h-[120px]">
          <Link
            className="md:hidden block text-xs"
            target="_blank"
            href="https://www.linkedin.com/in/sabur-wealth-enhancement-6506a020a/"
          >
            © 2024 Sabur PWM
          </Link>
          <ul className="flex justify-center flex-wrap gap-6 md:text-base text-xs">
            <Link
              className="hidden md:block"
              target="_blank"
              href="https://www.linkedin.com/in/sabur-wealth-enhancement-6506a020a/"
            >
              © 2024 Sabur PWM
            </Link>
            <Link
              className="hover:text-black transition-all"
              target="_blank"
              href="/TERMS OF USE -- SABURPWM.pdf"
            >
              Terms of Use
            </Link>
            <Link
              className="hover:text-black transition-all"
              target="_blank"
              href="/DISCLOSURES PAGE -- SABUR PWM.pdf"
            >
              Disclosures
            </Link>
            <Link
              className="hover:text-black transition-all"
              target="_blank"
              href="/Sabur pwm Privacy-Policy_effective-08.14.2023.pdf"
            >
              Privacy Policy and CCPA
            </Link>
            <Link
              className="hover:text-black transition-all"
              target="_blank"
              href="/SABUR PWM -Form-ADV2A-and-Appendix-08.14.23.pdf"
            >
              Form CRS
            </Link>
            <Link
              className="hover:text-black transition-all"
              target="_blank"
              href="/SABUR Client Relationship Summary -- FormCRS_Sabur_20230813.pdf"
            >
              Form ADV2A
            </Link>
          </ul>
          <div className="flex gap-8">
            <Link target="_blank"
              href="https://www.linkedin.com/in/sabur-wealth-enhancement-6506a020a">
            <Image src="/linkedin.png" alt="" width={24} height={24} />
            </Link>
            <Link target="_blank"
              href="https://twitter.com/finguru777">
            <Image src="/twitter.png" alt="" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
