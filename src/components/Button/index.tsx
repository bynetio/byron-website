import classNames from 'classnames';
import React from 'react';
import './button.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
};

const Button = ({ children, className, outline, ...rest }: ButtonProps) => (
  <div
    className={classNames(
      `flex h-12 text-white font-['Mulish'] font-bold rounded-lg transition-ease duration-500 ${className}`,
      {
        'byron-button text-black p-[1px]': outline
      }
    )}>
    <button
      className={classNames('byron-button rounded-lg px-6', {
        'byron-button-outline': outline
      })}
      {...rest}>
      <div>{children}</div>
    </button>
  </div>
);

export default Button;
