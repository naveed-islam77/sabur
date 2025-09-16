import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const page = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto px-8 md:px-16 my-16 gap-4">
      {' '}
      <h1 className="text-2xl">
        RISK MANAGEMENT (LIFE INSURANCE, LIABILITY, PROPERTY AND CASUALTY,
        MEDICAL)
      </h1>
      <p>
        We work with you and your insurance broker to ensure that the decisions
        you have made regarding your various insurance needs have been
        implemented. We review your balance sheet and ensure that all of your
        assets are covered under the insurance policies in place and that your
        umbrella policy provides adequate coverage.
      </p>
      <p>
        As your assets grow, we monitor the policies and update your insurance
        broker so new assets get added to the policies. In the areas of artwork
        and collectibles, we assist in cataloging your asset list and coordinate
        with appraisers where appropriate. We work to ensure that you have the
        best coverage in place in the event of a catastrophe.
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
          src={'/services/5.jpg'}
          alt=""
          width={700}
          height={1000}
        />
      </div>
    </main>
  );
};

export default page;
