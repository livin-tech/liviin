import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function CalendarRound(props) {
  return (
    <Svg
      width={82}
      height={82}
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={41} cy={41} r={40} fill="#4E5C4F" />
      <Circle cx={41} cy={41} r={40.5} stroke="#4E5C4F" strokeOpacity={0.4} />
      <Path
        d="M51 24.333v3.333m-20-3.333v3.333"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M40.992 42.667h.015m-.015 6.667h.015m6.645-6.667h.015m-13.334 0h.015m-.015 6.667h.015M26.833 34.333h28.334M25.167 41.405c0-7.262 0-10.893 2.087-13.149C29.34 26 32.699 26 39.417 26h3.166c6.718 0 10.077 0 12.164 2.256 2.086 2.256 2.086 5.887 2.086 13.15v.855c0 7.262 0 10.893-2.086 13.15-2.087 2.256-5.446 2.256-12.164 2.256h-3.166c-6.718 0-10.077 0-12.163-2.256-2.087-2.257-2.087-5.888-2.087-13.15v-.856z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26 34.333h30"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CalendarRound;
