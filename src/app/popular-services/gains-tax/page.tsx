import React from "react";
import Link from "next/link";
import Image from "next/image";
const Gains = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto px-8 md:px-16 my-16 gap-4">
      <h1 className="text-2xl">
        CAPITAL GAINS TAX PLANNING FOR PERSONAL AND REAL PROPERTY
      </h1>
      <p>
        Over 15 little known strategies in the IRC can help you avoid capital
        gains taxes on Real and Personal property regardless of the length of
        your ownership. Our peculiar approach to tax planning and much more has
        made us one of the top sought after advisory firms in the nation and
        worldwide.
      </p>

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

      <div className="my-16 relative w-fit">
        <div className=" hidden md:flex absolute w-96 h-96 bg-my_dark_blue -right-8 -bottom-8"></div>
        <Image
          className="relative z-10 shadow-2xl"
          src={"/services/7.jpg"}
          alt=""
          width={700}
          height={1000}
        />
      </div>

      <div className="leading-loose space-y-6 my-10">
        <p>
          At Sabur PWM Family Office, we believe in the power of Tax Planning to
          power all the essential components of a comprehensive wealth
          management plan. Our dedicated team understands that your investments,
          taxes, estates, and corporate trusts are integral pieces of your
          financial journey, and we are here to guide you every step of the way.
          Think of financial planning as your personalized roadmap, designed to
          ensure that your long-term requirements and goals are not only
          understood but also met with precision and care.
        </p>
        <p>
          With our expertise in private wealth management, we aim to provide you
          with a clear understanding of your pre and post tax liquidity events
          while simultaneously crafting a strategic roadmap to lead you towards
          designing your generational future. We know that your financial
          aspirations are unique, no matter how unique your specific goal or
          your need for wealth management services. At Sabur PWM Family Office,
          our commitment is to tailor our approach to your individual needs,
          ensuring that every aspect of your financial plan is personalized and
          aligned with your aspirations.
        </p>
        <p>
          Through our inviting and informative approach, we are dedicated to
          empowering you with the knowledge and guidance needed to make informed
          decisions about your financial future. Together, we will navigate the
          complexities of the US Tax code, providing you with the peace of mind
          and confidence to pursue your dreams with clarity and purpose. Join us
          on this transformative journey and experience the true potential of
          tax planning with Sabur PWM Family Office.
        </p>
        <p>
          At Sabur PWM Family Office, we understand that the sale of a business,
          crypto currency, appreciated stock or real estate is not just an
          isolated event, but a crucial part of your wealth building process. We
          firmly believe that advanced tax planning is the foundation for a
          successful and rewarding long term generational wealth strategy.
        </p>
        <p>
          With our advanced use of the over 15 little known capital gains tax
          mitigation expertise, we recognize that your liquidity events serve as
          a means to achieve your broader financial goals. That&apos;s why we
          prioritize the development of a robust complete solutions plan that
          acts as a guiding framework for your wealth journey. By taking the
          time to understand your unique circumstances, aspirations, and risk
          tolerance, we can tailor a unique strategy that aligns with your
          specific needs.
        </p>
        <p>
          Our team at Sabur PWM Family Office recognizes that any type of wealth
          planning is a multifaceted process that goes beyond the basics.
          Whether you require guidance on foundational estate planning
          principles or find yourself navigating complex assets, intricate
          family dynamics, or unique circumstances such as special needs or
          medical issues, we are here to support you every step of the way.
        </p>
        <p>
          Our experienced advisors understands that planning is not a
          one-size-fits-all solution. We believe in working collaboratively with
          you to develop a customized plan that addresses your specific needs
          and prepares you for a multitude of life scenarios. By taking the time
          to understand your individual circumstances, goals, and aspirations,
          we can create a complete solutions plan that reflects your unique
          situation.
        </p>
        <p>
          Our team of CPA&apos;s, Tax attorney&apos;s, Enrolled agents and other
          tax planning experts recognize that each client has unique
          circumstances, goals, and aspirations. We work closely with you to
          gain a deep understanding of your financial situation, enabling us to
          develop a customized tax plan tailored to your specific needs. By
          analyzing your current financial position and projecting into the
          future, we can provide valuable insights into what your tax situation
          may look like down the line.
        </p>
        <p>
          Tax planning is not just about minimizing tax liability; it&apos;s
          about strategically structuring your finances to maximize your future
          wealth. We will guide you through various tax strategies and
          opportunities that align with your long-term goals, ensuring that the
          decisions you make today have a positive impact on your financial
          well-being tomorrow.
        </p>
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

export default Gains;
