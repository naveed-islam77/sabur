import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const page = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto px-8 md:px-16 my-16 gap-4">
      {' '}
      <h1 className="text-2xl">
        FAMILY GOVERNANCE INCLUDING SELECTION/TRAINING OF TRUSTEES AND
        PROTECTORS
      </h1>
      <p>
        We act as a fiduciary and serve as a trustee when deemed appropriate by
        you. We review your current estate and wealth management plan, and all
        life insurance policies.
      </p>
      <p className="">
        We provide recommendations and advice regarding your estate and
        financial planning based on our findings and your future objectives,
        including a sufficiency assessment, using self-cancelling installment
        notes or intrafamily loans, and irrevocable life insurance trusts.
      </p>
      <p>
        We interface with your full team of attorneys and advisors in setting up
        grantor retained annuity trusts (GRATs), charitable lead trusts, family
        limited partnerships, qualified personal residence trusts and dynasty
        trusts, to name a few.
      </p>
      <p>
        We provide coaching and education to the next generation of family
        members so they gain an understanding of the current legacy plan and can
        develop their own strategic planning goals for the future.
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
