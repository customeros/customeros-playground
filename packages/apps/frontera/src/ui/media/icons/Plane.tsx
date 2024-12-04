import React from 'react';

import { twMerge } from 'tailwind-merge';

interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
}

export const Plane = ({ className, ...props }: IconProps) => (
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
      d='M17.7448 2.81298C18.7095 1.8165 20.3036 1.80361 21.2843 2.78436C22.2382 3.73823 22.2559 5.27921 21.3243 6.25481L18.5456 9.16457C18.3278 9.39265 18.219 9.50668 18.1518 9.64024C18.0924 9.75847 18.0571 9.88732 18.0478 10.0193C18.0374 10.1684 18.0728 10.3221 18.1438 10.6293L19.8717 18.1169C19.9444 18.4323 19.9808 18.59 19.9691 18.7426C19.9587 18.8776 19.921 19.0091 19.8582 19.1291C19.7873 19.2647 19.6729 19.3792 19.444 19.608L19.0732 19.9788C18.4671 20.585 18.164 20.888 17.8538 20.9429C17.583 20.9908 17.3043 20.925 17.0835 20.761C16.8306 20.5733 16.695 20.1666 16.424 19.3534L14.4142 13.3241L11.0689 16.6695C10.8692 16.8691 10.7694 16.969 10.7026 17.0866C10.6434 17.1907 10.6034 17.3047 10.5846 17.423C10.5633 17.5565 10.5789 17.6968 10.61 17.9775L10.7937 19.6309C10.8249 19.9116 10.8405 20.0519 10.8192 20.1854C10.8004 20.3037 10.7604 20.4177 10.7012 20.5219C10.6344 20.6394 10.5346 20.7393 10.3349 20.939L10.1374 21.1365C9.66434 21.6095 9.42781 21.8461 9.16496 21.9146C8.93442 21.9746 8.68999 21.9504 8.47571 21.8463C8.2314 21.7276 8.04585 21.4493 7.67475 20.8926L6.10643 18.5401C6.04013 18.4407 6.00698 18.391 5.96849 18.3459C5.9343 18.3058 5.89701 18.2685 5.85694 18.2343C5.81184 18.1958 5.76212 18.1627 5.66267 18.0964L3.31018 16.5281C2.75354 16.157 2.47521 15.9714 2.35649 15.7271C2.25236 15.5128 2.22816 15.2684 2.28824 15.0378C2.35674 14.775 2.59327 14.5385 3.06633 14.0654L3.26384 13.8679C3.46352 13.6682 3.56337 13.5684 3.68095 13.5016C3.78511 13.4424 3.89906 13.4024 4.01736 13.3836C4.15089 13.3623 4.29123 13.3779 4.5719 13.4091L6.22529 13.5928C6.50596 13.6239 6.6463 13.6395 6.77983 13.6182C6.89813 13.5994 7.01208 13.5594 7.11624 13.5002C7.23382 13.4334 7.33366 13.3336 7.53335 13.1339L10.8787 9.7886L4.84939 7.77884C4.03616 7.50776 3.62955 7.37222 3.44176 7.11932C3.27777 6.89848 3.212 6.61984 3.2599 6.34898C3.31477 6.03879 3.61784 5.73572 4.22399 5.12957L4.59476 4.7588C4.82365 4.52991 4.9381 4.41546 5.07369 4.34457C5.1937 4.28183 5.3252 4.24411 5.46023 4.23371C5.61278 4.22197 5.77049 4.25836 6.0859 4.33115L13.545 6.05249C13.855 6.12401 14.01 6.15978 14.1596 6.14914C14.3041 6.13886 14.4446 6.09733 14.5714 6.02742C14.7028 5.95501 14.8134 5.84074 15.0347 5.6122L17.7448 2.81298Z'
    />
  </svg>
);
