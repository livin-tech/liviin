import React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';

export const CouchRound = (props) => {
  return (
    <Svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_1228_7219)">
        <Circle cx="21" cy="21" r="13" fill="white" />
      </G>
      <Path
        d="M16.4204 25.3584V27.7959M26.1704 25.3584V27.7959"
        stroke="#4E5C4F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.7954 18.8584C27.7954 17.3396 27.7954 16.5803 27.4689 16.0146C27.2549 15.6441 26.9472 15.3364 26.5767 15.1225C26.011 14.7959 25.2516 14.7959 23.7329 14.7959H18.8579C17.3392 14.7959 16.5798 14.7959 16.0142 15.1225C15.6436 15.3364 15.3359 15.6441 15.122 16.0146C14.7954 16.5803 14.7954 17.3396 14.7954 18.8584"
        stroke="#4E5C4F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.7954 18.8584C26.8979 18.8584 26.1704 19.5859 26.1704 20.4834V22.1084C26.1704 22.7806 26.0301 22.9209 25.3579 22.9209H17.2329C16.5607 22.9209 16.4204 22.7806 16.4204 22.1084V20.4834C16.4204 19.5859 15.6929 18.8584 14.7954 18.8584C13.8979 18.8584 13.1704 19.5859 13.1704 20.4834C13.1704 21.0849 13.4972 21.61 13.9829 21.891V22.1084C13.9829 23.6404 13.9829 24.4065 14.4589 24.8824C14.9348 25.3584 15.7008 25.3584 17.2329 25.3584H25.3579C26.89 25.3584 27.656 25.3584 28.1319 24.8824C28.6079 24.4065 28.6079 23.6404 28.6079 22.1084V21.891C29.0936 21.61 29.4204 21.0849 29.4204 20.4834C29.4204 19.5859 28.6929 18.8584 27.7954 18.8584Z"
        stroke="#4E5C4F"
        strokeLinejoin="round"
      />
    </Svg>
  );
};