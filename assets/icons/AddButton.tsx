import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ArrowLeftIcon = (props: SvgProps) => (
  <Svg
    {...props}
    width={25}
    height={25}
    fill="none"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      fill="#FF6C00"
      // strokeLinejoin="round"
      // strokeOpacity={0.8}
      d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
    />
  </Svg>
)
export default ArrowLeftIcon;