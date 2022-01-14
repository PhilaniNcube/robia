/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Suppliers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-white min-h-[90vh]">
      <div className="w-full">
        <img className="h-full object-cover" src="/images/woman.jpg" alt="" />
      </div>
      <div className="p-12 flex flex-col justify-center bg-white">
        <div className=" bg-lime-600 rounded-lg shadow-lg p-4 relative w-full md:w-4/6">
          <h2 className="uppercase font-light">Suppliers</h2>
          <p className="font-myriad text-md font-medium">
            Are you a farmer in South Africa and selling fresh produce? We want
            you!
          </p>
          <p className="font-myriad text-md">
            Produce we would like to feature is as follows:
          </p>
        </div>

        <ul className="text-sm mt-6 text-gray-700">
          <li>&rsaquo; Herbs and Spice</li>
          <li>&rsaquo; Fresh Vegetables</li>
          <li>&rsaquo; Eggs</li>
          <li>&rsaquo; Fresh Fruits</li>
        </ul>

        <button className="bg-gradient-to-b from-lime-500 to-green-600 rounded-full px-8 py-2 mt-4 uppercase text-white w-[200px]">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Suppliers;
