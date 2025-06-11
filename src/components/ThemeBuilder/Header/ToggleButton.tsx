'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ToggleButton() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="">
      <div className="">
        {/* Tabs */}
        <div
          role="tablist"
          aria-label="tabs"
          className="relative w-max mx-auto flex justify-center items-center p-[5px] rounded-full bg-[#ffffff0e] border-[1px] border-[#ffffff00] overflow-hidden shadow-2xl shadow-900/20 transition"
        >
          <div
            className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md opacity-0 transform scale-75"
            style={{
              transform: `translateX(${(activeTab - 2) * 100}%)`,
              opacity: 1,
              transition: 'transform 0.5s ease, opacity 0.5s ease, transform 0.5s',
            }}
          ></div>

          <Link href="#" passHref>
            <button
              role="tab"
              aria-selected={activeTab === 1}
              aria-controls="panel-1"
              id="tab-1"
              tabIndex={activeTab === 1 ? 0 : -1}
              onClick={() => setActiveTab(1)}
              className={`relative block h-9 px-5 tab rounded-full ${
                activeTab === 1
                  ? 'text-[#ffffff] bg-[#ffffff2f] text-shadow font-semibold text-[12px]'
                  : 'text-[#ffffff56] text-[12px]'
              }`}
            >
              PROJECTS
            </button>
          </Link>
          <Link href="/profile" passHref>
            <button
              role="tab"
              aria-selected={activeTab === 2}
              aria-controls="panel-1"
              id="tab-1"
              tabIndex={activeTab === 2 ? 0 : -1}
              onClick={() => setActiveTab(2)}
              className={`relative block h-9 px-5 tab rounded-full ${
                activeTab === 2
                  ? 'text-[#ffffff] bg-[#ffffff2f] text-shadow font-semibold text-[13px]'
                  : 'text-[#ffffff56] hover:bg-gradient-to-r hover:from-transparent hover:to-[#ffffff1c]  text-[12px]'
              }`}
            >
              PROFILE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}