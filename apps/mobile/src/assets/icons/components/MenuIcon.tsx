import * as React from 'react';
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg';

export const MenuIcon = (props) => {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1371_7803)">
        <Rect width={40} height={40} rx={20} fill="#4E5C4F" />
        <Path
          d="M12 13h12M12 20h16M12 27h8"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1371_7803">
          <Rect width={40} height={40} rx={20} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
