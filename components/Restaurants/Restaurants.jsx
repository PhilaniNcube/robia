/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Restaurants = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-white min-h-[90vh]">
      <div className="w-full">
        <img className="h-full object-cover" src="/images/friends.jpg" alt="" />
      </div>
      <div className="p-12 flex flex-col justify-center bg-white">
        <div className=" bg-lime-600 rounded-lg shadow-lg p-4 relative w-4/6">
          <h2 className="uppercase font-light">Restaurants</h2>
          <p className="font-myriad text-md font-medium">
            Are you a small restaurant, food truck, food stall, bespoke caterer
            or farmers market? <br /> We want you!
          </p>
          <p className="font-myriad text-md">
            Produce we would like to feature is as follows:
          </p>
        </div>

        <ul className="text-sm mt-6 text-gray-700">
          <li>&rsaquo; Food Trucks (Coffee or foods)</li>
          <li>&rsaquo; Artisan Foods</li>
          <li>&rsaquo; Coffee (Fresh Brews and Coffee packaged)</li>
          <li>&rsaquo; Bakery (Cakes and Breads)</li>
          <li>&rsaquo; Small restaurants (foods, wines and beverages)</li>
          <li>
            &rsaquo; Bespoke meals for care homes, diabetics, pensioners and
            busy travellers
          </li>
        </ul>

        <button className="bg-gradient-to-b from-lime-500 to-green-600 rounded-full px-8 py-2 mt-4 uppercase text-white w-[200px]">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Restaurants;
