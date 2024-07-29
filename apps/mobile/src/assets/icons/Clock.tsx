import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Clock = (props) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.0001 18.3337C14.6025 18.3337 18.3334 14.6027 18.3334 10.0003C18.3334 5.39795 14.6025 1.66699 10.0001 1.66699C5.39771 1.66699 1.66675 5.39795 1.66675 10.0003C1.66675 14.6027 5.39771 18.3337 10.0001 18.3337Z"
        stroke="#333333"
        stroke-opacity="0.7"
      />
      <Path
        d="M10 6.66699V10.0003L11.6667 11.667"
        stroke="#333333"
        stroke-opacity="0.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
