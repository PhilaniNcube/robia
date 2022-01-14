/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import s from './Home.module.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ImageGrid = () => {
  return (
    <div className="bg-white py-4 px-6 md:px-0 min-h-[45vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto text-white">
        <div className="relative isolate overflow-hidden h-full w-full">
          <img
            src="/images/woman.jpg"
            alt="woman"
            className="block w-full h-full object-fit"
          />
          <div
            className={`${s.overlay} absolute inset-0 w-full h-full bg-gray-800 bg-opacity-60 aspect-video p-8 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 overlay hover:backdrop-blur-sm`}
          >
            <h3 className="text-2xl font-extrabold font-myriad uppercase">
              Suppliers
            </h3>
            <p className="text-sm mt-2 font-mont">
              Are you a farmer in South Africa and selling fresh produce? We
              want you!
            </p>
          </div>
        </div>
        <div className="relative isolate overflow-hidden h-full w-full">
          <img
            src="/images/friends.jpg"
            alt="friends"
            className="block w-full h-full object-fit"
          />
          <div
            className={`${s.overlay} absolute inset-0 w-full h-full bg-gray-800 bg-opacity-60 aspect-video p-8 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 overlay hover:backdrop-blur-sm`}
          >
            <h3 className="text-2xl font-extrabold font-myriad uppercase">
              RESTAURANTS/ FOOD TRUCKS
            </h3>
            <p className="text-sm mt-2 font-mont">
              Are you a small restaurant, food truck, food stall, bespoke
              caterer or farmers market? We want you!
            </p>
          </div>
        </div>
        <div className="relative isolate overflow-hidden h-full w-full">
          <img
            src="/images/workshop.jpg"
            alt="workshop"
            className="block w-full h-full object-fit"
          />
          <div
            className={`${s.overlay} absolute inset-0 w-full h-full bg-gray-800 bg-opacity-60 aspect-video p-8 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 overlay hover:backdrop-blur-sm`}
          >
            <h3 className="text-2xl font-extrabold font-myriad uppercase">
              CRAFTERS
            </h3>
            <p className="text-sm mt-2 font-mont">
              Do you sell crafts like shoes, handbags, beauty products, seasonal
              crafts, home and living and clothing etc? We want you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
