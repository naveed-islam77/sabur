import React from "react";
import Link from "next/link";
import Image from "next/image";
const IncomeTax = () => {
  return (
    <main className="flex min-h-screen flex-col w-[1400px] max-w-full m-auto px-8 md:px-16 my-16 gap-4">
      <h1 className="text-2xl">
        INCOME TAX MITIGATION, CASH FLOW & LIQUIDITY MANAGEMENT
      </h1>
      <p>
        Where your CPA or Tax professionals expertise end to achieve a single
        digit or ZERO income tax liability that&apos;s where our tax mitigation
        services begin. We remove the guess work in utilizing every single IRC
        code for our client&apos;s exponentially reduced tax burden.
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
        <div className="hidden md:flex absolute w-96 h-96 bg-my_dark_blue -right-8 -bottom-8"></div>
        <Image
          className="relative z-10 shadow-2xl"
          src={"/services/6.jpg"}
          alt=""
          width={700}
          height={1000}
        />
      </div>

      <div className="leading-loose space-y-6 my-10">
        <p>
          “Dollar saved is a Dollar earned” is even more true than before. We
          help improve your Cash flow and liquidity management by rescuing tax
          dollars. This plays a crucial role in maximizing the effectiveness of
          financial planning, and unlocking newfound freedom and flexibility to
          achieve your financial goals. At Sabur PWM, we recognize the
          significance of comprehending and addressing cash flow and liquidity
          requirements as a fundamental aspect of our relationship with you.
        </p>
        <p>
          Many of our clients possess a personal-CEO mindset, understanding the
          value of managing cash in their personal lives and households. Sabur
          PWM provides a strategic approach to future-proofing against
          unpredictability and ensuring stability in the face of uncertainty. By
          prioritizing cash flow understanding and management via tax planning,
          our guidance empowers you to make informed decisions and take
          proactive steps towards securing your financial well-being.
        </p>
        <p>
          Sabur PWM encourages close collaboration with all clients, engaging
          with you during every stage of the planning process. By utilizing this
          philosophy, we can effectively determine and structure the ideal
          combination of cash flow and liquidity management strategies tailored
          to your specific circumstances.
        </p>
        <p>
          We firmly believe that when clients actively participate in the income
          tax planning process, they are more inclined to adopt, adapt, and
          remain committed to a purpose-driven financial plan. This active
          involvement fosters a sense of ownership and understanding, empowering
          clients to make informed decisions and take necessary actions to
          achieve their financial goals.
        </p>
        <p>
          Through our strategic technology partnerships, we harness the power of
          intuitive, comprehensive platforms that provide end-to-end solutions.
          These platforms seamlessly integrate various scenarios, allowing us to
          create a dynamic financial roadmap for cash flow and liquidity
          management.
        </p>
        <p>
          Our goal is to offer flexibility that enables real-time conversations
          between advisors and clients, facilitating prompt and meaningful
          discussions. With a holistic view of your financial landscape, you can
          gain the confidence and clarity needed to navigate your financial
          journey with greater precision and effectiveness.
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

export default IncomeTax;
