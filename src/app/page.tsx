'use client'

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Dragons from './components/Dragons';

const HomePage = () => {

  const email = "juanfragale11@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-gray-800">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="relative z-10 w-24 h-24 rounded-full mb-4 md:w-60 md:h-60"
        />
        <h1 className="text-4xl py-4 center md:text-6xl lg:text-7xl xl:text-6xl font-bold mb-4 relative z-10 align: center">Song of Ice And Fire Dragons</h1>

      <section className="w-full py-21 px-4 md:px-8 bg-slate-50" id='tools'>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg md:text-xl text-gray-800 mb-12">
          This is the complete list with all the dragons known in the Song of Ice and Fire books and the TV shows, Game of Thrones and House of The Dragon.
          </p>
        </div>
      </section>
    <Dragons />
    </main>
  );
};

export default HomePage;
