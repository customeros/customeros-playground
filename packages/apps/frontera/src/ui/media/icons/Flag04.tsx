import React from 'react';

import { twMerge } from 'tailwind-merge';

interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

export const Flag04 = ({ className, ...props }: IconProps) => (
  <svg
    fill='none'
    viewBox='0 0 24 24'
    {...props}
    className={twMerge('inline-block size-4', className)}
  >
    <path
      strokeWidth='2'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M14 7H19.6404C20.0877 7 20.3113 7 20.4421 7.09404C20.5562 7.17609 20.6306 7.30239 20.6469 7.442C20.6656 7.602 20.5569 7.79751 20.3397 8.18851L18.9936 10.6115C18.9148 10.7533 18.8755 10.8242 18.86 10.8993C18.8463 10.9657 18.8463 11.0343 18.86 11.1007C18.8755 11.1758 18.9148 11.2467 18.9936 11.3885L20.3397 13.8115C20.5569 14.2025 20.6656 14.398 20.6469 14.558C20.6306 14.6976 20.5562 14.8239 20.4421 14.906C20.3113 15 20.0877 15 19.6404 15H12.6C12.0399 15 11.7599 15 11.546 14.891C11.3578 14.7951 11.2049 14.6422 11.109 14.454C11 14.2401 11 13.9601 11 13.4V11M4 21L4 4M4 11H12.4C12.9601 11 13.2401 11 13.454 10.891C13.6422 10.7951 13.7951 10.6422 13.891 10.454C14 10.2401 14 9.96005 14 9.4V4.6C14 4.03995 14 3.75992 13.891 3.54601C13.7951 3.35785 13.6422 3.20487 13.454 3.10899C13.2401 3 12.9601 3 12.4 3H5.6C5.03995 3 4.75992 3 4.54601 3.10899C4.35785 3.20487 4.20487 3.35785 4.10899 3.54601C4 3.75992 4 4.03995 4 4.6V11Z'
    />
  </svg>
);
