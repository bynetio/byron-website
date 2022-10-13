import React from 'react';
import classnames from 'classnames';
import { ByronIcon } from 'assets';
import './byron-logo.scss';

type Props = {
  color: string;
  className?: string;
};

const ByronLogo = ({ color, className = '' }: Props) => {
  return (
    <div className={classnames('byron-logo', className)}>
      <ByronIcon />
      <div className="bl-text" style={{ color: color }}>
        <div className="bl-byron">Byron</div>
        <div className="bl-network">Network</div>
      </div>
    </div>
  );
};

export default ByronLogo;
