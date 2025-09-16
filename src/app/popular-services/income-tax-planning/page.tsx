import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const page = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto px-8 md:px-16 my-16 gap-4">
      {' '}
      <h1 className="text-2xl">
        INCOME TAX PLANNING, COMPLIANCE, AND CONSULTING
      </h1>
      <p>
        We prepare federal and state individual and business income tax returns,
        including the preparation of extensions, as needed. We work proactively
        to plan your income tax projections and estimated payments so that you
        are always minimizing the amount of taxes paid at any particular point
        in the year, including the minimization of the alternative minimum tax
        and incentive stock option planning.
      </p>
      <p className="">
        We review your cash inflows and outflows to ensure all taxable income
        and tax deductible expenses are being accounted for. We coordinate your
        information needed for tax filings and facilitate your tax payments.
      </p>
      <p>
        Upon commencing our engagement, we review your prior year federal and
        state individual and business income tax returns and file any amendments
        that might be needed. We assist with federal or state tax audits
        relating to years we are responsible for or years prior to our
        involvement in servicing your account.{' '}
      </p>
      <p>
        We work with you to maintain an electronic calendar that summarizes your
        day count by state. We also maintain and store any necessary
        documentation to support the dates noted in your calendar.
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
          src={'/services/6.jpg'}
          alt=""
          width={700}
          height={1000}
        />
      </div>
    </main>
  );
};

export default page;
