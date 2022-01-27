/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const sendMail = async (name, number, email) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, number, email }),
      });

      //if sucess do whatever you like, i.e toast notification
      alert('Email sent');
      console.log(response);
    } catch (error) {
      // toast error message. whatever you wish
      alert('There was error sending the email. Please call 083 295 6515');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="bg-gray-200 flex flex-col items-center justify-center h-full">
        <img
          className="h-24 object-cover"
          src="/images/logo-black.png"
          alt=""
        />
        <p className="text-gray-700 text-lg font-medium text-center">
          Sign up now to start trading!
        </p>
        <p className="text-gray-700 text-4xl font-light text-center">
          for just R250/mo*
        </p>
        <p className="text-xs text-gray-700 m-1 font-extrabold">
          *R700 Once Off Registration fee
        </p>
        <form
          className="w-4/6 flex flex-col items-center mt-5"
          onSubmit={(e) => {
            e.preventDefault();
            sendMail(name, number, email);
          }}
        >
          <input
            type="text"
            placeholder="Name"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-full bg-white w-4/6 py-1 px-3 my-1"
          />

          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-full bg-white w-4/6 py-1 px-3 my-1"
          />
          <input
            type="text"
            placeholder="041 123 4597"
            name="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            className="rounded-full bg-white w-4/6 py-1 px-3 my-1"
          />

          <button
            type="submit"
            className="bg-gradient-to-b from-lime-500 to-green-600 rounded-full px-8 py-2 mt-4 uppercase text-white w-2/6"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="bg-gradient-from-t from-lime-400 to-green-600">
        <img
          src="/images/medium.png"
          alt=""
          className="h-full object-cover mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default signup;
