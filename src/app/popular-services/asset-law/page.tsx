import React from "react";
import Link from "next/link";
import Image from "next/image";
const Asset = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto px-8 md:px-16 my-16 gap-4">
      <h1 className="text-2xl">ASSET / LAW SUIT PROTECTION</h1>
      <p>
        Protect personal and business assets from 1st and 3rd party creditors,
        including spouses and child support.
      </p>

      <div className="my-16 relative w-fit">
        <div className=" hidden md:flex absolute w-96 h-96 bg-my_dark_blue -right-8 -bottom-8"></div>
        <Image
          className="relative z-10 shadow-2xl"
          src={"/services/8.jpg"}
          alt=""
          width={700}
          height={1000}
        />
      </div>

      <div className="leading-loose space-y-6 my-10">
        <p>
          On your journey to generational wealth building, many will try to
          steal and or abscond with what you amassed for yourself and or your
          family. Most of us have either heard or seen a neighbor or a loved one
          go thru a divorce and in the process lose almost everything they
          worked all their lives to build and protect. Divorce attorneys
          advertising {"we specialize in high net worth divorces"} are simply
          looking for a LARGE pay day from your / families life savings. There
          are several strategies that can protect your personal and business
          assets from third party creditors, current and ex-spouses and even
          {"child support"} orders.
        </p>
        <p>
          Imagine a future without worry from expensive lawsuits, divorces,
          ex-partners, disgruntled employees and post divorce orders too
          cumbersome to manage. {"Bubble wrap"} your fragile assets from the
          reach of hungry wolves in expensive suits and black robes.
        </p>
        <p>
          <span className="font-bold">
            And Why You Should Make Sure You Are Asset Protected
          </span>{" "}
          What an open question it is to ask:
          <span className="font-bold"> What is Asset Protection?</span> Has
          anyone asked you that question before? If not you are like 99% of the
          rest of the American public who are also not asset protected. Core
          asset protection revolves around protecting yourself from future
          creditors who can sue you typically for negligence. Our definition of
          asset protection is different than anyone else in the country:{" "}
          <span className="italic font-bold">
            “Asset protection is protecting your wealth from anyone or anything
            that can take your money.”
          </span>
        </p>
        <ul className="font-bold">
          Who does this include that you normally have not thought of before?
        </ul>
        <div className="ml-6">
          <li className="">
            The US and State Government through{" "}
            <span className="font-bold underline">income taxes</span>
          </li>
          <li>
            The US and State Government through{" "}
            <span className="font-bold underline">estate taxes</span>
          </li>
          <li>
            The <span className="font-bold underline">stock market</span> when
            it declines
          </li>
          <li>
            <span className="font-bold underline">Medical expenses</span> like
            the inevitable long term care expenses everyone will have in
            retirement
          </li>
          <li>
            The US and State Government through{" "}
            <span className="font-bold underline">capital gains taxes</span>
          </li>
        </div>
        <p>
          Think about it, who is your number one guaranteed creditor every year?
          The US Government.
        </p>
        <p>
          When the stock market in 2000-2002 went in the tank, did you lose
          money? Is that more likely to happen in any given year than a lawsuit?
        </p>
        <p>
          When clients pay $4,500 a month to stay in a nursing home, does that
          expense decrease their family&apos;s wealth?
        </p>
        <p>Same question for estate taxes and capital gains taxes.</p>
        <p>
          If there were simple and legal ways for you to lower your income
          taxes, invest in the stock market where you could receive the gains
          without fear of losing principal in down markets, if you could
          mitigate your long term care costs, if you could defer or avoid
          capital gains taxes when selling an appreciated asset, wouldn&apos;t
          you want to know about those solutions?
        </p>
        <p>
          Those are just some of the topics I&apos;ll be talking about in my
          periodic articles. In addition to that I consider myself a “domestic”
          asset protection specialist and will be educating you on how to use
          domestic planning strategies for asset protection.
        </p>
        <p>
          If you have any amount of wealth, you do need asset protection. Asset
          protection can be simple or complicated, expensive or not with advance
          planning. Your eyes will be opened up to the liabilities that could
          cause you to lose your money to creditors and the tools to protect
          yourself. When you become educated on the concept of global asset
          protection, then you can decide what, if anything, you need to do to
          protect yourself and your family.
        </p>
        <p className="font-bold">Questionable AP Planning to Stay Away From</p>
        <p>
          Like with anything in life, you can find good and bad people to help
          you with your problems. There are advisors out there that you will
          thank every day of your life for what they&apos;ve done to help you
          and there are others you&apos;ll wish you never heard of or worked
          with because of the terrible advice that was given (and the
          consequences of that advice or worst, the lies that were told or the
          fraud that was committed).
        </p>
        <p>
          We consider the following to be “Scam” (a fraudulent business scheme;
          a swindle) to define what we believe are plans you should stay away
          from, but for “asset protection” reasons, we thought “garbage” seemed
          a bit less risky.
        </p>
        <p className="font-bold"></p>
      </div>

      <div className="mt-4">
        {" "}
        <Link
          target="_blank"
          rel="noopener"
          href={"https://calendly.com/saburpwm/intro-fifteen-min-call"}
          className="text-white px-8 py-3 font-extralight bg-my_dark_blue rounded-full text-lg"
        >
          CONNECT WITH OUR TEAM
        </Link>
      </div>
    </main>
  );
};

export default Asset;
