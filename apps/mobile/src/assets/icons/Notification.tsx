// import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
import { View, Text } from 'react-native';

function Notification(props = { count: 0 }) {
  return (
    <View>
      <Svg
        width={46}
        height={46}
        viewBox="0 0 46 46"
        fill="none"
        {...props}
      >
        <G clipPath="url(#clip0_1540_2549)">
          <Rect width={46} height={46} rx={23} fill="#fff"/>
          <Path
            d="M11.162 26.462c-.265 1.742.923 2.952 2.378 3.555 5.579 2.31 13.341 2.31 18.92 0 1.455-.603 2.643-1.813 2.378-3.555-.164-1.07-.971-1.963-1.57-2.833-.784-1.155-.862-2.414-.862-3.754 0-5.178-4.211-9.375-9.406-9.375s-9.406 4.197-9.406 9.375c0 1.34-.078 2.6-.862 3.754-.598.87-1.406 1.762-1.57 2.833z"
            stroke="#333"
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M18 31.75c.573 2.157 2.594 3.75 5 3.75s4.427-1.593 5-3.75"
            stroke="#333"
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {
            props.count ? (
              <G clipPath="url(#clip1_1540_2549)">
                <Rect x={22.5} y={5} width={14} height={14} rx={7} fill="#E81515"/>
              </G>
            ) : null
          }
        </G>
        <Defs>
          <ClipPath id="clip0_1540_2549">
            <Rect width={46} height={46} rx={23} fill="#fff"/>
          </ClipPath>
          <ClipPath id="clip1_1540_2549">
            <Rect x={22.5} y={5} width={14} height={14} rx={7} fill="#fff"/>
          </ClipPath>
        </Defs>
      </Svg>
      {
        props.count ? (
          <Text style={{
            position: 'absolute',
            fontSize: 10,
            left: 26.5,
            top: 6,
            color: 'white'
          }}>
            {props.count}
          </Text>
        ) : null
      }
    </View>
  )
}

export default Notification;
