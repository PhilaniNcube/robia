/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Header = () => {
  return (
    <div className="">
      <div className="max-w-5xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-full pt-8 flex flex-col">
          <div className="flex justify-end border-r-8 border-gray-50 pr-8">
            <h1 className="font-mont text-6xl font-light leading-4 text-right">
              about <br />
              <span className="text-7xl font-medium">us</span>
            </h1>
          </div>
          <div className="flex-1">
            <img
              className="h-full object-cover"
              src="/images/medium.png"
              alt="background"
              role="presentation"
            />
          </div>
        </div>
        <div className="w-full pt-8 pl-4">
          <h3 className="font-medium text-xl">
            Robia was started in 2021, with the purpose of one marketplace for
            restaurants, farmers and crafters.
          </h3>
          <p className="pt-2 text-sm">
            Our marketplace encourages youth businesses and all entrepreneurs in
            the foods and crafts industry to showcase their products on our
            platform.
          </p>
          <p className="pt-2 text-sm">
            Consumers can join our rewards programme where the more you spend
            the more you will earn. The more businesses you support the more
            points you will generate to spend on the businesses on the platform.
          </p>
          <p className="pt-2 text-sm">
            Our vision is to incorporate all Restaurants, Farmers and Crafters
            on one online superstore so that you can support local South African
            Businesses.
          </p>
          <p className="pt-2 text-sm">
            Our main purpose is to create sustainable employment for youth and
            to encourage consumers to buy local products.
          </p>
          <p className="pt-2 text-sm">
            Our target market is business/leisure travellers and locals.
          </p>
          <div className="w-full bg-gray-600 bg-opacity-60 p-4 my-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium">
              The business is founded on the following sustainable goals:
            </h3>
            <ul>
              <li className="text-sm flex space-x-2 items-center h-8">
                <span className="text-md">
                  &raquo; Combating youth unemployment in SA
                </span>
              </li>
              <li className="text-sm flex space-x-2 items-center h-8">
                <span className="text-md">
                  &raquo; Alleviating poverty and hunger
                </span>
              </li>
              <li className="text-sm flex space-x-2 items-center h-8">
                <span className="text-md">
                  &raquo; Training skilled workers in programmes that is in
                  alignment with industry standards
                </span>
              </li>
              <li className="text-sm flex space-x-2 items-center h-8">
                <span className="text-md">
                  &raquo; Promoting gender equality and fighting gender-based
                  violence
                </span>
              </li>
              <li className="text-sm flex space-x-2 items-center h-8">
                <span className="text-md">
                  &raquo; Encouraging green living
                </span>
              </li>
              <li className="text-sm flex space-x-2 items-center h-8">
                <span className="text-md">
                  &raquo; Protecting our environment to circumvent a worsening
                  climate crisis
                </span>
              </li>
              <li className="text-sm flex space-x-2 items-center h-8">
                <span className="text-md">
                  &raquo; Utilizing sustainable resources
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
