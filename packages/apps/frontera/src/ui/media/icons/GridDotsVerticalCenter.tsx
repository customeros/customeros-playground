import React from 'react';

import { twMerge } from 'tailwind-merge';

interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

export const GridDotsVerticalCenter = ({ className, ...props }: IconProps) => (
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
      d='M3 3H3.01M3 21H3.01M3 16.5H3.01M3 7.5H3.01M7.5 3H7.51M7.5 21H7.51M16.5 3H16.51M16.5 21H16.51M12 3H12.01M12 21H12.01M12 16.5H12.01M12 7.5H12.01M21 3H21.01M21 21H21.01M21 16.5H21.01M21 7.5H21.01M21 12H3'
    />
  </svg>
);
