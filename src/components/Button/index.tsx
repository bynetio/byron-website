import classNames from 'classnames';
import React from 'react';
import './button.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
};

export const Button = ({ children, className, ...rest }: ButtonProps) => (
  <button
    className={`h-12 text-white font-['Mulish'] font-bold transition-ease duration-500 byron-button rounded-lg px-6 ${className}`}
    {...rest}>
    <div>{children}</div>
  </button>
);

export const ButtonOutline = ({ children, className, ...rest }: ButtonProps) => (
  <div
    className={`flex h-12 font-['Mulish'] font-bold rounded-lg transition-ease duration-500 byron-button text-black p-[1px] cursor-pointer ${className}`}>
    <button className="rounded-lg px-6 bg-white cursor-pointer" {...rest}>
      <div>{children}</div>
    </button>
  </div>
);
