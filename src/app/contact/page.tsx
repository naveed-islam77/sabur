"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import Image from "next/image";
import { validationSchema } from "../../validation/contactValidation";
import Spinner from "../../components/Spinner";
import Sent from "../../components/Sent";
import axios from "axios";
interface ContactValues {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

export default function WealthManagement() {
  const [sentStatus, setSentStatus] = useState(false);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const assetValues = [
    "$3MM - $10MM",
    "$10MM - $50MM",
    "$50MM+",
    "Pre-Liquidity",
  ];

  const initialServices = [
    { id: 1, name: "ASSET / LAW SUIT PROTECTION", selected: false },
    { id: 2, name: "BALANCE SHEET AND CASH FLOW MANAGEMENT", selected: false },
    { id: 3, name: "Bankruptcy Avoidance", selected: false },
    { id: 4, name: "CONCIERGE MEDICINE", selected: false },
    {
      id: 5,
      name: "DATA AGGREGATION: CONSOLIDATED REPORTING AND ADVISING ON OVERALL ASSETS",
      selected: false,
    },
    {
      id: 6,
      name: "FAMILY BUSINESS CONSULTING AND SUCCESSION PLANNING",
      selected: false,
    },
    {
      id: 7,
      name: "FAMILY GOVERNANCE INCLUDING SELECTION/TRAINING OF TRUSTEES AND PROTECTORS",
      selected: false,
    },
    { id: 16, name: "PORTFOLIO STRESS TESTING", selected: false },
    { id: 15, name: "RISK MANAGEMENT", selected: false },
    {
      id: 8,
      name: "CAPITAL GAINS TAX PLANNING FOR PERSONAL AND REAL PROPERTY",
      selected: false,
    },
    {
      id: 9,
      name: "INCOME TAX MITIGATION, CASH FLOW & LIQUIDITY MANAGEMENT",
      selected: false,
    },
    {
      id: 10,
      name: "INCOME TAX PLANNING, COMPLIANCE, AND CONSULTING",
      selected: false,
    },
    { id: 11, name: "INVESTMENT MANAGEMENT", selected: false },
    { id: 12, name: "LIFESTYLE ASSET MANAGEMENT", selected: false },
    {
      id: 13,
      name: "PHILANTHROPIC OVERSIGHT AND PRIVATE FOUNDATION ADVISORY",
      selected: false,
    },
    {
      id: 14,
      name: "Pre-Tax investing to double your ROI in any investment of your choice",
      selected: false,
    },
  ];

  const [services, setServices] = useState(initialServices);

  const handleServiceClick = (id: number) => {
    const updatedServices = services.map((service) => {
      if (service.id === id) {
        return { ...service, selected: !service.selected };
      }
      return service;
    });
    setServices(updatedServices);
  };

  const {
    values,
    errors,
    touched,

    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      asset: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  async function onSubmit(value: any, action: any) {
    try {
      const selected = services.filter((service) => service.selected);
      const userData = { values, selected };
      setSentStatus(true);

      await axios.post("/api/contact", userData);

      setSentStatus(false);
      setConfirmStatus(true);
      handleSent();

      // action.resetForm();
      setServices(initialServices);
    } catch (error) {
      console.error(error);
    }
    // action.resetForm();
  }

  function handleSent() {
    setTimeout(() => {
      setConfirmStatus(false);
    }, 2000);
  }
  return (
    <main className="flex min-h-screen flex-col px-6 py-16">
      {sentStatus && <Spinner />}

      {confirmStatus && <Sent />}

      <div className="text-center">
        <h1 className="font-extralight text-3xl mb-8">
          HOW MAY Sabur PWM SERVE YOU?
        </h1>
        <div className="">
          Call
          <Link
            className="font-medium text-lg text-blue-800 transition-all hover:underline"
            href=""
          >
            {" "}
            469-702-8955
          </Link>{" "}
          or <br />
          <Link
            className="font-medium text-lg text-blue-800 transition-all hover:underline"
            href="mailto:advice@saburpwm.com"
          >
            advice@saburpwm.com
          </Link>{" "}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="m-auto w-[1000px] max-w-full mt-16 flex flex-col gap-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="">
            {" "}
            <input
              className="border-[1px] border-gray-400 bg-gray-100 h-8 px-2 text-black w-full"
              name="fname"
              value={values.fname}
              onChange={handleChange}
              type="text"
              placeholder="FIRST NAME"
            />
            {touched.fname && errors.fname && (
              <div className="flex items-center gap-2 mt-1">
                <Image src={"/exclamation.png"} alt="" width={12} height={12} />
                <p className="text-red-500 text-sm"> {errors.fname} </p>
              </div>
            )}
          </div>
          <div className="">
            {" "}
            <input
              className="border-[1px] border-gray-400 bg-gray-100 h-8 px-2 text-black w-full"
              name="lname"
              value={values.lname}
              onChange={handleChange}
              type="text"
              placeholder="LAST NAME"
            />
            {touched.lname && errors.lname && (
              <div className="flex items-center gap-2 mt-1">
                <Image src={"/exclamation.png"} alt="" width={12} height={12} />
                <p className="text-red-500 text-sm"> {errors.lname} </p>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            {" "}
            <input
              className="border-[1px] border-gray-400 bg-gray-100 h-8 px-2 text-black w-full"
              name="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              placeholder="EMAIL"
            />
            {touched.email && errors.email && (
              <div className="flex items-center gap-2 mt-1">
                <Image src={"/exclamation.png"} alt="" width={12} height={12} />
                <p className="text-red-500 text-sm"> {errors.email} </p>
              </div>
            )}
          </div>
          <div className="">
            <input
              className="border-[1px] border-gray-400 bg-gray-100 h-8 px-2 text-black w-full"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              type="phone"
              placeholder="PHONE"
            />
            {touched.phone && errors.phone && (
              <div className="flex items-center gap-2 mt-1">
                <Image src={"/exclamation.png"} alt="" width={12} height={12} />
                <p className="text-red-500 text-sm"> {errors.phone} </p>
              </div>
            )}
          </div>
        </div>

        <div className="">
          <select
            name="asset"
            className="border-[1px] border-gray-400 bg-gray-100 h-8 px-2 text-black"
            value={values.asset}
            onChange={handleChange}
          >
            <option value="">Asset Range</option>
            {assetValues.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          {touched.asset && errors.asset && (
            <div className="flex items-center gap-2 mt-1">
              <Image src={"/exclamation.png"} alt="" width={12} height={12} />
              <p className="text-red-500 text-sm"> {errors.asset} </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1">
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            className="border-[1px] border-gray-400 bg-gray-100 h-24 p-2 text-black "
            placeholder="Message"
          />
          {touched.message && errors.message && (
            <div className="flex items-center gap-2 mt-1">
              <Image src={"/exclamation.png"} alt="" width={12} height={12} />
              <p className="text-red-500 text-sm"> {errors.message} </p>
            </div>
          )}
        </div>

        <p className="text-2xl">Services:</p>
        <div className=" flex flex-col gap-4">
          {services.map((item) => (
            <div
              key={item.id}
              className={`uppercase text-xs font-medium border-[1px] pl-1 pr-2 py-1 cursor-pointer transition-all flex justify-between gap-2 hover:bg-slate-50 w-fit
              }`}
              onClick={() => handleServiceClick(item.id)}
            >
              <div className="w-4 h-4 border-[1px] flex justify-center items-center">
                {item.selected && (
                  <Image
                    src={"/brands/check.png"}
                    alt="icon"
                    width={15}
                    height={15}
                  />
                )}{" "}
              </div>{" "}
              {item.name}
            </div>
          ))}
        </div>

        <div className="">
          <b>Disclaimer</b>
          <p className="text-sm">
            By providing my phone number to &quot;Sabur Private Wealth Management&quot;, I
            agree and acknowledge that &quot;Sabur Private Wealth Management&quot; may
            send text messages to my wireless phone number for any purpose.
            Message and data rates may apply. Message frequency will vary, and
            you will be able to Opt-out by replying “STOP”. For more information
            on how your data will be handled please visit our{" "}
            <Link
              className="font-bold text-my_dark_blue"
              target="_blank"
              href="/Sabur pwm Privacy-Policy_effective-08.14.2023.pdf"
            >
              Private Policy
            </Link>
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="h-8 px-8 py-1 rounded-full text-white  bg-gradient-to-r from-yellow-400 to-orange-400 font-light"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </main>
  );
}
