import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Bathroom = (props) => (
  <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.5 15.625h12.56c2.015 0 3.022 0 3.63 1.011.609 1.011.25 1.655-.466 2.945a8.391 8.391 0 01-7.35 4.294 8.414 8.414 0 01-5.539-2.063M11.5 15.625V6c0-1.296 0-1.945-.403-2.347-.402-.403-1.05-.403-2.347-.403-1.296 0-1.945 0-2.347.403C6 4.055 6 4.703 6 6v9.625c0 1.296 0 1.945.403 2.347.402.403 1.05.403 2.347.403 1.296 0 1.944 0 2.347-.403.403-.402.403-1.05.403-2.347zM10.125 10.125h4.125"
      stroke="#4E5C4F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.5 23.875c-1.375 1.375 0 5.5 2.75 6.875H6c1.375-1.375 3.713-5.775 2.063-12.375"
      stroke="#4E5C4F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
