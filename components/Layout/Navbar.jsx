/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect, useRef, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/solid';

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center h-16 space-x-6">
      <img src="/images/logo.png" alt="logo" className="h-12 object-cover" />
      <div className="relative flex-1">
        <div className="absolute right-0 text-gray-600 hover:text-gray-700 flex items-center pr-3 h-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          id="id"
          className="text-gray-600 rounded-full bg-white dark:border-gray-700 font-normal h-10 flex items-center pl-3 text-sm border-gray-300 w-full border shadow"
          placeholder="Search"
        />
      </div>
      <Menu as="div" className="relative inline-block text-left">
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
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-400 text-gray-900' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <p className="w-5 h-5 mr-2" aria-hidden="true">
                        Home
                      </p>
                    ) : (
                      <p className="w-5 h-5 mr-2" aria-hidden="true">
                        Home
                      </p>
                    )}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-400 text-gray-900' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <p className="w-5 h-5 mr-2" aria-hidden="true">
                        About
                      </p>
                    ) : (
                      <p className="w-5 h-5 mr-2" aria-hidden="true">
                        About
                      </p>
                    )}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};

export default Navbar;
