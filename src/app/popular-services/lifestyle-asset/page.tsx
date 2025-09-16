import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const page = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto px-8 md:px-16 my-16 gap-4">
      {' '}
      <h1 className="text-2xl">
        LIFESTYLE ASSET MANAGEMENT (RESIDENCES, VEHICLES, AIRCRAFT, YACHTS,
        ARTWORK, MEMBERSHIP CLUBS)
      </h1>
      <p>
        We identify the best service providers that will enhance your family’s
        quality of life. Our range of concierge services include travel and
        event planning, education advisory, coordination of moving into/out of a
        home, negotiation with vendors and public relations.
      </p>
      <p>
        We handle all paperwork, monetary aspects and research of service
        providers so you can make informed decisions.{' '}
      </p>
      <p>
        Without proper attention in these areas, you run the risk of having
        unintended liabilities, overpayments and inefficiencies. We handle all
        of your private travel management and medical advisory services.
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
          src={'/services/1.jpg'}
          alt=""
          width={700}
          height={1000}
        />
      </div>
    </main>
  );
};

export default page;
