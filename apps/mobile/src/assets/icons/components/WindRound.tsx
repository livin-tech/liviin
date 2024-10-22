import React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';

export const WindRound = (props) => {
  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_1228_7190)">
        <Circle cx="20" cy="20" r="12" fill="white" />
      </G>
      <Path
        d="M12.7727 15.7295C15.3977 18.3033 19.2043 17.2002 20.072 15.7295C20.1997 15.5132 20.2727 15.262 20.2727 14.9942C20.2727 14.1819 19.6012 13.5234 18.7727 13.5234C17.9443 13.5234 17.2727 14.1819 17.2727 14.9942"
        stroke="#4E5C4F"
        strokeLinecap="round"
      />
      <Path
        d="M24.0227 17.9695C24.0227 16.7567 24.8622 15.7734 25.8977 15.7734C26.9332 15.7734 27.7727 16.7567 27.7727 17.9695C27.7727 18.5073 27.6076 19 27.3337 19.3818C25.7824 21.9171 18.23 20.9607 14.2727 20.1657"
        stroke="#4E5C4F"
        strokeLinecap="round"
      />
      <Path
        d="M21.0868 26.1889C21.2412 26.6751 21.6579 27.0234 22.1477 27.0234C22.769 27.0234 23.2727 26.463 23.2727 25.7717C23.2727 25.5366 23.2145 25.3167 23.1132 25.1288C22.1476 23.2678 17.2727 22.0164 12.7727 25.3544"
        stroke="#4E5C4F"
        strokeLinecap="round"
      />
      <Path
        d="M25.5227 22.8984H27.0227"
        stroke="#4E5C4F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
