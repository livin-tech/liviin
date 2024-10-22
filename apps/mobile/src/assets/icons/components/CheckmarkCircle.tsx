import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CheckmarkCircle = (props) => {
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
        d="M36.6668 19.9997C36.6668 10.7949 29.2048 3.33301 20.0002 3.33301C10.7954 3.33301 3.3335 10.7949 3.3335 19.9997C3.3335 29.2043 10.7954 36.6663 20.0002 36.6663C29.2048 36.6663 36.6668 29.2043 36.6668 19.9997Z"
        fill="#4E5C4F"
      />
      <Path
        d="M13.3335 21.2497C13.3335 21.2497 16.0002 22.7705 17.3335 24.9997C17.3335 24.9997 21.3335 16.2497 26.6668 13.333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
