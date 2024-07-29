import React from 'react';
import Svg, { Circle, Defs, Pattern, Rect, Use, Image } from 'react-native-svg';

export const CleaningFilled = (props) => {
  return (
    <Svg
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="30.5" cy="30" r="30" fill="#4E5C4F" />
      <Rect
        x="16"
        y="15"
        width="30"
        height="30"
        fill="url(#pattern0_1098_21111)"
      />
      <Defs>
        <Pattern
          id="pattern0_1098_21111"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use href="#image0_1098_21111" transform="scale(0.01)" />
        </Pattern>
        <Image
          id="image0_1098_21111"
          width="50"
          height="50"
          href="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};
