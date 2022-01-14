/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/solid';

const Navbar = () => {
  return (
    <nav className="max-w-5xl mx-auto flex items-center justify-between h-16 space-x-6 px-6 md:px-0">
      <Link href="/" passHref>
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-12 object-cover cursor-pointer"
        />
      </Link>

      <Menu as="div" className="relative inline-block text-left z-50">
        <div className="flex items-center">
          <Menu.Button>
            <MenuIcon
              className="w-8 h-8 ml-2 -mr-1 text-gray-800 hover:text-gray-900"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Link href="/" passHref>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-gradient-to-r from-lime-500 to-green-600 text-gray-900'
                          : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <a className=" h-5 mr-2" aria-hidden="true">
                          Home
                        </a>
                      ) : (
                        <a className=" h-5 mr-2" aria-hidden="true">
                          Home
                        </a>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link href="/about" passHref>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-gradient-to-r from-lime-500 to-green-600 text-gray-900'
                          : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          About
                        </p>
                      ) : (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          About
                        </p>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link href="/why" passHref>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-gradient-to-r from-lime-500 to-green-600 text-gray-900'
                          : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Why Robia
                        </p>
                      ) : (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Why Robia
                        </p>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link href="/suppliers" passHref>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-gradient-to-r from-lime-500 to-green-600 text-gray-900'
                          : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Suppliers
                        </p>
                      ) : (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Suppliers
                        </p>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link href="/restaurants" passHref>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-gradient-to-r from-lime-500 to-green-600 text-gray-900'
                          : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Restaurants
                        </p>
                      ) : (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Restaurants
                        </p>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link href="/crafters" passHref>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-gradient-to-r from-lime-500 to-green-600 text-gray-900'
                          : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Crafters
                        </p>
                      ) : (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Crafters
                        </p>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link href="/signup" passHref>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-gradient-to-r from-lime-500 to-green-600 text-gray-900'
                          : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Sign Up
                        </p>
                      ) : (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Sign Up
                        </p>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </Link>

              <Link href="/contact" passHref>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-gradient-to-r from-lime-500 to-green-600 text-gray-900'
                          : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Contact Us
                        </p>
                      ) : (
                        <p className=" h-5 mr-2" aria-hidden="true">
                          Contact Us
                        </p>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};

export default Navbar;
