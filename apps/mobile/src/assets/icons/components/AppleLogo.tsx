import * as React from 'react';
import Svg, { Defs, Pattern, Rect, Use, Image } from 'react-native-svg';

export const AppleLogo = (props) => (
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
      fill="url(#pattern0_953_2526)"
    />
    <Defs>
      <Pattern
        id="pattern0_953_2526"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <Use href="#image0_953_2526" transform="scale(0.02)" />
      </Pattern>
      <Image
        id="image0_953_2526"
        width="50"
        height="50"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACV0lEQVR4nO3aT4hNURwH8DtGIlZmhvxLhBgbMhHKFJIUtjZSVhbCQrGzIhsW/myJssGYUmMlf8qfjX9LSZEZZiFGExaY+ejWnbzGezzuee+8W/Ndv1Pnc8+555zfuS9JIgcLsBWzkqIF47Abj/3K2qRIyUbggd/TnhQlWIK3ZRCf0JwUIWjFO+VzNSlKcLkCojjvB5ZjuAKiOylKcK4C4g1akqIEvWUQ74u2UrWWQTzD0qRIwdRRgP2YkDRS0IzFWIfVleY7FmF6hfYL01ULazAfTXXpfNaBzejC4KgpM5zt2nvTkajQdib24Do+l5l2/biAzloC0id7V3X5mnVoJ9bjIG5jSPXpCX6YxLYKT7DW6Qu2MGA7vouXXkzLi2jHF3EzgE15EE14GBnxMl3Z8o7GlsiIfszNhcggtyIihrEhBKIFPyJCruRGZJAd4mZlKMixiIi+YEeVtPyMCOkOgsggNyNCzoaE3IsIOR0SEnPp7QkJuRYR8jok5Iy4WRUKsi8y5HwoSGdkyFBaPoeATI5cg4ycfKcVfQkeyRPMyAs5rDHSl1545IHM+8fLglrnRB7MDY2TXXkg6fe9RsgApuSBpLeBr2IrcPS/EQ1UZA2iLTckw9yJCDkQBJFBlkWq4Z9ifDBIhjlSZ8Q3dARFlLz49Zxih4IjSjBteFEHRFf6D4maQUp2/HIf/ssl/d2j7Mz0oco29zGppogSzOw/TLPn6bTAnDLtOtKaHB8rtL2Ynrzrghh1yb0RJ3EJx7M65q93UpiY7U+nsrbpPdqK+vR8LGNJqs1PXbg7s3sqhSwAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
