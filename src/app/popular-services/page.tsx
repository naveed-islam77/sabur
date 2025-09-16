'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
const Services = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto md:px-16 my-16 px-8">
      <h1 className="text-4xl">Popular Services</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-items-center my-16">
        {' '}
        <Link className="w-full" href={'/popular-services/income-tax'}>
          <div className="bg-[url('/services/1.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
                <li>HEDGE FUNDS</li>
                <li>FAMILY OFFICES</li>
              </ul>

              <h2 className="text-2xl mt-auto">
                INCOME TAX MITIGATION, CASH FLOW & LIQUIDITY MANAGEMENT
              </h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/gains-tax'}>
          <div className="bg-[url('/services/2.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                {/* <li>FOUNDATIONS AND ENDOWMENTS</li>
                <li>HEDGE FUNDS</li>
                <li>FAMILY OFFICES</li> */}
              </ul>

              <h2 className="text-2xl mt-auto">
                CAPITAL GAINS TAX PLANNING FOR PERSONAL AND REAL PROPERTY
              </h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/asset-law'}>
          <div className="bg-[url('/services/3.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>

                <li>FAMILY OFFICES</li>
              </ul>

              <h2 className="text-2xl mt-auto">ASSET / LAW SUIT PROTECTION</h2>
            </div>
          </div>
        </Link>
        <Link
          className="w-full"
          href={'/popular-services/bankruptcy-avoidance'}
        >
          <div className="bg-[url('/services/4.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">Bankruptcy Avoidance.</h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/pre-tax'}>
          <div className="bg-[url('/services/5.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">
                Pre-Tax investing to double your ROI in any investment of your
                choice
              </h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/family-business'}>
          <div className="bg-[url('/services/6.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">
                FAMILY BUSINESS CONSULTING AND SUCCESSION PLANNING
              </h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/stress-testing'}>
          <div className="bg-[url('/services/7.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">Stress Testing</h2>
            </div>
          </div>
        </Link>
        <Link
          className="w-full"
          href={'/popular-services/investment-management'}
        >
          <div className="bg-[url('/services/8.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">Investment Management</h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/data-aggregation'}>
          <div className="bg-[url('/services/9.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">
                Data Aggregation: Consolidated reporting and advising on overall
                assets
              </h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/concierge-medicine'}>
          <div className="bg-[url('/services/10.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">Concierge Medicine</h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/income-tax-planning'}>
          <div className="bg-[url('/services/11.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">
                Income tax planning, compliance, and consulting
              </h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/risk-management'}>
          <div className="bg-[url('/services/12.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">
                Risk Management (Life Insurance, Liability, Property and
                Casualty, Medical)
              </h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/family-governance'}>
          <div className="bg-[url('/services/13.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">
                Family Governance including Selection/Training of Trustees and
                Protectors
              </h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/philanthropic'}>
          <div className="bg-[url('/services/14.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">
                Philanthropic Oversight and Private Foundation Advisory
              </h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/balance-sheet'}>
          <div className="bg-[url('/services/15.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">
                Balance Sheet and Cash Flow Management (this includes Full
                service Bookkeeping)
              </h2>
            </div>
          </div>
        </Link>
        <Link className="w-full" href={'/popular-services/lifestyle-asset'}>
          <div className="bg-[url('/services/16.jpg')] bg-center bg-cover flex justify-end items-center  w-full">
            <div className="bg-black  px-4 py-8 backdrop-blur-sm bg-opacity-30 text-white  h-[260px] flex w-full flex-col">
              <ul className="text-sm font-bold space-y-2">
                <li>FAMILIES & INDIVIDUALS</li>
                <li>HEDGE FUNDS</li>

                <li>FAMILY OFFICES</li>
                <li>FOUNDATIONS AND ENDOWMENTS</li>
              </ul>

              <h2 className="text-2xl mt-auto">
                Lifestyle Asset Management (Residences, Vehicles, Aircraft,
                Yachts, Artwork, Membership Clubs)
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Services;
