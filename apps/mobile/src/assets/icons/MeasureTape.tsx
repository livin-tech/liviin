import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const MeasureTape = (props) => (
  <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.375 14.22c0 1.536 2.462 2.78 5.5 2.78v-2.78c0-1.366 0-2.05-.546-2.467-.547-.417-1.089-.26-2.173.051-1.66.478-2.781 1.381-2.781 2.417z"
      stroke="#4E5C4F"
      strokeLinejoin="round"
    />
    <Path
      d="M22.5 12.188c0 2.657-4.31 4.812-9.625 4.812-5.316 0-9.625-2.155-9.625-4.813 0-2.657 4.31-4.812 9.625-4.812 5.316 0 9.625 2.155 9.625 4.813z"
      stroke="#4E5C4F"
    />
    <Path
      d="M3.25 12.875v9.167c0 2.531 4.31 4.583 9.625 4.583H28c1.296 0 1.945 0 2.347-.403.403-.402.403-1.05.403-2.347V19.75c0-1.296 0-1.945-.403-2.347C29.945 17 29.297 17 28 17H12.875"
      stroke="#4E5C4F"
    />
    <Path
      d="M25.25 26.625v-2.75m-5.5 2.75v-2.75m-5.5 2.75v-2.75m-5.5 2.063v-2.75"
      stroke="#4E5C4F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
