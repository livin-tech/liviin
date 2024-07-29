import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const HouseRound = (props) => {
  return (
    <Svg
      width="71"
      height="70"
      viewBox="0 0 71 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="35.5" cy="35" r="35" fill="#526E49" fillOpacity="0.3" />
      <Path
        d="M35.5 18.333H25.5C21.3633 18.333 20.5 19.1963 20.5 23.333V51.6663H40.5V23.333C40.5 19.1963 39.6367 18.333 35.5 18.333Z"
        stroke="#526E49"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <Path
        d="M45.5 28.333H40.5V51.6663H50.5V33.333C50.5 29.1963 49.6367 28.333 45.5 28.333Z"
        stroke="#526E49"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <Path
        d="M28.833 25H32.1663M28.833 30H32.1663M28.833 35H32.1663"
        stroke="#526E49"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M34.6663 51.667V45.0003C34.6663 43.429 34.6663 42.6433 34.1782 42.1552C33.69 41.667 32.9043 41.667 31.333 41.667H29.6663C28.095 41.667 27.3093 41.667 26.8212 42.1552C26.333 42.6433 26.333 43.429 26.333 45.0003V51.667"
        stroke="#526E49"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
