/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Crafters = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-white min-h-[90vh]">
      <div className="w-full">
        <img
          className="h-full object-cover"
          src="/images/workshop.jpg"
          alt=""
        />
      </div>
      <div className="p-12 flex flex-col justify-center bg-white">
        <div className=" bg-lime-600 rounded-lg shadow-lg p-4 relative w-full md:w-4/6">
          <h2 className="uppercase font-light">Crafters</h2>
          <p className="font-myriad text-md font-medium">
            Do you sell crafts like shoes, handbags, beauty products, seasonal
            crafts, home and living and clothing etc? <br /> We want you!
          </p>
          <p className="font-myriad text-md">
            Produce we would like to feature is as follows:
          </p>
        </div>

        <ul className="text-sm mt-6 text-gray-700">
          <li>&rsaquo; Shoes</li>
          <li>&rsaquo; Handbags</li>
          <li>&rsaquo; Beauty Products</li>
          <li>&rsaquo; Seasonal Crafts (Christmas, Thanksgiving, easter)</li>
          <li>&rsaquo; Home DÈcor</li>
          <li>&rsaquo; Bedding</li>
          <li>&rsaquo; Kitchen and dining</li>
          <li>&rsaquo; Hair accessories</li>
          <li>&rsaquo; Bridal Apparel</li>
          <li>&rsaquo; Toys</li>
          <li>&rsaquo; Paintings</li>
          <li>&rsaquo; Jewellery</li>
          <li>&rsaquo; Decorations</li>
          <li>&rsaquo; Clothing (plus sizes only) Size 16 and up</li>
          <li>&rsaquo; Event and party supplies</li>
          <li>&rsaquo; Bathroom</li>
          <li>&rsaquo; Outdoor and Garden</li>
          <li>&rsaquo; Pet Supplies</li>
        </ul>

        <button className="bg-gradient-to-b from-lime-500 to-green-600 rounded-full px-8 py-2 mt-4 uppercase text-white w-[200px]">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Crafters;
