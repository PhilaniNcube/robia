/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const Hero = () => {
  const [tooltipStatus, setTooltipStatus] = useState(true);

  return (
    <div className="max-w-5xl mx-auto text-white min-h-[50vh] py-4 flex relative">
      <div className="flex flex-col w-3/6 h-full justify-center z-30">
        <h1 className="font-mont font-light uppercase text-3xl">
          We are a superstore <br />& One-stop shop
        </h1>
        <p className="font-myriad font-semibold text-md my-3">
          FOR FARMERS, SMALL RESTAURANTS, FOOD TRUCKS, CRAFTERS & INFORMAL
          TRADERS
        </p>
        <p className="text-sm">
          Our marketplace encourages youth businesses and all entrepreneurs in
          the foods and crafts industry to showcase their products on our
          platform.
        </p>
      </div>
      <div className="h-full absolute right-12 top-0 flex items-end justify-start">
        <img
          onMouseEnter={() => setTooltipStatus(true)}
          onMouseLeave={() => setTooltipStatus(true)}
          className="h-full object-cover mr-2 cursor-pointer"
          src="/images/phone.svg"
          alt="background"
          role="background"
        />
        {tooltipStatus && (
          <div
            role="tooltip"
            className="z-20 w-48 absolute transition duration-150 ease-in-out left-0 ml-[20vw] shadow-lg bg-gray-800 p-4 rounded"
          >
            <svg
              className="absolute left-0 -ml-2 bottom-0 top-0 h-full"
              width="9px"
              height="16px"
              viewBox="0 0 9 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Tooltips-"
                  transform="translate(-874.000000, -1029.000000)"
                  fill="#2D3748"
                >
                  <g
                    id="Group-3-Copy-16"
                    transform="translate(850.000000, 975.000000)"
                  >
                    <g id="Group-2" transform="translate(24.000000, 0.000000)">
                      <polygon
                        id="Triangle"
                        transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                        points="4.5 57.5 12.5 66.5 -3.5 66.5"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <p className="text-2xl leading-5 font-bold uppercase text-white pb-1">
              Free Access For 1 Year
            </p>
            <p className="text-xs text-white mt-2 pb-3">
              The first 50 businesses to apply will have free access to the
              website for 1 year. *T&C’s apply.
            </p>
          </div>
        )}{' '}
      </div>
    </div>
  );
};

export default Hero;
