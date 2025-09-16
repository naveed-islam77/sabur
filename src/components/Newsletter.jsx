'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import { newsletterSchema } from '../validation/contactValidation';
import axios from 'axios';
import Spinner from './Spinner';
import Sent from './Sent';
const Newsletter = ({ handleNewsletter }) => {
  const assetValues = [
    '$3MM - $10MM',
    '$10MM - $50MM',
    '$50MM+',
    'Pre-Liquidity',
  ];
  const initialServices = [
    { id: 1, name: 'ASSET / LAW SUIT PROTECTION', selected: false },
    { id: 2, name: 'BALANCE SHEET AND CASH FLOW MANAGEMENT', selected: false },
    { id: 3, name: 'Bankruptcy Avoidance', selected: false },
    { id: 4, name: 'CONCIERGE MEDICINE', selected: false },
    {
      id: 5,
      name: 'DATA AGGREGATION: CONSOLIDATED REPORTING AND ADVISING ON OVERALL ASSETS',
      selected: false,
    },
    {
      id: 6,
      name: 'FAMILY BUSINESS CONSULTING AND SUCCESSION PLANNING',
      selected: false,
    },
    {
      id: 7,
      name: 'FAMILY GOVERNANCE INCLUDING SELECTION/TRAINING OF TRUSTEES AND PROTECTORS',
      selected: false,
    },
    { id: 16, name: 'PORTFOLIO STRESS TESTING', selected: false },
    { id: 15, name: 'RISK MANAGEMENT', selected: false },
    {
      id: 8,
      name: 'CAPITAL GAINS TAX PLANNING FOR PERSONAL AND REAL PROPERTY',
      selected: false,
    },
    {
      id: 9,
      name: 'INCOME TAX MITIGATION, CASH FLOW & LIQUIDITY MANAGEMENT',
      selected: false,
    },
    {
      id: 10,
      name: 'INCOME TAX PLANNING, COMPLIANCE, AND CONSULTING',
      selected: false,
    },
    { id: 11, name: 'INVESTMENT MANAGEMENT', selected: false },
    { id: 12, name: 'LIFESTYLE ASSET MANAGEMENT', selected: false },
    {
      id: 13,
      name: 'PHILANTHROPIC OVERSIGHT AND PRIVATE FOUNDATION ADVISORY',
      selected: false,
    },
    {
      id: 14,
      name: 'Pre-Tax investing to double your ROI in any investment of your choice',
      selected: false,
    },
  ];

  const [services, setServices] = useState(initialServices);

  const [status, setStatus] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleServiceClick = (id) => {
    const updatedServices = services.map((service) => {
      if (service.id === id) {
        return { ...service, selected: !service.selected };
      }
      return service;
    });
    setServices(updatedServices);
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fname: '',
      email: '',
      referred: '',
      asset: '',
    },
    validationSchema: newsletterSchema,
    onSubmit,
  });

  async function onSubmit(values, action) {
    setSpinner(true);
    try {
      const selected = services.filter((service) => service.selected);
      const userData = { values, selected };
      setSpinner(false);
      await axios.post('/api/newsletter', userData);
      setStatus(true);
      handleSent();
    } catch (error) {
      console.error(error);
    }

    action.resetForm();
    setServices(initialServices);
  }

  function handleSent() {
    setTimeout(() => {
      setStatus(false);
      handleNewsletter();
    }, 2000);
  }

  function close() {
    handleNewsletter();
  }

  return (
    <div className="bg-black bg-opacity-50 w-full min-h-full py-10 absolute top-0 left-0 z-20 backdrop-blur-sm flex justify-center items-start px-4 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow w-[700px] px-4 py-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 relative"
      >
        {spinner && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 shadow-2xl rounded-xl border z-40">
            {' '}
            <div className="flex h-full flex-col items-center justify-center">
              <img
                className="h-20 w-20"
                src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                alt=""
              />
            </div>
          </div>
        )}

        {status && (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 shadow-2xl rounded-xl border z-40
"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 w-full  text-center">
              <p className="text-2xl">You are now subscribed</p>{' '}
              <Image src={'/check.png'} alt="check" width={50} height={50} />
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => close()}
          className="absolute top-2 right-2"
        >
          <Image src={'/close.png'} alt="close" width={20} height={20} />
        </button>
        <div className="text-center md:col-span-2 text-2xl text-my_yellow">
          Join the newsletter!
        </div>
        <div className="">
          <input
            name="fname"
            value={values.fname}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="border-[1px] px-3 border-black h-8 w-full"
          />
          {touched.fname && errors.fname && (
            <div className="flex items-center gap-2 mt-1">
              <Image src={'/exclamation.png'} alt="" width={12} height={12} />
              <p className="text-red-500 text-sm"> {errors.fname} </p>
            </div>
          )}
        </div>

        <div className="">
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            type="text"
            placeholder="Email"
            className="border-[1px] px-3 border-black h-8 w-full"
          />
          {touched.email && errors.email && (
            <div className="flex items-center gap-2 mt-1">
              <Image src={'/exclamation.png'} alt="" width={12} height={12} />
              <p className="text-red-500 text-sm"> {errors.email} </p>
            </div>
          )}
        </div>

        <div className="">
          <input
            className="border-[1px] px-3 border-black h-8 w-full"
            name="referred"
            value={values.referred}
            onChange={handleChange}
            type="text"
            placeholder="Referred by"
          />
          {touched.referred && errors.referred && (
            <div className="flex items-center gap-2 mt-1">
              <Image src={'/exclamation.png'} alt="" width={12} height={12} />
              <p className="text-red-500 text-sm"> {errors.referred} </p>
            </div>
          )}
        </div>
        <div className="">
          <select
            name="asset"
            className="border-[1px] border-gray-400 bg-gray-100 h-8 px-2 text-black w-full"
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
              <Image src={'/exclamation.png'} alt="" width={12} height={12} />
              <p className="text-red-500 text-sm"> {errors.asset} </p>
            </div>
          )}
        </div>

        <div className=" flex flex-col gap-4 md:col-span-2">
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
                    src={'/brands/check.png'}
                    alt="icon"
                    width={15}
                    height={15}
                  />
                )}{' '}
              </div>{' '}
              {item.name}
            </div>
          ))}
        </div>

        <div className=" md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="h-8 px-8 py-1 rounded-full text-white  bg-gradient-to-r from-yellow-400 to-orange-400 font-light"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
