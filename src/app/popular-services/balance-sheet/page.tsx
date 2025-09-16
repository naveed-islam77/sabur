import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const page = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto px-8 md:px-16 my-16 gap-4">
      {' '}
      <h1 className="text-2xl">
        BALANCE SHEET AND CASH FLOW MANAGEMENT (THIS INCLUDES FULL SERVICE
        BOOKKEEPING)
      </h1>
      <p className="">
        We provide outsourced accounting solutions for clients who would like
        bill payment and bookkeeping services. We obtain and review all invoices
        and, after appropriate approvals, prepare disbursements drawn on various
        accounts for those payments.
      </p>
      <p>
        We transfer funds from interest bearing accounts to checking accounts to
        maximize cash efficiency. We receive monies on your behalf from various
        sources and deposit them into the appropriate bank accounts.{' '}
      </p>
      <p>
        We maintain the general ledgers and reconcile all bank accounts on a
        monthly basis. We prepared detailed listing of opening balances, cash
        receipts, cash disbursements, transfers, and ending balances for each
        bank account along with cash budget versus actual reports.
      </p>
      <p>
        We prepare cash flow projections based on our understanding of your cash
        inflows and outflows. By knowing your cash flow management, we are able
        to understand your immediate and long-term liquidity needs and ensure
        those funds are maintained in the appropriate asset class.
      </p>
      <p>
        We work with your banking team to provide appropriate financing
        arrangements (lease, loan, etc.) to meet your current liquidity needs.
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
          src={'/services/2.jpg'}
          alt=""
          width={700}
          height={1000}
        />
      </div>
    </main>
  );
};

export default page;
