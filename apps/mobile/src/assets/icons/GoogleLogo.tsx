import * as React from 'react';
import Svg, { Defs, Pattern, Rect, Use, Image } from 'react-native-svg';

export const GoogleLogo = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width="24" height="24" fill="url(#pattern0_953_2530)" />
    <Defs>
      <Pattern
        id="pattern0_953_2530"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <Use href="#image0_953_2530" transform="scale(0.02)" />
      </Pattern>
      <Image
        id="image0_953_2530"
        width="50"
        height="50"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkElEQVR4nO2ZO2sVQRSARyVRBFHQoPgqxcZEG1HBIo1dyvisRQjaa4QoCD4KwUaj+AuMGCxMxMoHJI0YVGxERVALNSYSLDQG8snBIyxyd3ZnZ2bv3rAfXAiX7Dn3u3v2zMy5xtTU1NS4ACwGdgH9wB3gFTAN/Abm9G95b1j/Z49cY6oCsAm4CHzCHbnmksRopkAHcB2YxR+5a9ckZtkSh4EpwjMNHCpDoA24SXxuSK5YEsuBUcrhB7A91p1wlZgEXgAj+prQ9/JI7A0uoSJ5y+kNMAB0pcRZBOwATgMfypY4kkPgM9DnUtdAO3As0TSiSnTk6E5jwFrPdWg0moSg3cPGLWCpqTLAxozFbqzyEoJuO2zPROFyKnsD+NEi0mdaAWB3RouNs+qGRrfZaQyYVoG/54k0ugrE6w306nFNLAegRky6Smi8UMw5lbVlEXzeZBFhs0vitPXjfgVEti0Ukc6FUlpbQjzs3yogsjJU+3U+uRVos/0puWdCLohnTGSAcym5H7sGkkFbGm/lUBRRog14n5L7cpFNY6Oj6D+ORxQ5Ycm7r0jAC5aAX4B1ESTWWwYUM8CyGAer8ZAHKy2pJ5Z8gz7BB7EzFEJGvmngriXPvNecC1gja0eGzLhPmWk5PczIMVxYIpHoINl81Ye03bGUjgLfM2L/ArZ6i2hSmbrn4R1wVoZwlgFdJ3Aq4yid5GQQicS3J2NPF2S/9lJnVnLt0wIT/HvAkmAiiSG2q4wPE8CKoBL/3ZmsThaCR06bQw+hAzkn667MA1cKLXweMquBq9pVQvAM6C5NoIHQBuB8xt4sjVl9oHuko5kqoBvNndIugdv6I8+UftifOmZ9DTzQcex+YFWzP3dNTY1pLf4A+riKh7P3srgAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
