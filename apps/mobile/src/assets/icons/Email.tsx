import * as React from 'react';
import Svg, { Defs, Pattern, Rect, Use, Image } from 'react-native-svg';

export const Email = (props) => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect
      x="0.5"
      y="0.5"
      width="24"
      height="24"
      fill="url(#pattern0_953_2534)"
    />
    <Defs>
      <Pattern
        id="pattern0_953_2534"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <Use href="#image0_953_2534" transform="scale(0.02)" />
      </Pattern>
      <Image
        id="image0_953_2534"
        width="50"
        height="50"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nO2ZIUgDURyHpyaVGQwThNlMllk0Diwios1qtJrEJAguWAYaTaJFGYiC2aTFNAYHJoPBZBCDoDL3yYN3MMa77b3b7e4Pvg8ejO3u3ft4+/047nI5j8fj8XgGADAPHACXQC3jcaHXUnKV2AWayKMJ7NhKLAEt5PILlG1EzpDPqY1ICXhELnVgwfbvNQxsAR/I4VNnd8RKokNoWrdG1twCM84CBqE14CUDgVdgM+6i94CC4fs8cJRSLTf1tfKGdRTUGm1EAuAd2FZZyaAM6qYwA0Nqd4A3tUZbkZAHYC6lMogMMzAL3LUd6yyi+AGOgfGIMjgfVJiBUWAf+Oo4PpZIyDOwnHAZqDBvRMxZBp4izutLJETV8ZThvDHg0LIM1G3GCTBhmGdS/9btNikREfosA5sw9yIxkThl4BLm1EUU30BFBdMwVxG40aMYEeaKnsOFgYj0LIMYYc5UpGsZOIZZhIixDBzDLEYk5B5Y10N9ToogbZFBEXgRYQR+R4QR+B0RRvCvdqSBfBo2ItfI58pGZBX5rPQU0TLqXYREWuphhJVEm8wiUBXwkqemR9X64bXH4/F4PDk3/gBww+q9d+utgAAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
