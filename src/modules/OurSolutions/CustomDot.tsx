import React from 'react';
import { DotProps } from 'react-multi-carousel';

const displayData = ['Bynet Protocool', 'BynetDEX', 'Bynet Wallet', 'Cardano Market'];

export const CustomDot = ({ index, onClick, active }: DotProps) => (
  <button
    onClick={(e) => {
      onClick?.();
      e.preventDefault();
    }}
    className={`font-['Mulish'] flex-none px-3 pb-6 ${
      active ? 'text-slate-900 font-semibold' : 'text-[#707D95]'
    }`}>
    {displayData[index || 0]}
  </button>
);
