import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Sofa(props) {
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
        d="M8.25 23.375V27.5m16.5-4.125V27.5M27.5 12.375c0-2.57 0-3.855-.553-4.813a4.125 4.125 0 00-1.51-1.51C24.48 5.5 23.195 5.5 20.625 5.5h-8.25c-2.57 0-3.855 0-4.813.553a4.125 4.125 0 00-1.51 1.51C5.5 8.52 5.5 9.805 5.5 12.375"
        stroke="#4E5C4F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.5 12.375a2.75 2.75 0 00-2.75 2.75v2.75c0 1.137-.238 1.375-1.375 1.375H9.625c-1.138 0-1.375-.238-1.375-1.375v-2.75a2.75 2.75 0 10-4.125 2.382v.368c0 2.593 0 3.889.805 4.695.806.805 2.102.805 4.695.805h13.75c2.593 0 3.889 0 4.695-.805.805-.806.805-2.102.805-4.695v-.368a2.75 2.75 0 00-1.375-5.132z"
        stroke="#4E5C4F"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Sofa;
