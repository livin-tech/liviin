import * as React from 'react';
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg';

function ProfileIcon(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1371_7809)">
        <Rect x={4} y={4} width={40} height={40} rx={20} fill="#4E5C4F" />
        <Path
          d="M34 24c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z"
          stroke="#fff"
          strokeWidth={1.8}
        />
        <Path
          d="M26.75 21.5a2.75 2.75 0 11-5.5 0 2.75 2.75 0 015.5 0z"
          stroke="#fff"
          strokeWidth={1.8}
        />
        <Path
          d="M17.5 31l.56-.98a5 5 0 014.342-2.52h3.196a5 5 0 014.342 2.52l.56.98"
          stroke="#fff"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1371_7809">
          <Rect x={4} y={4} width={40} height={40} rx={20} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ProfileIcon;
