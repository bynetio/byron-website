import React from 'react';
import { DotProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { DividerIcon } from 'assets';

const displayData = ['Phase 1', 'Phase 2', 'Phase 3'];

export const CustomDot = ({ index, onClick, active }: DotProps) => (
  <button
    onClick={(e) => {
      onClick?.();
      e.preventDefault();
    }}>
    <div className="flex justify-center content-center">
      <hr className="w-full h-1 border-indigo-500 opacity-50 mt-6" />
      <DividerIcon className={`inline w-full ${active ? 'opacity-100' : 'opacity-50'}`} />
      <hr className="w-full h-1 border-indigo-500 opacity-50 mt-6" />
    </div>
    <div
      className={`flex-none whitespace-nowrap px-12 mb-6  ${
        active ? 'text-white font-semibold' : 'text-[#707D95]'
      }`}>
      {displayData[index || 0]}
    </div>
  </button>
);
