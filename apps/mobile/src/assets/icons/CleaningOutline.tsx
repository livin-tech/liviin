import React from 'react';
import Svg, { Circle, Defs, Pattern, Rect, Use, Image } from 'react-native-svg';

export const CleaningOutline = (props) => {
  return (
    <Svg
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="30.5" cy="30" r="29.5" stroke="#4E5C4F" strokeOpacity="0.5" />
      <Rect
        x="16"
        y="15"
        width="30"
        height="30"
        fill="url(#pattern0_1098_20966)"
      />
      <Defs>
        <Pattern
          id="pattern0_1098_20966"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use href="#image0_1098_20966" transform="scale(0.01)" />
        </Pattern>
        <Image
          id="image0_1098_20966"
          width="50"
          height="50"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHbElEQVR4nNVaaYwVRRCeBQ+8b/GIVzzwxBBF47kBJS68qapZdJSd7rcratYYQGPQGFDyJMhhRBNAfxgJ8YpEAUWIiYLRqDEooKgoHkEUBO8L8ACBXVM9NW9n3868N2/mvR9bySS787q76uuurvq6eiyrF0rTaPco0PQyaNqCil4Y0TbiGKs3Cip8GjV1Bg8ofMXqbeK67uGo6F9Q+J+ddy4XMD9avU1Aw1izCppeBAXaXxFaXvVA7I+gYQJqXIqKPgWF36CmFaBoFmm61KqzgKIPjfGeY6OixT4o57bEAzS2NfZjY3lJw/5Z+oDGN528c0Y9QGAeB8lqbMl5ucOMi2ncDaOgv99A00pG2qSaDo4cYBQehwo/EmN/AU3TMY8X8mB2u71/TjefD4omsa8KmD9Bw9CaA1E0R4BMB+W0BBPXc7kULikUCn3CnV3X3Y+BBtGBN1ucImqjQ1HhQvHbbeTRebUC0djW2A81/Y6aOnjFUdEif2JxTLGR0+qcCgp/NT8onBECODEMohRklHAb0LRAZmu167p9awEEulbgbdd1DwSN/4DCPc2q+djuDTUMRU27fKNBm3ceXMZ+yC7DSSipUnZRUPgTj2VrurY2QGi5uNWNoJzrA1BlQ5tvPF7M75p189GWZTWkUDxR9tRW0PQGKbq1vb197zQgqI1O5tlndx2mhx3A2Vzc6vZKyv3I0Jo73kopxo97RrUPOHBUOxYoul9W4AkOLqjoLwYWad8Ib+RJqGgHuxcoWiUbdhVv9rRgOKpBKwzkmQtcjaNf07imfZOOUSgU+qDGb42b5p1L2FVlz74b2QEVTRNFjzt55whQuF6W77k0rhXpHkzy/H1zV9J+oGGYGL7O/K9ovth1Z0wHXG0aeHilDwzPZv+WlZmYFYhvBLSJ236WvA/ND8Czd/A+4RBs5+0Tkyv2HNvfZLgHPCAro7CbsLvxUy1BhFHQ39bkyF5b0dNYSYaVnnCCA02Tk/SpPGaMn4uAonHi7i/J/8/6PIvGW6UiS5VMuaINdot9pGzApTUAs7WHQSEBjWu4HWkCDhDi6h2833o2lgiFebzaipEwTUGF77iuu4+VQViXAFkZ18bxnAtk8n7g/IMKUULw+9GDanzGbwBjyyo3xJE2i5vNywIkcBlQ9FSsPo2PBQSx26lQ4d1xHe4T5HMqGcCzxBwnCfAKQB6VMSZUIIiddot9plkR+Z95YTQQhddJXH49iRF2nvKyxLttzxmeBgjrktltjvqdPPICNxYbcwEJjR0UWuEcWZHNiQ1R+FDoIPVdtYACF3XyzlllgWocbWxUNK/cChrhaMCzy9Eg7mBVKkzNw9EONG5KCoJ1sC7ODVEkkkIEkek6twGNv7GeXEvu9LKDo6avzAy1OBclNYhXIg0QW9mDpd/n0eOSn6MUzjXA8nSN6FhTcfCunICtiQ3ynOEMwH+gKXE/2WNBkgtLgfOToo2SO0whgxmvtL+3Cp/HqVadpYuc0rTS36g4+/QFE9XGxsa9UOHPQfSqODgpukUGX2TVWbgeFbf6qPH5cK4ImC8q+jjR4EHFrhpWmlaYjpsZVvbgCIK4g89DwTmcjxSSOCclGpzPH0LiIiNJrYRdBTTuZF2lEZIPX+jP/uKuyOgfxuLCdKQEvogKB9QBQ6BjQFTOYiLKVUsMFT7QwyGpvISzqE+Rs5874oTHDlfPfQA4AzRuDzHiXVKOXSZAJlenRMIcaLqnXkD4lMckkPcDGxgC0GHquIoWyT4pUv2cbj63OiAejZfOT9YLiOu6h5CiK4IEXASQx0Elm36OrNz6qpUUiZmi96z6SAOvdrEIqPETrorE2PKghOiZVWtheiyz8IdVY5HEZs4ThkdpeqBcdERNK/wQTVdVrYzDnZRHO3vUUzOInO5MYZuPqkmYMkpVP3WBEBWuNQo9HJJqgDL0hxlskAT9ozPOZt4V0aVB2HhnkqJ5pHRV0au4ASojcs7u8JOgX0tmQ7noJ/lkWXQ/+pt/T13lBEVTZMPPsjKKueHSuEmS7B1dOvx7P67fxt2foMavjR2tMDCVctSoJFq8lgFDt6oih9rgjkQq6ZsrrTpI/Sq2LFpJQiWYjRkwiDG4pNRgZrwSudaFL4DMVVqomAF5GCntvkx1UcRHS5OkNHXw35mAaPxeztmnhMC9WnqvARpOC4p/VpcdfYvuFVVVTGiA8WtenYxADMsNF/O42Mbv+AqjtFhXWngDDU3yfmeqi9Xgiov3SxYgfPtrjJbvRKTkaSJYOKwKZYmsIKLGmfLbdmYe1RlQ5Dk0JRsQvw7AVUV51RBcUzDr7XYZ5N/d76Ib6ISeZ3icW2QEXNi7CQ9KasAYYcELsgDhDC5AtvGsh+tVoOnhqDsQ0PQWE8tIjiaswy920M0Vb72Y30jsX5sFiDE8NJvMtUDRI0WKrnAhg2XXM3VluV4DjZsM3W+FgeGIxTUtTqRB1uf9Fny4EKmc+U34PJD6UbTB3EtqnBow3vo9uDQKS0NwOsv6GDfwgPiaDDUW+HML+VjMuEmtHv4I7X+gZb1oXjWB/gAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
};
