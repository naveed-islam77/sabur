import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const page = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto px-8 md:px-16 my-16 gap-4">
      {' '}
      <h1 className="text-2xl">
        PHILANTHROPIC OVERSIGHT AND PRIVATE FOUNDATION ADVISORY
      </h1>
      <p>
        We assist with your family philanthropy, including foundation
        management, personal giving, proper structuring, and complex compliance
        issues relating to private foundations.
      </p>
      <p className="">
        We assist in the structuring of the proper charitable vehicle (e.g.,
        donor advised funds, private foundations) as well as placing the
        necessary insurance coverage for directors and officers.
      </p>
      <p>
        We assist you in your foundation governance and selection of the board
        members. We work with you to avoid any conflicts of interest issues with
        disqualified persons, jeopardizing investments and excess business
        holdings.{' '}
      </p>
      <p>
        We advise you on minimizing the tax on net investment income and taxes
        on undistributed income. We maintain proper records to meet IRS
        reporting requirements. We facilitate discussions with family members
        and the foundation board on multigenerational objectives.
      </p>
      <div className="mt-4">
        {' '}
        <Link
          target="_blank"
          rel="noopener"
          href={'https://calendly.com/saburpwm/intro-fifteen-min-call'}
          className="text-white px-8 py-3 font-extralight bg-my_dark_blue rounded-full text-lg"
        >
          CONNECT WITH OUR TEAM
        </Link>
      </div>
      <div className="my-16 relative w-fit">
        <div className=" hidden md:flex absolute w-96 h-96 bg-my_dark_blue -right-8 -bottom-8"></div>
        <Image
          className="relative z-10 shadow-2xl"
          src={'/services/3.jpg'}
          alt=""
          width={700}
          height={1000}
        />
      </div>
    </main>
  );
};

export default page;
