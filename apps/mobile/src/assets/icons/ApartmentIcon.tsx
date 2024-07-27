import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ApartmentIcon(props) {
  return (
    <Svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.5 3.75H11.25c-4.654 0-5.625.971-5.625 5.625V41.25h22.5V9.375c0-4.654-.971-5.625-5.625-5.625zM33.75 15h-5.625v26.25h11.25V20.625c0-4.654-.971-5.625-5.625-5.625z"
        stroke="#333"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path
        d="M15 11.25h3.75M15 16.875h3.75M15 22.5h3.75"
        stroke="#333"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.562 41.25v-7.5c0-1.768 0-2.652-.55-3.2-.548-.55-1.432-.55-3.2-.55h-1.875c-1.768 0-2.652 0-3.2.55-.55.548-.55 1.432-.55 3.2v7.5"
        stroke="#333"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ApartmentIcon;
