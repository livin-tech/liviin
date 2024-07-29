import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function Wind(props) {
  return (
    <Svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.75 8.17c4.813 4.718 11.791 2.696 13.382 0 .234-.397.368-.858.368-1.349 0-1.489-1.231-2.696-2.75-2.696S11 5.332 11 6.821M23.375 12.276c0-2.223 1.539-4.026 3.438-4.026 1.898 0 3.437 1.803 3.437 4.026 0 .986-.303 1.89-.805 2.59-2.844 4.647-16.69 2.894-23.945 1.436M17.992 27.345c.284.891 1.047 1.53 1.945 1.53 1.14 0 2.063-1.027 2.063-2.295 0-.43-.107-.834-.293-1.178-1.77-3.412-10.707-5.707-18.957.413"
        stroke="#4E5C4F"
        strokeLinecap="round"
      />
      <Path
        d="M26.125 21.313h2.75"
        stroke="#4E5C4F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Wind;
