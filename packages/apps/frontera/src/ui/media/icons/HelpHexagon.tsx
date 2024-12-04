import React from 'react';

import { twMerge } from 'tailwind-merge';

interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

export const HelpHexagon = ({ className, ...props }: IconProps) => (
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
      d='M9.08997 8.99995C9.32507 8.33162 9.78912 7.76806 10.3999 7.40908C11.0107 7.05011 11.7289 6.91889 12.4271 7.03866C13.1254 7.15844 13.7588 7.52148 14.215 8.06348C14.6713 8.60548 14.921 9.29147 14.92 9.99995C14.92 12 11.92 13 11.92 13M12 17H12.01M3 7.94141V16.0585C3 16.4012 3 16.5725 3.05048 16.7253C3.09515 16.8605 3.16816 16.9845 3.26463 17.0892C3.37369 17.2076 3.52345 17.2908 3.82297 17.4572L11.223 21.5683C11.5066 21.7258 11.6484 21.8046 11.7985 21.8355C11.9315 21.8628 12.0685 21.8628 12.2015 21.8355C12.3516 21.8046 12.4934 21.7258 12.777 21.5683L20.177 17.4572C20.4766 17.2908 20.6263 17.2076 20.7354 17.0892C20.8318 16.9845 20.9049 16.8605 20.9495 16.7253C21 16.5725 21 16.4012 21 16.0585V7.94141C21 7.59876 21 7.42744 20.9495 7.27464C20.9049 7.13947 20.8318 7.01539 20.7354 6.9107C20.6263 6.79236 20.4766 6.70916 20.177 6.54276L12.777 2.43164C12.4934 2.27409 12.3516 2.19531 12.2015 2.16442C12.0685 2.13709 11.9315 2.13709 11.7985 2.16442C11.6484 2.19531 11.5066 2.27409 11.223 2.43164L3.82297 6.54276C3.52345 6.70916 3.37369 6.79236 3.26463 6.9107C3.16816 7.01539 3.09515 7.13947 3.05048 7.27464C3 7.42744 3 7.59876 3 7.94141Z'
    />
  </svg>
);
