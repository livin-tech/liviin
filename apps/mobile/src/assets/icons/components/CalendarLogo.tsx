import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CalendarLogo = (props) => (
  <Svg
    width={55}
    height={55}
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M41.25 4.583v4.584m-27.5-4.583v4.583"
      stroke="#526E49"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M27.49 29.791h.02m-.02 9.167h.02m9.136-9.166h.02m-18.333 0h.02m-.02 9.166h.02M8.02 18.334h38.96M5.73 28.057c0-9.985 0-14.978 2.869-18.08 2.87-3.102 7.487-3.102 16.724-3.102h4.354c9.237 0 13.855 0 16.724 3.102 2.87 3.102 2.87 8.095 2.87 18.08v1.177c0 9.986 0 14.978-2.87 18.08-2.869 3.103-7.487 3.103-16.724 3.103h-4.354c-9.237 0-13.855 0-16.724-3.102-2.87-3.103-2.87-8.095-2.87-18.08v-1.178z"
      stroke="#526E49"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.875 18.334h41.25"
      stroke="#526E49"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
