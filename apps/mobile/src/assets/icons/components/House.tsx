import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const House = (props) => {
  return (
    <Svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.125 16.875l8.945-7.997c2.426-2.169 3.64-3.253 5.117-3.253 1.479 0 2.692 1.084 5.118 3.253l8.945 7.997M15.938 15v22.5m22.5 0V15"
        stroke="#333"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.563 26.25c1.553 0 2.812-1.679 2.812-3.75 0-2.071-1.26-3.75-2.813-3.75-1.553 0-2.812 1.679-2.812 3.75 0 2.071 1.26 3.75 2.813 3.75z"
        stroke="#333"
        strokeWidth={1.8}
      />
      <Path
        d="M6.563 26.25V37.5"
        stroke="#333"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <Path
        d="M3.75 37.5h37.5M22.5 37.5V30c0-1.768 0-2.652.55-3.2.548-.55 1.432-.55 3.2-.55h1.875c1.768 0 2.652 0 3.2.55.55.548.55 1.432.55 3.2v7.5M25.313 20.625h3.75M25.313 15h3.75"
        stroke="#333"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default House;
