/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const WhyUs = () => {
  const [toolTip1, setTooltipOne] = useState(false);
  const [toolTip2, setTooltipTwo] = useState(false);
  const [toolTip3, setTooltipThree] = useState(false);
  const [toolTip4, setTooltipFour] = useState(false);
  const [toolTip5, setTooltipFive] = useState(false);
  const [toolTip6, setTooltipSix] = useState(false);

  return (
    <div className="text-white">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-3 py-10 gap-5 max-h-[40vh]">
          {/*Tooltip One */}{' '}
          <div className="h-full w-full relative">
            <div
              onMouseEnter={() => setTooltipOne(true)}
              onMouseLeave={() => setTooltipOne(false)}
              className="cursor-pointer bg-gray-700 hover:bg-slate-100 hover:text-gray-700 bg-opacity-75 flex items-center justify-center rounded-lg py-12"
              alt="background"
              role="background"
            >
              <h2 className="text-2xl font-medium">Why Robia?</h2>
            </div>
            {toolTip1 && (
              <div
                role="tooltip"
                className="absolute z-20 w-full -translate-y-44 translate-x-32 transition duration-150 ease-in-out left-0 shadow-lg bg-gray-800 p-4 rounded pointer-events-none"
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
                        <g
                          id="Group-2"
                          transform="translate(24.000000, 0.000000)"
                        >
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
                <p className="text-md font-medium text-white pb-1">
                  A SUPERSTORE FOR FARMERS, SMALL RESTAURANTS, FOOD TRUCKS,
                  CRAFTERS AND INFORMAL TRADERS
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  We connect farmers selling fresh produce directly to the
                  consumer
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  You can create profiles for all restaurants which will contain
                  menus, reviews, introduction videos and linkss to order
                  directly.
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  You can create profiles for all crafters which will contain
                  specifications of items, introduction videos and links to
                  order directly.
                </p>
              </div>
            )}{' '}
          </div>
          {/*Tooltip Two */}
          <div className="h-full w-full relative">
            <div
              onMouseEnter={() => setTooltipTwo(true)}
              onMouseLeave={() => setTooltipTwo(false)}
              className="cursor-pointer bg-gray-700 hover:bg-slate-100 hover:text-gray-700 bg-opacity-75 flex items-center justify-center rounded-lg py-12"
              alt="background"
              role="background"
            >
              <h2 className="text-2xl font-medium">Benefits</h2>
            </div>
            {toolTip2 && (
              <div
                role="tooltip"
                className="absolute z-20 w-full -translate-y-44 translate-x-[50%] transition duration-150 ease-in-out left-0 shadow-lg bg-gray-800 p-4 rounded pointer-events-none"
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
                        <g
                          id="Group-2"
                          transform="translate(24.000000, 0.000000)"
                        >
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

                <p className="text-xs text-white mt-2 pb-3">
                  Join in with credentials as a consumer
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  Review videos of products and business owners
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  Sign Up for Membership
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  Online payments for foods and crafts
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  Bookings for restaurants
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  Route Optimisation Google Maps and Waze Integration
                </p>
              </div>
            )}{' '}
          </div>
          {/*Tooltip Three */}
          <div className="h-full w-full relative">
            <div
              onMouseEnter={() => setTooltipThree(true)}
              onMouseLeave={() => setTooltipThree(false)}
              className="cursor-pointer bg-gray-700 hover:bg-slate-100 hover:text-gray-700 bg-opacity-75 flex items-center justify-center rounded-lg py-12"
              alt="background"
              role="background"
            >
              <h2 className="text-2xl font-medium">Suppliers</h2>
            </div>
            {toolTip3 && (
              <div
                role="tooltip"
                className="absolute z-20 w-full -translate-y-32 translate-x-10 transition duration-150 ease-in-out left-0 shadow-lg bg-gray-800 p-4 rounded pointer-events-none"
              >
                <svg
                  className="absolute left-0 -ml-2 bottom-0 -top-[44%] h-full"
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
                        <g
                          id="Group-2"
                          transform="translate(24.000000, 0.000000)"
                        >
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

                <p className="text-xs text-white mt-2 pb-3">
                  Create profiles and submit the requested documents
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  Pay the R700 registration fee and download your information
                  pack
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  Internal Verification to take place and based on approval a
                  team will be dispatched to your premises for the marketing
                  photos and videos.
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  A monthly fee of R250 is payable for administration and
                  marketing
                </p>
              </div>
            )}{' '}
          </div>
          {/*Tooltip Four */}
          <div className="h-full w-full relative">
            <div
              onMouseEnter={() => setTooltipFour(true)}
              onMouseLeave={() => setTooltipFour(false)}
              className="cursor-pointer bg-gray-700 hover:bg-slate-100 hover:text-gray-700 bg-opacity-75 flex items-center justify-center rounded-lg py-12"
              alt="background"
              role="background"
            >
              <h2 className="text-2xl font-medium">Membership Ladder</h2>
            </div>
            {toolTip4 && (
              <div
                role="tooltip"
                className="absolute z-20 w-full -translate-y-44 translate-x-full transition duration-150 ease-in-out left-0 shadow-lg bg-gray-800 p-4 rounded pointer-events-none"
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
                        <g
                          id="Group-2"
                          transform="translate(24.000000, 0.000000)"
                        >
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

                <p className="text-xs text-white mt-2 pb-3">
                  50 points automatically when joining the app
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  5-10 points when you sign in daily on the app
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  10 points when you purchase from a business
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  5 points when you check in on facebook and instagram
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  10 points when you upload a photo of you at the restaurant,
                  food truck, farm or informal trader.
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  10 points when you watch a business intro video
                </p>
                <p className="text-xs text-white mt-2 pb-3">1 Point = 1 cent</p>
              </div>
            )}{' '}
          </div>
          {/*Tooltip Five */}{' '}
          <div className="h-full w-full relative">
            <div
              onMouseEnter={() => setTooltipFive(true)}
              onMouseLeave={() => setTooltipFive(false)}
              className="cursor-pointer bg-gray-700 hover:bg-slate-100 hover:text-gray-700 bg-opacity-75 flex items-center justify-center rounded-lg py-12 h-full"
              alt="background"
              role="background"
            >
              <h2 className="text-2xl font-medium">Secure Payments</h2>
            </div>
            {toolTip5 && (
              <div
                role="tooltip"
                className="absolute z-20 w-full -translate-y-44 translate-x-[50%] transition duration-150 ease-in-out left-0 shadow-lg bg-gray-800 p-4 rounded pointer-events-none"
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
                        <g
                          id="Group-2"
                          transform="translate(24.000000, 0.000000)"
                        >
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

                <p className="text-xs text-white mt-2 pb-3">
                  Pay via EFT membership club
                </p>
                <p className="text-xs text-white mt-2 pb-3">Credit Card</p>
                <p className="text-xs text-white mt-2 pb-3">Debit Card</p>
              </div>
            )}{' '}
          </div>
          {/*Tooltip Six */}
          <div className="h-full w-full relative">
            <div
              onMouseEnter={() => setTooltipSix(true)}
              onMouseLeave={() => setTooltipSix(false)}
              className="cursor-pointer bg-gray-700 hover:bg-slate-100 hover:text-gray-700 bg-opacity-75 flex items-center justify-center rounded-lg py-12 h-full"
              alt="background"
              role="background"
            >
              <h2 className="text-2xl font-medium">Process</h2>
            </div>
            {toolTip6 && (
              <div
                role="tooltip"
                className="absolute z-20 w-full -translate-y-32 translate-x-10 transition duration-150 ease-in-out left-0 shadow-lg bg-gray-800 p-4 rounded pointer-events-none"
              >
                <svg
                  className="absolute left-0 -ml-2 bottom-0 -top-[44%] h-full"
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
                        <g
                          id="Group-2"
                          transform="translate(24.000000, 0.000000)"
                        >
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

                <p className="text-xs text-white mt-2 pb-3">
                  01 Search Products
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  02 View Products and Ingredients
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  03 Review Business Intro Meeting
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  04 Add your items to the cart
                </p>
                <p className="text-xs text-white mt-2 pb-3">
                  05 Go to your cart and pay via credit/debit card or voucher
                </p>
              </div>
            )}{' '}
          </div>
        </div>
        <div className="flex items-end min-h-[50vh]">
          <img
            src="/images/people.svg"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
