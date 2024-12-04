import React from 'react';

import { twMerge } from 'tailwind-merge';

interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

export const EsGa = ({ className, ...props }: IconProps) => (
  <svg
    fill='none'
    viewBox='0 0 640 480'
    {...props}
    className={twMerge('inline-block size-4', className)}
  >
    <g fontSize='12'>
      <path fill='#fff' fillRule='evenodd' d='M0 0h640v480H0z' />
      <path fill='#09c' d='M640 410.1 91.7-.1H0v68.4L550.4 480H640z' />
    </g>
    <g fontSize='12'>
      <path
        fill='#005bbf'
        d='M316.4 352.3c-64 0-62-60.3-62-60.3v-92.8h124V292s2.2 60.3-62 60.3'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M296.6 401.2c-60 0-58.1-56.5-58.1-56.5v-86.9h116.3v86.9s2 56.5-58.2 56.5z'
      />
      <path
        fill='#d81126'
        d='M315.8 141s-13.2-6.5-25.7 3c0 0-22.5-3.3-24.2 18.3 0 .8-.2 2.4.2 3 .5.4.9 1.3.9 1.9 0 .6.3 1 .5 1.2 0 .3.4.7.6 1.8 0 1.2-.3 1.7 1 2.9 1 1 1 4.3 1 5.3s.6 3.5 1 4c.6.6 1.4 2 1.4 3.2 0 1 .5 4.2.2 5-.2.8 1.3 1.8 2.6 2.2 1.3.4 17 5.6 40.1 5.1 23-.3 31.4-1.6 41-5a2.3 2.3 0 0 0 1.6-2.4 7 7 0 0 1 .3-3.3c.4-.6 3.2-5 2.6-5.7-.6-.9-.6-2.6 0-3.2.5-.7 2.2-4 2.5-5.3.3-1.3.4-3 1-3.3.6-.5.8-2 1-2.4a4.3 4.3 0 0 1 1.2-1.7s1-5.5.4-8.1c-.7-2.7-4.8-14.2-21-11.8 0 0-12.2-9.3-30.2-4.8'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='1.5'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M296.1 203.2s-12.4-6-24.1 2.8c0 0-21.1-3-22.7 17.2 0 .8-.2 2.3.2 2.8.4.4.8 1.2.8 1.8 0 .6.3.9.5 1.1 0 .3.4.7.5 1.7 0 1.1-.2 1.6.9 2.7 1 1 1 4.1 1 5 0 .9.6 3.3 1 3.8.5.5 1.3 1.8 1.3 2.9 0 1 .4 4 .2 4.7-.2.8 1.2 1.7 2.4 2.1 1.2.4 16 5.2 37.6 4.8 21.6-.3 29.4-1.5 38.4-4.7a2.2 2.2 0 0 0 1.5-2.3c-.2-.6 0-2.6.3-3.1.4-.5 3-4.6 2.4-5.3-.5-.8-.5-2.4 0-3 .5-.7 2.1-3.7 2.4-5 .3-1.2.4-2.7 1-3.1.5-.4.7-1.9.8-2.2a4 4 0 0 1 1.2-1.6s1-5.1.4-7.6c-.7-2.5-4.5-13.3-19.8-11 0 0-11.4-8.7-28.2-4.5z'
      />
      <path
        fill='#bcac0b'
        d='M360.1 181c-50.1-15.8-89-.7-89-.7s.5 1.7.9 2.3 1 1.8 1 2.7v3c0 .8-.4 4 2.4 3.9 0 0 35-13.7 80.4.7 0 0 1.3-1 1.3-2.6a8.5 8.5 0 0 1 1-4.3c.6-.9 2-3.6 2-5'
      />
      <path
        fill='#c8b100'
        fillOpacity='.9'
        d='M313.6 264.9h-21.9s-2.1 19.5 14.8 25.5v1.7h3.5v2.4s-6.2 5.5-.8 12v1.8h.9v3.2h1v5s-.8 18.2-18.7 27v1H340v-1c-17.9-8.7-18.7-27-18.7-27v-5h1v-3.2h1v-1.9c5.2-6.4-1-12-1-12v-2.3h3.7v-1.7c16.7-6 14.6-25.5 14.6-25.5h-27.1'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M294 319.3h-20.5s-2 18.3 13.8 23.9v1.6h3.3v2.2s-5.8 5.2-.7 11.2v1.8h.8v3h1v4.7s-.8 17-17.6 25.2v1h44.7v-1c-16.7-8.1-17.5-25.2-17.5-25.2V363h1v-3h.8v-1.8c5-6-.8-11.2-.8-11.2v-2.2h3.4v-1.6c15.7-5.6 13.7-23.9 13.7-23.9z'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.3'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M286.6 342.9h19.7m-19 1.5h18.4m-15 2.5h11.5m-12.3 11.5H303m-12.4 1.4h11.6m-11.6 2.8h11.5m-18.5 23.2h25.5m-32.7 5.9h40m-41.5.9h43'
      />
      <path
        fill='#ccc'
        d='M316.4 263.8a14 14 0 1 0 0-27.9 13.9 13.9 0 0 0 0 27.8'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M296.6 318.3a13 13 0 1 0 0-26.1 13 13 0 0 0 0 26z'
      />
      <path
        fill='#ccc'
        d='M284 223h-8.6v-8.8h-7.7v8.7H259v7.7h8.7v8.5h7.7v-8.5h8.5V223'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M266.3 280h-8.1v-8.2H251v8.2h-8.2v7.2h8.2v8h7.2v-8h8V280'
      />
      <path
        fill='#ccc'
        d='M374.2 223h-8.7v-8.8H358v8.7h-9v7.7h8.8v8.5h7.6v-8.5h8.7z'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M350.8 280h-8.1v-8.2h-7.2v8.2h-8.2v7.2h8.2v8h7.2v-8h8.1V280'
      />
      <path
        fill='#ccc'
        d='M328.5 212h-8.7v-8.6H312v8.5h-8.5v7.7h8.5v8.8h7.7v-8.8h8.7V212'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M308 269.7h-8.2v-8h-7.2v8h-8v7.2h8v8.2h7.2v-8.2h8.2v-7.2'
      />
      <path
        fill='#ccc'
        d='M284 260.5h-8.6v-8.8h-7.7v8.8H259v7.7h8.7v8.5h7.7v-8.5h8.5v-7.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M266.3 315.2h-8.1V307H251v8.2h-8.2v7.2h8.2v8h7.2v-8h8v-7.2'
      />
      <path
        fill='#ccc'
        d='M374.2 260.5h-8.7v-8.8H358v8.8h-9v7.7h8.8v8.5h7.6v-8.5h8.7z'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M350.8 315.2h-8.1V307h-7.2v8.2h-8.2v7.2h8.2v8h7.2v-8h8.1v-7.2'
      />
      <path
        fill='#ccc'
        d='M284 298.4h-8.6v-8.6h-7.7v8.6H259v7.7h8.7v8.6h7.7v-8.5h8.5v-7.8'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M266.3 350.7h-8.1v-8.1H251v8.1h-8.2v7.2h8.2v8.1h7.2v-8h8v-7.3'
      />
      <path
        fill='#ccc'
        d='M374.2 298.4h-8.7v-8.6H358v8.6h-9v7.7h8.8v8.6h7.6v-8.5h8.7z'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M350.8 350.7h-8.1v-8.1h-7.2v8.1h-8.2v7.2h8.2v8.1h7.2v-8h8.1v-7.3'
      />
      <path
        fill='#005bbf'
        d='M316.3 122.4a8.4 8.4 0 1 0 0-16.8 8.4 8.4 0 0 0 0 16.8'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M296.5 185.8a7.8 7.8 0 1 0 0-15.7 7.8 7.8 0 0 0 0 15.7z'
      />
      <path
        fill='#fc0'
        d='M324 112.5h-6.8v-11h2.7v-2.2h-2.7v-2.7h-2.1v2.6h-2.7v2.2h2.6v11.1h-6.4v1.5H324z'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.5'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M303.8 176.6h-6.4v-10.4h2.5v-2h-2.5v-2.5h-2v2.4h-2.5v2.1h2.4v10.4h-6v1.4h14.5v-1.4'
      />
      <path
        fill='#fc0'
        d='M282.9 132.3s6.2-.7 9.7.7c0 0-4 4.7-3.2 10.8a15 15 0 0 0 2 6.4 11 11 0 0 1 1.3 7h1.2s1.1-5-.8-7.8a10.7 10.7 0 0 1-1-11c2-4 4.9-5.7 4.9-5.7a18 18 0 0 0 12.1-1.4c2-1.4 3-3.4-.6-3.5-3.8-.2-10-.1-14.2 3.1 0 0-2.2-2.6-13.4-1.4-11.2 1.3-19.2 6-21.8 16.1-1.3 5.2 3.5 16 7.9 18.5 0 0-.1-1.7.3-3 0 0-7.5-8.4-5.3-16.2 2.3-7.7 11.3-12.8 20.9-12.6'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M265.2 195.1s5.8-.6 9.1.7c0 0-3.8 4.4-3 10.1.4 3 1 4.5 1.9 6 .8 1.3 1.7 4.3 1.2 6.6h1.1s1.1-4.8-.7-7.4a10 10 0 0 1-1-10.3c1.9-3.8 4.6-5.3 4.6-5.3 3 1.2 9.6 0 11.4-1.3 1.9-1.3 2.8-3.2-.6-3.3-3.5-.2-9.3-.1-13.3 2.9 0 0-2.1-2.4-12.6-1.3-10.5 1.2-18 5.7-20.4 15.1-1.2 4.8 3.3 14.9 7.4 17.3 0 0-.1-1.6.3-2.8 0 0-7-7.9-5-15.2 2.2-7.2 10.6-12 19.6-11.8z'
      />
      <path
        fill='#fff'
        d='M303.9 130.8c2-.2 3.5-.5 3.4-.8 0-.3-1.6-.3-3.5-.2-2 .1-3.4.6-3.4.8 0 .3 1.6.3 3.5.2'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M278.3 195.4s-2 2 0 0 6.4-3.2 8.9-2.7c2.4.6-.5.9-1.3 1-.8 0-2.4.3-4.8 0'
      />
      <path
        fill='#fc0'
        d='M349.5 133s-6-.7-9.7.7a15.6 15.6 0 0 1 1.3 17c-1 1.7-1.9 4.8-1.4 7.2h-1s-1.3-5 .7-7.9a10.7 10.7 0 0 0 1-10.9 13.4 13.5 0 0 0-4.8-5.7c-3.3 1.3-10.4 0-12.3-1.4-2-1.4-3-3.3.8-3.6 3.6-.2 9.9 0 14.1 3.2 0 0 2.2-2.6 13.5-1.3 11 1.1 19.2 6 21.6 16 1.3 5-3.4 15.9-7.8 18.4 0 0 0-1.7-.3-3 0 0 7.5-8.3 5.3-16-2.3-7.9-11.2-12.9-21-12.7'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M327.7 195.8s-5.7-.7-9.1.6a14.6 14.6 0 0 1 1.2 16c-.9 1.5-1.8 4.4-1.3 6.7h-1s-1.2-4.7.7-7.4a10 10 0 0 0 .9-10.2 12.6 12.6 0 0 0-4.5-5.4c-3.1 1.3-9.7 0-11.5-1.3-1.8-1.3-2.8-3.1.7-3.3 3.4-.2 9.3-.1 13.3 3 0 0 2-2.5 12.6-1.3 10.4 1.1 18 5.6 20.3 15 1.2 4.8-3.2 14.9-7.3 17.3 0 0 0-1.6-.3-2.8 0 0 7-7.8 4.9-15.1-2.1-7.3-10.5-12-19.6-11.8z'
      />
      <path
        fill='#fff'
        d='M328.5 131.4c-1.9 0-3.4-.4-3.4-.7 0-.2 1.6-.3 3.5-.2 2 .2 3.6.5 3.6.7 0 .3-1.6.4-3.7.2'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M314.6 196s2.1 2 0 0c-2-1.9-6.4-3.2-8.8-2.6-2.5.5.4.8 1.2.9.9 0 2.5.4 4.9 0'
      />
      <path
        fill='#fc0'
        d='M310.5 126v24c-.2 2.3 2.9 5.7 5.1 6.6 0 0 5.4-1.7 5.7-6.6v-25h-1.8v21.7c0 2.1-1.5 6.2-3.6 6.8 0 0-3.8-.6-4-6.8v-21.1l-1.4.6'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M291.1 189.3v22.3c-.2 2.2 2.7 5.3 4.8 6.2 0 0 5-1.6 5.3-6.2v-23.5h-1.7v20.4c0 2-1.4 5.8-3.3 6.4 0 0-3.6-.6-3.8-6.4v-19.8l-1.3.6'
      />
      <path
        fill='#fff'
        d='M258 158.7a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M241.8 219.8a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M256.1 152.1a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M240.1 213.7a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M257 144.2a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M241 206.3a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M261.4 137.6a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M245.1 200.1a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M266.7 132.8a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M250 195.6a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M273.5 130.1a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M256.4 193.1a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M280.5 129a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M263 192a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M287.3 128.5a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M269.3 191.6a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M293.3 129a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.8'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M275 192a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M310.4 126.8a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M291 190a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M316 128.3a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M296.2 191.4a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M316 149.5a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M296.2 211.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M374.7 160.5a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M351.3 221.5a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M376.2 153.5a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M352.7 215a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.3z'
      />
      <path fill='#fff' d='M375 146a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.7' />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M351.6 208a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M372 139.1a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M348.7 201.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M366.7 134.3a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M343.8 197a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M360.4 131.1a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M337.9 194a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M353.2 129.5a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M331.1 192.5a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M346.7 129a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M325 192a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M340.7 128.2a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M319.4 191.3a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M344.5 151.4a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.8'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M323 213a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.4z'
      />
      <path fill='#fff' d='M346 146a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.6' />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M324.4 208a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M322.1 127.8a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M302 190.9a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M308.3 127a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M289 190.1a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M304.9 126.8a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M285.8 190a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M286.7 151.5a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M268.8 213.1a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M285.9 144.8a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M268 206.8a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M288 138.2a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M270 200.6a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M300.5 127.5a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M281.7 190.6a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M295.7 129.4a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M277.2 192.4a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M291.2 133.2a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M273 196a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M316 131.5a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M296.2 194.4a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path fill='#fff' d='M316 137a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8' />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M296.2 199.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M316 142.7a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M296.2 204.9a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M325.8 127a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.8'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M305.4 190.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M329.6 126.2a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M309 189.4a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M334 126.8a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M313.2 190a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.4z'
      />
      <path fill='#fff' d='M345 139a2.9 2.9 0 1 0 0-5.6 2.9 2.9 0 0 0 0 5.6' />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M323.5 201.4a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path
        fill='#fff'
        d='M338.5 129.5a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M317.3 192.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z'
      />
      <path
        fill='#fff'
        d='M342.5 133.4a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7'
      />
      <path
        fill='none'
        stroke='#000'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M321.1 196.1a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3z'
      />
      <path fill='#fff' d='m315.7 176-7.4 3.8 6.7 4.3 8-4z' />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.5'
        d='m296 236-7 3.6 6.3 4 7.5-3.8-6.8-3.8'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
      />
      <path
        fill='#fff'
        d='m299.3 176.8-11.2 1.7s-.2 6.1.3 7.5l11.7-1.5s.5-5.7-.8-7.7'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.5'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='m280.6 236.8-10.5 1.6s-.2 5.7.3 7l10.9-1.4s.5-5.3-.7-7.2z'
      />
      <path
        fill='#058e6e'
        fillOpacity='.9'
        d='M298.1 179s-6.8.6-8.5 1.2v4s4.6-.7 8.6-1V179'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.5'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M279.5 238.8s-6.4.6-8 1.2v3.8s4.3-.7 8.1-1l-.1-4'
      />
      <path
        fill='#fff'
        d='m331.4 177 11.3 1.8s.1 6.1-.4 7.5l-11.5-1.5s-.6-5.6.6-7.7'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.5'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='m310.7 237 10.6 1.7s.1 5.7-.4 7l-10.8-1.4s-.5-5.3.6-7.2z'
      />
      <path
        fill='#058e6e'
        fillOpacity='.9'
        d='M332.8 179.3s6.7.6 8.4 1.2v4.1s-4.6-.8-8.6-1v-4.3'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.5'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M312 239.1s6.3.6 7.9 1.2l-.1 3.8s-4.2-.7-8-1l.1-4'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.5'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M254.2 241.8s37-13.7 84.2 1.2m-82.7 6.7s35.9-13.4 80 .6m-79.8-9 7.2 2.1-5 5.4'
      />
      <path fill='red' d='m273 188.5 4.5-3.7-5-1s.7.8.6 1.5v3.2' />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.5'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='m256 247.8 4.2-3.5-4.7-.9s.6.7.5 1.4zm81.6-5.1-7.7 1.4 5.2 6'
      />
      <path
        fill='red'
        d='m357.7 188.8-3.1-3.2 4.4-.5s-1.2.8-1.2 1.5.2 1.6 0 2.2'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.5'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='m335.3 248-2.9-3 4.2-.4s-1.2.7-1.2 1.4c0 .6.2 1.5 0 2zm-70-6.2c.6 0 1.2-.4 1.2-1 0-.4-.6-.9-1.2-.9-.7 0-1.2.5-1.2 1s.5 1 1.2 1zm20.6-2.3c.7 0 1.2-.4 1.2-1 0-.5-.5-.9-1.2-.9s-1.2.4-1.2 1c0 .5.5.9 1.2.9zm0 3.3c.7 0 1.2-.4 1.2-.9s-.5-1-1.2-1-1.2.5-1.2 1 .5 1 1.2 1zm20.3-3.1c.6 0 1.2-.5 1.2-1s-.6-1-1.2-1c-.7 0-1.2.5-1.2 1s.5 1 1.2 1zm20.1 3.7c.7 0 1.2-.5 1.2-1s-.5-1-1.2-1-1.2.5-1.2 1 .5 1 1.2 1zm-.3 2.6c.6 0 1.2-.4 1.2-1 0-.4-.6-.9-1.2-.9-.7 0-1.2.5-1.2 1s.5 1 1.2 1zm-19.8-3c.6 0 1.2-.4 1.2-1 0-.5-.6-.9-1.2-.9-.7 0-1.2.4-1.2 1 0 .5.5 1 1.2 1zm-40 3c.7 0 1.3-.4 1.3-1 0-.4-.6-.9-1.2-.9-.7 0-1.2.5-1.2 1s.5 1 1.2 1z'
      />
      <path
        fill='#fc0'
        d='M270.5 170.6s.1 7.7 5.1 6.6 4.5-7.3 4.8-7.7c.5-.3 1-.3 1-.3s.6 6.1 5.3 5.4c4.7-.8 4.5-8.3 4-9.5l1-.4s1.8 8.8 7.2 7.5c5.3-1.3 4.8-6.8 4.8-6.8h.4s1.2 6 5.6 5.5c4.2-.3 5-1.7 4.5-7.7l3-.5s-1.1 8.6 4 8.6c5.2-.4 5.4-4.4 5.7-5.2h.9s.2 6.1 4.6 6.1c4.2 0 5-5.1 5-7.1l4.4.2s-4.5 8 2 9c6.4 1.1 6.6-5 6.6-5h1.3s-.2 8 3.3 8.1c3.6.2 5.7-1 6-7l2 .7s-1.6 9.7-8.3 8c-3.6-1-4.7-5-4.5-6.1 0 0-2.5 4.4-7.4 3-4.8-1.4-4.2-4.9-4.2-6 0 0-3 5.4-7 4.2-3.6-1-5-2.3-5-4.9 0 0-1.8 4.2-5.3 4-3.6-.1-5.4-2.4-5.6-4.3 0 0-.7 3.9-5.5 4.2-3.2 0-5-1.5-5.8-3.7 0 0-1 3.9-5.5 4.5-2.9.3-5.8-1.3-6.4-4 0 0-.8 5.3-5.4 6-4.6.7-5.7-2.5-5.7-2.5s-1 4-4.7 5c-3.7.9-6.2-.7-7.2-4.5-.8-3.7-.5-5.3-.5-5.3z'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M253.6 231s.1 7.2 4.8 6.2 4.2-6.9 4.5-7.2c.4-.3.9-.3.9-.3s.6 5.7 5 5c4.4-.7 4.2-7.7 3.7-8.9l1-.3s1.7 8.2 6.7 7c5-1.2 4.5-6.4 4.5-6.4h.4s1.1 5.6 5.2 5.2c4-.3 4.8-1.6 4.3-7.2l2.7-.5s-1 8 3.9 8c4.8-.3 5-4.1 5.3-4.8h.8s.2 5.7 4.3 5.7c4 0 4.8-4.8 4.8-6.7l4 .2s-4.2 7.5 1.9 8.5c6 1 6.2-4.8 6.2-4.8h1.2s-.2 7.5 3.1 7.7c3.4.1 5.4-1 5.7-6.6l1.9.7s-1.6 9-7.9 7.4c-3.3-.9-4.4-4.7-4.2-5.7 0 0-2.3 4.2-6.9 2.8-4.5-1.3-4-4.5-4-5.5 0 0-2.7 5-6.5 3.9-3.4-1-4.7-2.2-4.7-4.6 0 0-1.7 3.9-5 3.7-3.4-.1-5-2.2-5.2-4 0 0-.7 3.6-5.2 3.9-3 .1-4.7-1.4-5.4-3.4 0 0-.9 3.6-5.2 4.2-2.7.3-5.4-1.2-6-3.7 0 0-.7 4.9-5 5.5-4.4.7-5.4-2.3-5.4-2.3s-.9 3.8-4.4 4.7c-3.5.8-5.8-.7-6.7-4.2-.8-3.5-.5-5-.5-5z'
      />
      <path
        fill='#fc0'
        d='M280.9 171a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.5'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M263.3 231.3a1.7 1.7 0 1 0 0-3.3 1.7 1.7 0 0 0 0 3.3z'
      />
      <path
        fill='#fc0'
        d='M304.1 167.2a1.8 1.8 0 1 0 0-3.5 1.8 1.8 0 0 0 0 3.5'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M285.1 227.8a1.7 1.7 0 1 0 0-3.3 1.7 1.7 0 0 0 0 3.3z'
      />
      <path
        fill='#fc0'
        d='M327.8 168a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.5'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M307.3 228.5a1.7 1.7 0 1 0 0-3.3 1.7 1.7 0 0 0 0 3.3z'
      />
      <path
        fill='#fc0'
        d='M351.1 171.7a1.8 1.8 0 1 0 0-3.5 1.8 1.8 0 0 0 0 3.5'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M329.2 232a1.7 1.7 0 1 0 0-3.3 1.7 1.7 0 0 0 0 3.3z'
      />
      <path
        fill='#fc0'
        d='M314.9 165.3h-1.6c-.4 1.6-3.9 2.5-3.9 2.5-.4-1.2.6-3 .6-3-4-1.1-4-2.4-4-2.4.6-1.4 4.3-1.6 4.3-1.6-1-1.2-.9-3.2-.9-3.2 2.5.2 4.5 2.7 4.5 2.7s-2.4-1.3-2.1-5.6c0 0 1.3 0 2.1.9 0 0 0-4.7 2-5.3h.2c1.9.6 1.9 5.3 1.9 5.3.8-1 2.1-.9 2.1-.9.3 4.3-2.1 5.6-2.1 5.6s2-2.5 4.5-2.6c0 0 0 2-.8 3.2 0 0 3.6.1 4.3 1.5 0 0 0 1.4-4 2.3 0 0 .8 1.9.5 3.2 0 0-3.6-1-3.9-2.6H315'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M295.2 226h-1.5c-.4 1.5-3.6 2.4-3.6 2.4-.4-1.2.5-2.9.5-2.9-3.7-1-3.7-2.2-3.7-2.2.5-1.3 4-1.5 4-1.5-1-1.1-.8-3-.8-3 2.3.2 4.2 2.5 4.2 2.5s-2.3-1.2-2-5.2c0 0 1.2 0 2 .8 0 0 0-4.4 1.8-4.9h.2c1.8.5 1.8 4.9 1.8 4.9.8-.9 2-.8 2-.8.3 4-2 5.2-2 5.2s1.9-2.3 4.2-2.4c0 0 .1 1.8-.7 3 0 0 3.4.1 4 1.4 0 0 0 1.3-3.8 2.2 0 0 .8 1.7.5 3 0 0-3.3-1-3.6-2.5z'
      />
      <path
        fill='#fff'
        d='M315.7 166.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.4'
        d='M296 226.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
      />
      <path
        fill='#fff'
        d='M315.7 164.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.3'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M296 225.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4z'
      />
      <path
        fill='#fc0'
        d='m340.4 167.4 1.6.3c0 1.6 3.2 3.3 3.2 3.3.6-1 0-3 0-3 4.2-.2 4.5-1.6 4.5-1.6-.3-1.4-3.8-2.4-3.8-2.4 1-1 1.4-2.9 1.4-2.9-2.4-.4-4.9 1.5-4.9 1.5s2.7-.6 3.2-5c0 0-1.2-.2-2.1.4 0 0 1-4.5-.9-5.3l-.2-.1c-2 0-3 4.6-3 4.6-.6-1.1-2-1.2-2-1.2-1 4 1 5.8 1 5.8s-1.4-2.8-3.8-3.5c0 0-.5 2 0 3.2 0 0-3.5-.5-4.4.7 0 0-.3 1.4 3.3 3.2 0 0-1.1 1.6-1 3 0 0 3.5-.4 4.2-1.8l1.6.3 2.2.4'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='m319.1 228 1.5.3c0 1.5 3 3.1 3 3.1.6-1 .1-2.9.1-2.9 3.9-.1 4.1-1.4 4.1-1.4-.2-1.4-3.5-2.3-3.5-2.3 1-.9 1.3-2.7 1.3-2.7-2.3-.4-4.6 1.4-4.6 1.4s2.5-.6 3-4.6c0 0-1.1-.3-2 .3 0 0 .9-4.2-.8-5l-.2-.1c-1.9 0-2.8 4.3-2.8 4.3-.6-1-1.8-1.1-1.8-1.1-1.1 3.8.9 5.4.9 5.4s-1.4-2.6-3.6-3.2c0 0-.5 1.8 0 3 0 0-3.3-.5-4.1.6 0 0-.3 1.3 3.1 3 0 0-1.1 1.5-1 2.8 0 0 3.3-.3 4-1.7l1.5.3 2 .4'
      />
      <path
        fill='#fff'
        d='M339.2 168a3.3 3.3 0 1 1 1.5-6.4 3.3 3.3 0 0 1-1.4 6.4'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.4'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M318 228.6a3 3 0 1 1 1.4-6 3 3 0 0 1-1.3 6z'
      />
      <path
        fill='#fff'
        d='M339.6 166.7a1.8 1.8 0 1 1 .8-3.6 1.8 1.8 0 0 1-.8 3.6'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.3'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M318.4 227.3a1.7 1.7 0 1 1 .7-3.3 1.7 1.7 0 0 1-.7 3.3z'
      />
      <path
        fill='#fc0'
        d='m290.5 167-1.6.2c-.3 1.7-3.6 3.2-3.6 3.2-.5-1.3 0-3.2 0-3.2-4-.4-4.1-1.8-4.1-1.8.4-1.4 4-2.2 4-2.2-1-1-1.1-3-1.1-3 2.3-.2 4.6 2 4.6 2s-2.5-.9-2.8-5.1c0 0 1.4-.4 2.2.4 0 0-.5-4.6 1.3-5.4h.2c2 .3 2.6 4.8 2.6 4.8.7-1 2-1 2-1 .8 4.2-1.4 5.7-1.4 5.7s1.7-2.6 4-3.2c0 0 .5 2-.3 3.4 0 0 3.7-.4 4.4 1 0 0 .2 1.3-3.6 2.8 0 0 1 1.7 1 3 0 0-3.6-.6-4.3-2.2l-1.5.4-2.2.2'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='m272.3 227.6-1.5.2c-.2 1.6-3.3 3-3.3 3-.5-1.2 0-3 0-3-3.7-.4-3.9-1.7-3.9-1.7.4-1.3 3.8-2 3.8-2-1-1-1.1-2.8-1.1-2.8 2.2-.2 4.4 1.8 4.4 1.8s-2.4-.8-2.7-4.8c0 0 1.3-.3 2.1.4 0 0-.5-4.3 1.2-5h.2c1.9.2 2.4 4.5 2.4 4.5.7-.9 2-1 2-1 .7 4-1.4 5.4-1.4 5.4s1.6-2.5 3.8-3c0 0 .4 1.9-.3 3.1 0 0 3.4-.3 4.1 1 0 0 .2 1.2-3.4 2.6 0 0 1 1.6.9 2.8 0 0-3.3-.5-4-2l-1.4.3-2 .2'
      />
      <path
        fill='#fff'
        d='M291.4 167.8a3.2 3.2 0 1 0-.8-6.4 3.2 3.2 0 0 0 .8 6.4'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.4'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M273.2 228.4a3 3 0 1 0-.8-6 3 3 0 0 0 .8 6z'
      />
      <path
        fill='#fff'
        d='M291.2 166.3a1.8 1.8 0 1 0-.4-3.5 1.8 1.8 0 0 0 .4 3.5'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.3'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M273 227a1.7 1.7 0 1 0-.4-3.3 1.7 1.7 0 0 0 .4 3.3z'
      />
      <path
        fill='#fc0'
        d='M362.9 174s-.9-2.2-2.7-1.5-1.6 1.1-3.2 1.1c0 0-.6-2 .2-2.9 0 0-2.5-1-3.2-3.2 0 0 1.4-1.6 4.7-1 0 0 0-1.5.3-2.3 0 0 3.6 1 3.6 3.1 0 0-1.1-3.8.8-6.6 0 0 1.6.6 1.5 2.4 0 0 .8-3.6 5.6-2.6 0 0-2.6 2.3-2.7 3.4-.2 1-2.4 2.9-2.5 3.5a4 4 0 0 1-.8 2.3c-.7.6-.8 1.7-.8 2 0 .3 0 1.8-.8 2.2'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M340.2 234.1s-.8-2-2.5-1.3-1.5 1-3 1c0 0-.6-1.9.2-2.7 0 0-2.4-.9-3-3 0 0 1.3-1.5 4.4-.9 0 0-.1-1.5.3-2.2 0 0 3.3 1 3.3 2.9 0 0-1-3.6.8-6.2 0 0 1.5.6 1.4 2.3 0 0 .7-3.4 5.2-2.5 0 0-2.4 2.2-2.5 3.2-.2 1-2.2 2.7-2.3 3.3 0 .5-.2 1.5-.8 2.1-.6.6-.7 1.6-.7 2 0 .2 0 1.6-.8 2z'
      />
      <path
        fill='#fff'
        d='M360.2 169.7a3.2 3.2 0 0 1 5.1-2c0 .6-.3 1.4-.8 2-.7.6-.8 1.7-.8 2a3.2 3.2 0 0 1-.4 1.8h-.5a3.2 3.2 0 0 1-2.6-3.8'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.4'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M337.7 230.1a3 3 0 0 1 4.8-1.8c0 .5-.3 1.3-.8 1.8-.6.6-.7 1.6-.7 2a3 3 0 0 1-.4 1.6h-.5a3 3 0 0 1-2.4-3.6z'
      />
      <path
        fill='#fff'
        d='M361.6 170a1.8 1.8 0 0 1 3.2-.8l-.3.5c-.7.6-.8 1.7-.8 2v.3h-.6c-1-.1-1.6-1-1.4-2.1'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.3'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M339 230.4a1.7 1.7 0 0 1 3-.7l-.3.4c-.6.6-.7 1.6-.7 2v.2h-.6c-1-.1-1.5-1-1.3-2z'
      />
      <path
        fill='#fc0'
        d='M269 173s.9-2 2.7-1.2c1.7 1 1.5 1.2 3.2 1.2 0 0 .6-2 0-2.8 0 0 2.5-.8 3.2-3 0 0-1.3-1.7-4.6-1.3 0 0 .2-1.6-.2-2.3 0 0-3.5.8-3.6 2.7 0 0 1.2-3.7-.5-6.6 0 0-1.7.7-1.7 2.4 0 0-.5-3.7-5.3-3 0 0 2.4 2.5 2.4 3.6s2.2 3 2.2 3.6c0 .6.2 1.7.8 2.4.7.6.7 1.7.6 2.1 0 .2 0 1.7.8 2.2'
      />
      <path
        stroke='#000'
        fill='#bcac0b'
        strokeWidth='.7'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M252.2 233.3s.8-2 2.5-1.2c1.6.9 1.4 1.1 3 1.1 0 0 .6-1.8 0-2.6 0 0 2.4-.7 3-2.8 0 0-1.2-1.6-4.3-1.2 0 0 .2-1.5-.2-2.2 0 0-3.3.8-3.4 2.6 0 0 1.2-3.5-.4-6.2 0 0-1.6.6-1.6 2.2 0 0-.5-3.4-5-2.7 0 0 2.3 2.3 2.3 3.3s2 2.8 2 3.4c0 .5.2 1.6.8 2.2.6.6.6 1.6.5 2 0 .2 0 1.6.8 2z'
      />
      <path
        fill='#fff'
        d='M271.8 168.9a3.2 3.2 0 0 0-5-2.1c0 .5.3 1.4.8 1.9.7.6.7 1.7.6 2.1 0 .2 0 1 .4 1.8h.4a3.2 3.2 0 0 0 2.8-3.7'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.4'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M254.8 229.4a3 3 0 0 0-4.6-2c0 .5.2 1.3.7 1.8.6.6.6 1.6.5 2 0 .2 0 1 .4 1.7h.4a3 3 0 0 0 2.6-3.5z'
      />
      <path
        fill='#fff'
        d='M270.4 169.1a1.8 1.8 0 0 0-3.2-1l.4.6c.7.6.7 1.7.6 2.1v.2h.7c1 0 1.6-1 1.5-1.9'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.3'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
        d='M253.5 229.6a1.7 1.7 0 0 0-3-.9l.4.5c.6.6.6 1.6.5 2v.2h.7c.9 0 1.5-.9 1.4-1.8z'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='1.5'
        d='M257.2 251.6s33.8-13.2 76.4.3'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
      />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.5'
        d='M338.4 241.1c-47.1-15-84.7-.8-84.7-.8'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
      />
      <path fill='red' d='m315.7 177.9-4 2 3.6 2.2 4.3-2z' />
      <path
        fill='none'
        stroke='#000'
        strokeWidth='.5'
        d='m296 237.8-3.8 1.9 3.4 2.1 4-2-3.6-2'
        transform='matrix(1.06667 0 0 1.06758 0 -76)'
      />
    </g>
  </svg>
);