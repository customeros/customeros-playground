import React from 'react';

import { twMerge } from 'tailwind-merge';

interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

export const Stripe = ({ className, ...props }: IconProps) => (
  <svg
    fill='none'
    viewBox='0 0 32 32'
    {...props}
    className={twMerge('inline-block size-4', className)}
  >
    <path
      fill='url(#paint0_linear_1334_1851)'
      d='M2.87195 6.36808C2 8.07937 2 10.3196 2 14.8V17.2C2 21.6804 2 23.9206 2.87195 25.6319C3.63893 27.1372 4.86278 28.3611 6.36808 29.1281C8.07937 30 10.3196 30 14.8 30H17.2C21.6804 30 23.9206 30 25.6319 29.1281C27.1372 28.3611 28.3611 27.1372 29.1281 25.6319C30 23.9206 30 21.6804 30 17.2V14.8C30 10.3196 30 8.07937 29.1281 6.36808C28.3611 4.86278 27.1372 3.63893 25.6319 2.87195C23.9206 2 21.6804 2 17.2 2H14.8C10.3196 2 8.07937 2 6.36808 2.87195C4.86278 3.63893 3.63893 4.86278 2.87195 6.36808Z'
    />
    <path
      fill='url(#paint1_linear_1334_1851)'
      d='M2.26522 8.27953C2 9.78681 2 11.7868 2 14.8V17.2C2 21.6804 2 23.9206 2.87195 25.6319C3.63893 27.1372 4.86278 28.361 6.36808 29.128C8.07937 30 10.3196 30 14.8 30H17.2C21.6804 30 23.9206 30 25.6319 29.128C27.1372 28.361 28.3611 27.1372 29.1281 25.6319C30 23.9206 30 21.6804 30 17.2V14.8C30 10.3195 30 8.07933 29.1281 6.36803C28.3878 4.91511 27.2218 3.72439 25.788 2.95361L2.26522 8.27953Z'
    />
    <path
      fill='url(#paint2_linear_1334_1851)'
      d='M29.7103 23.854C29.5818 24.5297 29.3961 25.1058 29.1281 25.6319C28.3611 27.1372 27.1372 28.361 25.6319 29.128C23.9719 29.9738 21.814 29.9992 17.5963 29.9999H16.0586V26.8367L29.7103 23.854Z'
    />
    <path
      fill='url(#paint3_linear_1334_1851)'
      d='M17.2 2H14.8C13.9283 2 13.1414 2 12.4268 2.00642V5.97052L25.7854 2.95225C25.7346 2.92495 25.6834 2.89818 25.6319 2.87195C24.6819 2.38788 23.5688 2.17255 22 2.07676C20.7429 2 19.1931 2 17.2 2Z'
    />
    <path
      fill='url(#paint4_linear_1334_1851)'
      d='M30.0001 17.3734C30 20.3789 29.9946 22.3601 29.7104 23.854L24.9624 24.8914V17.8158L30.0001 16.6443V17.3734Z'
    />
    <path
      fill='white'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.9409 13.3779C14.9409 12.7352 15.4664 12.488 16.3366 12.488C17.5846 12.488 19.1609 12.867 20.4088 13.5427V9.67014C19.0459 9.12634 17.6995 8.91211 16.3366 8.91211C13.0033 8.91211 10.7866 10.6589 10.7866 13.5756C10.7866 18.1238 17.0263 17.3988 17.0263 19.3597C17.0263 20.1178 16.3695 20.365 15.4499 20.365C14.0871 20.365 12.3465 19.8047 10.9672 19.0466V22.9686C12.4943 23.6278 14.0378 23.9079 15.4499 23.9079C18.8653 23.9079 21.2134 22.2106 21.2134 19.2609C21.197 14.3502 14.9409 15.2235 14.9409 13.3779Z'
    />
    <defs>
      <linearGradient
        x1='2'
        y1='2'
        x2='11.1967'
        y2='8.50209'
        id='paint0_linear_1334_1851'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#392993' />
        <stop offset='1' stopColor='#4B47B9' />
      </linearGradient>
      <linearGradient
        x1='3.05439'
        y1='8.57442'
        x2='23.3566'
        y2='25.3209'
        id='paint1_linear_1334_1851'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#594BB9' />
        <stop offset='1' stopColor='#60A8F2' />
      </linearGradient>
      <linearGradient
        x2='30'
        y2='30'
        y1='26.954'
        x1='16.0586'
        id='paint2_linear_1334_1851'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#61A2EF' />
        <stop offset='1' stopColor='#58E6FD' />
      </linearGradient>
      <linearGradient
        y2='2'
        x2='30'
        x1='12.4268'
        y1='3.99163'
        id='paint3_linear_1334_1851'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#534EBE' />
        <stop offset='1' stopColor='#6875E2' />
      </linearGradient>
      <linearGradient
        x1='24.9624'
        y1='17.8744'
        x2='30.0001'
        y2='23.9079'
        id='paint4_linear_1334_1851'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#71A5F3' />
        <stop offset='1' stopColor='#6CC3FA' />
      </linearGradient>
    </defs>
  </svg>
);
