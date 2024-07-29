import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Edit = (props) => {
  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.2141 12.9824L25.6158 11.5806C26.39 10.8065 27.6452 10.8065 28.4194 11.5806C29.1935 12.3548 29.1935 13.61 28.4194 14.3841L27.0176 15.7859M24.2141 12.9824L18.9802 18.2163C17.9349 19.2616 17.4123 19.7842 17.0564 20.4211C16.7005 21.058 16.3424 22.5619 16 24C17.4381 23.6576 18.942 23.2995 19.5789 22.9436C20.2158 22.5877 20.7384 22.0651 21.7837 21.0198L27.0176 15.7859M24.2141 12.9824L27.0176 15.7859"
        stroke="#333333"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M29 20C29 24.2426 29 26.364 27.682 27.682C26.364 29 24.2426 29 20 29C15.7574 29 13.636 29 12.318 27.682C11 26.364 11 24.2426 11 20C11 15.7574 11 13.636 12.318 12.318C13.636 11 15.7574 11 20 11"
        stroke="#333333"
        stroke-width="1.3"
        stroke-linecap="round"
      />
    </Svg>
  );
};
