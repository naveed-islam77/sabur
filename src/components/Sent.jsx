import React from 'react';
import Image from 'next/image';
const Sent = () => {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-white bg-opacity-5 backdrop-blur-sm">
      <div className="flex h-full flex-col items-center justify-center gap-6">
        <p className="text-3xl">Message sent</p>{' '}
        <Image src={'/check.png'} alt="check" width={60} height={60} />
      </div>
    </div>
  );
};

export default Sent;
