import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const MaintenaceOutline = (props) => {
  return (
    <Svg
      width="61"
      height="60"
      fill="none"
      viewBox="0 0 61 60"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="30.5" cy="30" r="29.5" stroke="#4E5C4F" strokeOpacity="0.5" />
      <Path
        d="M40.948 31.6959C39.4611 33.1825 36.6635 33.1247 32.374 33.1247C29.6143 33.1247 27.3767 30.8839 27.3753 28.1241C27.3753 23.8375 27.3175 21.0383 28.8044 19.5517C30.2911 18.0652 30.9479 18.1253 37.5342 18.1253C38.1707 18.1226 38.4911 18.8924 38.0411 19.3424L34.6499 22.7339C33.7891 23.5948 33.7868 24.9904 34.6476 25.8512C35.5085 26.7119 36.9043 26.712 37.7653 25.8514L41.1574 22.4607C41.6075 22.0107 42.3774 22.331 42.3746 22.9674C42.3746 29.5528 42.4349 30.2094 40.948 31.6959Z"
        stroke="#4E5C4F"
      />
      <Path
        d="M32.375 33.125L24.6605 40.8395C23.2798 42.2201 21.0412 42.2201 19.6605 40.8395C18.2798 39.4588 18.2798 37.2201 19.6605 35.8395L27.375 28.125"
        stroke="#4E5C4F"
        strokeLinecap="round"
      />
      <Path
        d="M22.3862 38.125H22.375"
        stroke="#4E5C4F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
