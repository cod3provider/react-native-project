import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    {...props}
    width={25}
    height={25}
    fill="none"
  >
    <Circle
      cx={12.5}
      cy={12.5}
      r={12}
      fill="#fff"
      stroke="#E8E8E8"
      transform="rotate(-45 12.5 12.5)"
    />
  </Svg>
)
export default SvgComponent
