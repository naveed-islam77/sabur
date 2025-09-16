import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const page = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto px-8 md:px-16 my-16 gap-4">
      {' '}
      <h1 className="text-2xl">
        DATA AGGREGATION: CONSOLIDATED REPORTING AND ADVISING ON OVERALL ASSETS
      </h1>
      <p>
        We reconcile brokerage and investment accounts, hedge fund and private
        equity investments (capital contributions and distributions, net asset
        values) and direct investments. We track and monitor capital commitments
        and funding requirements related to all fund and private investments.
      </p>
      <p>
        We prepare monthly budget versus actual expenses, cash flow reports and
        a financial Snapshot. We prepare quarterly balance sheets and statements
        of revenue and expenses, and an annual Financial Organizer for internal
        information purposes. These reports are customized to fit your specific
        needs.
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
          src={'/services/7.jpg'}
          alt=""
          width={700}
          height={1000}
        />
      </div>
    </main>
  );
};

export default page;
