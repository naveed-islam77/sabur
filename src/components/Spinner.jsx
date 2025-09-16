import React from 'react';



const Spinner = () => {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-white bg-opacity-5 backdrop-blur-sm">
      <div className="flex h-full flex-col items-center justify-center">
        <img
          className="h-20 w-20"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Spinner;
